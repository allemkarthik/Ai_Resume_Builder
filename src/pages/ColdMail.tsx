import React from "react";

const ColdMail = () => {
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
          />

          <button className="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Generate Cold Email
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

          <textarea
            rows={14}
            placeholder="Your AI-generated email will appear here..."
            className="w-full rounded-lg border border-gray-300 p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black flex-grow"
          />

          <button className="mt-4 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition">
            Copy Email
          </button>
        </div>

      </div>
    </div>
  );
};

export default ColdMail;