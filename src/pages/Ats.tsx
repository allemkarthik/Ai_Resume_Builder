import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setATSResult } from "../store/atsSlice";
import type { RootState } from "../store/appStore";

type ATSResponse = {
  score: number;
  missingSkills: string[];
  recommendations: string[];
  resume: string; 
  jobDescription: string; 
};

const Ats = () => {
  const dispatch = useDispatch();

  // Get cached ATS result from Redux
  const { score, missingSkills, recommendations, resume: cachedResume, jobDescription: cachedJD } =
    useSelector((state: RootState) => state.ats);

  const [resumeText, setResumeText] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Generate LLM prompt
  const generatePrompt = (resume: string, jobDesc: string) => {
    return `
You are an Applicant Tracking System (ATS) analyzer and senior technical recruiter.
Evaluate the resume against the provided job description.
STRICT RULES:
- Do NOT rewrite the resume.
- Do NOT fabricate skills or experience.
- Only analyze based on the provided content.
- Be objective and data-driven.
- Return ONLY valid JSON in this exact structure:
{
 "score": number,
 "missingSkills": string[],
 "recommendations": string[]
}
Do not include explanations outside JSON, markdown, or extra text.
RESUME: ${resume}
JOB DESCRIPTION: ${jobDesc}
`;
  };

  const getScoreColor = (value: number) => {
    if (value >= 80) return "text-green-600";
    if (value >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreMessage = (value: number) => {
    if (value >= 80) return "Strong ATS alignment";
    if (value >= 60) return "Moderately optimized";
    return "Needs improvement";
  };

  
  const handleCheck = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please provide both resume and job description.");
      return;
    }

    // Avoid unnecessary api calls if Redux already has this exact data
    if (score !== null && cachedResume === resumeText && cachedJD === jobDescription) {
      setError("your ATS Result is already Fetched");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const prompt = generatePrompt(resumeText, jobDescription);

      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Server error");

      const outerData = await response.json();

      // Handle backend returning stringified JSON
      let rawResult =
        typeof outerData.result === "string" ? outerData.result : JSON.stringify(outerData);

      // Remove markdown formatting
      rawResult = rawResult.replace(/```json/g, "").replace(/```/g, "").trim();

      // Extract only JSON object
      const jsonMatch = rawResult.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("Invalid JSON response from AI");

      const parsedData: ATSResponse = JSON.parse(jsonMatch[0]);

      // Validate structure
      if (
        typeof parsedData.score !== "number" ||
        !Array.isArray(parsedData.missingSkills) ||
        !Array.isArray(parsedData.recommendations)
      ) {
        throw new Error("Malformed AI response");
      }

      const safeScore = Math.min(Math.max(parsedData.score*100, 0), 100);

      // Dispatch action
      dispatch(
        setATSResult({
          score: safeScore,
          missingSkills: parsedData.missingSkills,
          recommendations: parsedData.recommendations,
          resume: resumeText,
          jobDescription: jobDescription,
        })
      );
    } catch (err) {
      console.error("ATS Error:", err);
      setError("Failed to analyze resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // SVG math
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progressOffset =
    score !== null ? circumference - (circumference * score) / 100 : circumference;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 grid md:grid-cols-2 gap-8">
        {/*  Inputs */}
        <div>
          <h2 className="text-2xl font-bold mb-6">ATS Resume Checker</h2>

          <textarea
            placeholder="Paste your Resume..."
            className="w-full h-40 p-3 border rounded-lg mb-4"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />

          <textarea
            placeholder="Paste Job Description..."
            className="w-full h-40 p-3 border rounded-lg mb-4"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <button
            onClick={handleCheck}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            {loading ? "Analyzing..." : "Check ATS Score"}
          </button>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </div>

        {/* LLm Results */}
        <div className="flex flex-col items-center justify-start">
          {score !== null && !loading ? (
            <>
              <div className="relative w-40 h-40 flex items-center justify-center mt-6">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="black"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className={`absolute text-3xl font-bold ${getScoreColor(score)}`}
                >
                  {score}%
                </span>
              </div>

              <p className={`mt-4 font-medium ${getScoreColor(score)}`}>
                {getScoreMessage(score)}
              </p>

              {missingSkills.length > 0 && (
                <div className="mt-8 w-full">
                  <h3 className="font-semibold mb-3">Missing Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {missingSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {recommendations.length > 0 && (
                <div className="mt-8 w-full">
                  <h3 className="font-semibold mb-3">Improvement Tips</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {recommendations.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            !loading && (
              <p className="text-gray-400 mt-10">
                Your ATS results will appear here.
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Ats;