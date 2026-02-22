import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-2xl shadow-sm p-10">

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="text-gray-700 mb-8">
          <strong>AI Resume Builder</strong> ("we", "our", "us") respects your
          privacy and is committed to protecting your personal data. This
          Privacy Policy explains how we collect, use, store, and protect your
          information when you use our platform.
        </p>

        {/* 1 */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Resume content, cover letters, job descriptions, and emails you submit</li>
              <li>Account information such as email address (if applicable)</li>
              <li>Usage data including pages visited and feature usage</li>
              <li>Technical data such as browser type and device information</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>To generate AI-powered resumes, cover letters, and emails</li>
              <li>To analyze ATS compatibility</li>
              <li>To improve platform performance and features</li>
              <li>To provide support and communicate updates</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              3. AI & Automated Processing
            </h2>
            <p className="text-gray-700">
              Your content may be processed using third-party AI services to
              generate outputs. We do not use your data to train public AI
              models, and we do not sell your personal information.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              4. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-gray-700">
              We process your data based on your consent, contractual necessity,
              and our legitimate interest in providing and improving our
              services.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              5. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain your data only for as long as necessary to provide our
              services or comply with legal obligations. You may request data
              deletion at any time.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              6. Data Security
            </h2>
            <p className="text-gray-700">
              We use reasonable technical and organizational safeguards to
              protect your data. However, no online service is completely
              secure.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              7. Cookies & Analytics
            </h2>
            <p className="text-gray-700">
              We may use cookies and analytics tools to understand user behavior
              and improve our platform. You can disable cookies in your browser
              settings.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              8. Your Rights (GDPR & CCPA)
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              9. Third-Party Services
            </h2>
            <p className="text-gray-700">
              We may integrate third-party services such as AI APIs, hosting
              providers, and analytics tools. These providers are obligated to
              protect your data.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Updates will be
              posted on this page.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              11. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, contact us at:
              <br />
              <span className="font-medium">support@airesumebuilder.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;