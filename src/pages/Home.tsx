import { Link } from "react-router-dom";
import resumeImage from "../assets/resume_image.png";

const Home = () => {
  return (
    <>
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

       
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Job-Winning Resume & Cover Letter Generator
          </h1>

          <p className="text-gray-600 text-lg">
            Get hired <span className="font-semibold text-gray-900">2× faster</span>.
            Use AI-powered templates and step-by-step recommendations to create
            a new resume or optimize your existing one.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
              <Link to="/resume">Optimize Resume</Link>
            </button>

            <button className="border border-black text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition">
              Create Cover Letter
            </button>
          </div>

          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span>
              Excellent <strong className="text-gray-800">4.5</strong> out of 5
            </span>
          </div>
        </div>

        
        <div className="flex justify-center">
          <img
            src={resumeImage}
            alt="AI Resume Builder Preview"
            className="w-[75%] max-w-md object-contain"
          />
        </div>

      </div>
      
    </section>
    


    {/* features section */}
    <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Heading */}
    <div className="text-center mb-14">
      <h1 className="text-4xl font-bold text-gray-900">
        Features to Optimize Your Job Search
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Powerful AI tools designed to help you land interviews faster and smarter.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      
      {[
        "AI Resume Content Optimization",
        "AI Cover Letter Generator",
        "ATS Score Checker",
        "Cold Email Generator",
        "Professional Resume Templates",
        "Enhance & Rewrite With AI",
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {feature}
          </h2>
          <p className="text-gray-600 text-sm">
            Generate high-quality, job-ready content tailored to your career goals using AI.
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

    </>
  );
};

export default Home;
