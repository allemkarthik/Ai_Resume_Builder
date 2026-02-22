import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            About AI Resume Builder
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We help job seekers build job-winning resumes, cover letters, and
            cold emails using the power of Artificial Intelligence.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid gap-10 md:grid-cols-2 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600">
              To simplify the job application process by providing AI-powered
              tools that help candidates stand out, pass ATS systems, and get
              hired faster.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🚀 Our Vision
            </h2>
            <p className="text-gray-600">
              A world where talent is judged by skill and potential — not by
              resume formatting or keyword mistakes.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose AI Resume Builder?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "AI-optimized resumes tailored for ATS systems",
              "Professional cover letters in seconds",
              "ATS score analysis & improvement tips",
              "Cold emails that get replies",
              "Modern templates used by top companies",
              "Built for students, freshers & professionals",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 font-medium">
                  ✅ {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built With Modern Technology
          </h2>
          <p className="text-gray-600 mb-8">
            Designed for performance, scalability, and a smooth user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Vite",
              "AI APIs",
              "REST APIs",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;