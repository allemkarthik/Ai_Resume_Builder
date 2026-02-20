import React from 'react'

const Resume = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-6 pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: FORM */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            AI Resume Generator
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Generate a professional Resume using AI
          </p>

          <form className="space-y-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            {/* Applying As */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Applying As
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 p-2">
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            

            {/* Job Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                placeholder="Paste the job description here..."
              />
            </div>

            {/* Resume content */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Sample Resume for Details
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                placeholder="Paste the resume details here..."
              />
            </div>

            <button
              type="button"
              className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Generate Resume
            </button>
          </form>
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="bg-white rounded-xl shadow-md p-6 h-[100%] overflow-y-auto sticky top-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Generated AI Resume
          </h2>

          <p className="text-gray-400 text-sm italic">
            Your AI-generated Resume will appear here.
          </p>

          {/* Later this becomes API response */}
        </div>

      </div>
    </div>
    </div>
  )
}

export default Resume
