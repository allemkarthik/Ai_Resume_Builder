import { useState } from "react";

const CoverLetter = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [role, setRole] = useState("fresher");
  const [tone, setTone] = useState("formal");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const generateCoverLetter = async () => {
    if (!companyName || !jobDescription) {
      setError("Company name and job description are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const prompt = `
Act as a senior hiring manager.
Write a professional ATS-optimized cover letter.
Avoid generic phrases.
Keep it under 300 words.
Tone: ${tone}
Candidate type: ${role}
Company: ${companyName}
Job Description: ${jobDescription}
`;

      const res = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setError("Failed to generate cover letter. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-2">AI Cover Letter</h1>
          <p className="text-gray-500 text-sm mb-6">
            Generate a job-ready cover letter using AI
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Company name"
              className="w-full border p-2 rounded"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <select
              className="w-full border p-2 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="fresher">Fresher</option>
              <option value="experienced">Experienced</option>
            </select>

            <select
              className="w-full border p-2 rounded"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="formal">Formal</option>
              <option value="informal">Informal</option>
            </select>

            <textarea
              rows={5}
              placeholder="Paste job description..."
              className="w-full border p-2 rounded"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={generateCoverLetter}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              {loading ? "Generating..." : "Generate Cover Letter"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="font-semibold mb-4">Generated Cover Letter</h2>

          {!result && (
            <p className="text-gray-400 italic">
              Your AI-generated content will appear here.
            </p>
          )}

          {result && (
            <div className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;