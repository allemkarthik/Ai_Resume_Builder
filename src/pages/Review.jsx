import React from 'react'

const Review = () => {
  return (
    <div>
      {/* Reviews / Hiring Companies Section */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
      Our users are hired by
    </p>

    {/* Logos */}
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon"
        className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft"
        className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
        alt="Walmart"
        className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google"
        className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo.svg"
        alt="Meta"
        className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default Review
