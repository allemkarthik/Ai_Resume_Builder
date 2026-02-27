import { log } from "console";
import React, { useState } from "react";

// Define the JSON structure we expect from LLM
type ATSResponse = {
  score: number; // 0-100
  missingSkills: string[];
  recommendations: string[];
};

const Ats = () => {
  const [resumeText, setResumeText] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [score, setScore] = useState<number | null>(null);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to generate the prompt for LLM
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
  "score": number,            // ATS match score 0–100
  "missingSkills": string[],  // List of important missing skills
  "recommendations": string[] // Improvement tips
}

Do not include explanations outside JSON, markdown, or extra text.

RESUME:
${resume}

JOB DESCRIPTION:
${jobDesc}
`;
  };

  // Calculate color for score ring
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
    if (!resumeText || !jobDescription) {
      setError("Please provide both resume and job description.");
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
      // console.log(response.json())

      // Parse JSON response from LLM
      const data: ATSResponse = await response.json();

      // Safely clamp score
      const safeScore =
        typeof data.score === "number" && !isNaN(data.score)
          ? Math.min(Math.max(data.score, 0), 100)
          : 0;

      setScore(safeScore);
      setMissingSkills(data.missingSkills || []);
      setRecommendations(data.recommendations || []);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze resume. Try again.");
      setScore(null);
      setMissingSkills([]);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 grid md:grid-cols-2 gap-8">
        {/* LEFT: Inputs */}
        <div>
          <h2 className="text-2xl font-bold mb-6">ATS Resume Checker</h2>

          <textarea
            placeholder="Paste your Resume..."
            className="w-full h-40 p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-black outline-none"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />

          <textarea
            placeholder="Paste Job Description..."
            className="w-full h-40 p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-black outline-none"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <button
            onClick={handleCheck}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Analyzing..." : "Check ATS Score"}
          </button>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </div>

        {/* RIGHT: Results */}
        <div className="flex flex-col items-center justify-start">
          {score !== null && !loading ? (
            <>
              <div className="relative w-40 h-40 flex items-center justify-center mt-6">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="black"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * score) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className={`absolute text-3xl font-bold ${getScoreColor(
                    score
                  )}`}
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