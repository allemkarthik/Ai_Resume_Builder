const CoverLetter=()=>{
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            AI Cover Letter
          </h1>
          <p className="text-gray-500 mt-2">
            Generate a professional cover letter using AI
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. Google"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-xs text-gray-500 mt-1">
              Company you are applying to
            </p>
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
            <p className="text-xs text-gray-500 mt-1">
              Select your experience level
            </p>
          </div>

          {/* Cover Letter Tone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Letter Tone
            </label>
            <select className="mt-1 w-full rounded-md border border-gray-300 p-2">
              <option value="formal">Formal</option>
              <option value="informal">Informal</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Choose how professional the letter should sound
            </p>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              rows={4}
              placeholder="Paste the job description here..."
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          

          {/* Button */}
          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Generate Cover Letter
          </button>
        </form>
      </div>
    </div>
    )
}
export default CoverLetter