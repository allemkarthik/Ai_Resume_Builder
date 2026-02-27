import  { useState } from "react";


const ColdMail = () => {
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, seterror] = useState("");
  const [result, setresult] = useState();

  const generateColdEmail = async () => {
    if (!jobDesc) {
      seterror("Job Description is Required");
      return;
    }
    setLoading(true);
    seterror("");

    try {
      const prompt = `
      Act as a senior hiring manager.
Write a professional ATS-optimized cold email for recruters.
Avoid generic phrases.
Keep it under 200 words.
based on Job Description ${jobDesc}

      `;

      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setresult(data.result);
    } catch (err) {
      seterror("Failed to generate cover letter. Try again." + err);
    }
    finally{
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: Job Description */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Paste Job Description
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Add the job description to generate a personalized cold email
          </p>

          <textarea
            rows={14}
            placeholder="Paste the job description here..."
            className="w-full rounded-lg border border-gray-300 p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            className="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            onClick={generateColdEmail}
          >
            {loading ? "Generating":"Generate Cold Email"}
          </button>
        </div>

        {/* RIGHT: Generated Email */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Your Cold Email
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Edit or copy the generated email before sending
          </p>

          {!result && <p className="text-gray-400 italic">Your Ai generated email will apper here....</p>}
          {result && (
            <div className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{result}</div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default ColdMail;
