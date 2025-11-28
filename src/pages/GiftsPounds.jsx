import HeaderPage from "../components/Sticky/HeaderPage";
import { Link } from "react-router-dom";

const GiftsPounds = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      
      <HeaderPage />

      {/* Header with divider lines */}
      <div className="flex items-center justify-center mb-6">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-bold text-[#f1b42f]">
          Bless Us With A Gift (£)
        </h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
        Thank you so much for your generosity.  
        Your gift in <strong>British Pounds (£)</strong> goes a long way in helping us build our home together.
      </p>

      {/* Transfer Details Box */}
      <div className="max-w-xl mx-auto bg-[#fff9e8] border border-[#f1b42f] rounded-xl p-8 shadow-md mb-16">
        <h3 className="text-2xl font-semibold text-[#b3871f] mb-4">
          UK Bank Transfer Details
        </h3>

        <p className="text-lg text-gray-800 mb-2">
          <strong>Bank Name:</strong> Monzo Bank
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Account Name:</strong> John & Jane Wedding Gift
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Sort Code:</strong> 12-34-56
        </p>
        <p className="text-lg text-gray-800 mb-6">
          <strong>Account Number:</strong> 98765432
        </p>

        <button
          onClick={() => navigator.clipboard.writeText("98765432")}
          className="px-6 py-3 bg-[#f1b42f] text-white rounded-full font-semibold hover:brightness-110 transition"
        >
          Copy Account Number
        </button>
      </div>

      {/* Link back to Naira page */}
      <div className="mt-10 sm:block hidden">
        <Link
          to="/gifts/naira"
          className="text-[#b3871f] text-lg font-semibold hover:underline inline-flex items-center gap-2"
        >
          Switch to Naira (₦) Gift Page
          <span>→</span>
        </Link>
      </div>

    </section>
  );
};

export default GiftsPounds;
