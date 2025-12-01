import HeaderPage from "../components/Sticky/HeaderPage";
import { Link } from "react-router-dom";

const GiftsDollar = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <HeaderPage />

      {/* header with gold lines */}
      <div className="font-montserrat flex items-center justify-center mb-6">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-bold text-[#a67304]">
          Bless Us With A Gift ($)
        </h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
        Your support means the world to us.  
        Complete your gift securely through PayPal. Thank you for choosing to be a blessing. 💛
      </p>

      {/* PayPal Button */}
      <div className="mb-16 flex justify-center">
        <button
          onClick={() => window.open("https://www.paypal.com/pool/9kuMNfEmoY?sr=wccr", "_blank")}
          className="px-6 py-3 bg-[#f1b42f] text-white rounded-full font-semibold hover:brightness-110 transition"
        >
          Contribute via PayPal
        </button>
      </div>

      {/* CURRENCY SWITCH LINKS */}
      <div className="mt-10 sm:block hidden">
        <Link
          to="/gifts/naira"
          className="text-[#b3871f] text-lg font-semibold hover:underline inline-flex items-center gap-2"
        >
          Switch to Naira (₦) Gift Page
          <span>→</span>
        </Link>
      </div>

      <div className="mt-3 sm:block hidden">
        <Link
          to="/gifts/euro"
          className="text-[#b3871f] text-lg font-semibold hover:underline inline-flex items-center gap-2"
        >
          Switch to Euro (€) Gift Page
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default GiftsDollar;
