import React, { useState } from "react";

const Resume = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<"fresher" | "experienced">("fresher");
  const [jobDes, setJobDesc] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState("");

  const generateResume = async () => {
    if (!company || !jobDes || !resume) {
      setError("Company name, job description & resume are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const prompt = `
You are a senior hiring manager and ATS optimization specialist.

Your task is to REBUILD the candidate’s resume from scratch using only relevant information from the provided resume.

CRITICAL RULES:
- Do NOT copy headings or irrelevant sections from the original resume.
- Do NOT include internship program titles, qualification requirements, or job posting content.
- Do NOT fabricate metrics or experience.
- Remove redundant, weak, or generic phrases.
- Convert responsibilities into measurable impact statements when possible.
- Improve clarity, professionalism, and structure.
- Output ONLY the final resume.
- No explanations.
- No markdown formatting.
- No bold text.
- No special symbols.
- Clean spacing between sections.
- ATS friendly plain text.
- Maximum 400 words.
- keep horizontal black border line from left to right for each section

STRUCTURE (strictly follow):

FULL NAME
City, State
Phone | Email | LinkedIn | Portfolio

PROFESSIONAL SUMMARY
2–3 lines focused on technical strengths and measurable impact.

TECHNICAL SKILLS
Grouped clearly by category.

PROFESSIONAL EXPERIENCE
Job Title – Company – Duration
• Impact-driven bullet
• Impact-driven bullet
• Impact-driven bullet

PROJECTS
Project Name
• Impact-driven bullet
• Impact-driven bullet

EDUCATION
Degree – Institution – Graduation Date – GPA (if strong)

Now rebuild the resume using ONLY relevant content from below:
Candidate type: ${role}
Company: ${company}
Job Description: ${jobDes}
Previous Resume: ${resume}
`;

      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setError("Failed to generate resume. Try again."+err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            AI Resume Generator
          </h1>

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border p-2 rounded"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <select
              className="w-full border p-2 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
            >
              <option value="fresher">Fresher</option>
              <option value="experienced">Experienced</option>
            </select>

            <textarea
              rows={4}
              className="w-full border p-2 rounded"
              placeholder="Job description"
              value={jobDes}
              onChange={(e) => setJobDesc(e.target.value)}
            />

            <textarea
              rows={4}
              className="w-full border p-2 rounded"
              placeholder="Paste resume"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />

            <button
              type="button"
              className="w-full bg-black text-white py-2 rounded"
              onClick={generateResume}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Resume"}
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl shadow-md p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">
            Generated Resume
          </h2>

          {result ? (
            <pre className="whitespace-pre-wrap text-sm">{result}</pre>
          ) : (
            <p className="text-gray-400 italic">
              Your AI-generated resume will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;