import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-2xl shadow-sm p-10">

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="text-gray-700 mb-8">
          These Terms & Conditions ("Terms") govern your use of
          <strong> AI Resume Builder</strong> ("Service", "we", "us", "our").
          By accessing or using our platform, you agree to be bound by these
          Terms.
        </p>

        {/* 1 */}
        <section className="space-y-6">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              1. Eligibility
            </h2>
            <p className="text-gray-700">
              You must be at least 18 years old to use this Service. By using
              the platform, you confirm that you meet this requirement.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              2. Use of the Service
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Use the Service only for lawful job-seeking purposes</li>
              <li>Do not upload false, misleading, or illegal content</li>
              <li>Do not abuse, scrape, or reverse-engineer the platform</li>
              <li>Do not attempt to bypass usage limits or security measures</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              3. AI-Generated Content Disclaimer
            </h2>
            <p className="text-gray-700">
              The Service uses artificial intelligence to generate resumes,
              cover letters, ATS scores, and emails. AI-generated content may
              contain inaccuracies. You are solely responsible for reviewing,
              editing, and verifying all generated content before use.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              4. No Guarantee of Employment
            </h2>
            <p className="text-gray-700">
              We do not guarantee interviews, job offers, employment outcomes,
              or ATS approval. Hiring decisions are made solely by employers.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700">
              The platform, design, software, and branding belong to AI Resume
              Builder. You retain ownership of the content you submit and the
              AI-generated outputs for personal use.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              6. Accounts & Security
            </h2>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your
              account. We are not liable for unauthorized access caused by your
              actions.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              7. Payments & Subscriptions (If Applicable)
            </h2>
            <p className="text-gray-700">
              Paid plans, pricing, and billing terms will be clearly displayed.
              All payments are non-refundable unless stated otherwise.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              8. Termination
            </h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate access to the Service
              if you violate these Terms.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, or consequential damages arising from
              your use of the Service.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              10. Changes to the Terms
            </h2>
            <p className="text-gray-700">
              We may update these Terms at any time. Continued use of the
              Service constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              11. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms are governed by and construed in accordance with
              applicable laws.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              12. Contact Information
            </h2>
            <p className="text-gray-700">
              For questions regarding these Terms, contact:
              <br />
              <span className="font-medium">support@airesumebuilder.com</span>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;