

const Ats = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT: Resume Input */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Paste Your Resume
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Paste your resume content to analyze ATS compatibility
          </p>

          <textarea
            rows={14}
            placeholder="Paste your resume here..."
            className="w-full rounded-lg border border-gray-300 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />

          <button className="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Check ATS Score
          </button>
        </div>

        {/* RIGHT: ATS SCORE */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            ATS Score
          </h1>

          {/* Score Circle */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-8 border-black border-t-transparent animate-spin-slow"></div>

            <span className="text-4xl font-bold text-gray-800">
              72%
            </span>
          </div>

          <p className="text-gray-500 mt-4 text-sm text-center">
            Your resume is moderately optimized for ATS systems
          </p>

          {/* Keywords */}
          <div className="mt-6 w-full">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Missing Keywords
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                REST API
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                TypeScript
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ats;