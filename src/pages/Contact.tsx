import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Reach out to us anytime — we typically respond within 24 hours.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                📧 <span className="font-medium">Email:</span>{" "}
                support@airesumebuilder.com
              </p>
              <p>
                🌍 <span className="font-medium">Website:</span>{" "}
                www.airesumebuilder.com
              </p>
              <p>
                ⏱ <span className="font-medium">Support Hours:</span>{" "}
                Mon – Fri, 9AM – 6PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;