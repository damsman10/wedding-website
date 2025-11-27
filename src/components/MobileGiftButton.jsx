import { Link } from "react-router-dom";

const MobileGiftButton = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden z-50 flex items-center gap-2 px-2">
      {/* Main static button */}
      <button
        className="bg-[#f1b42f] text-white text-sm sm:text-base font-semibold py-3 px-6 rounded-full shadow-md hover:brightness-110 transition text-center whitespace-nowrap flex items-center gap-2"
      >
        Send Cash <span>→</span>
      </button>

      {/* Currency buttons */}
      <Link
        to="/gifts/naira"
        className="bg-[#f1b42f] text-white text-sm font-semibold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition text-center"
      >
        ₦
      </Link>
      <Link
        to="/gifts/euro"
        className="bg-[#f1b42f] text-white text-sm font-semibold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition text-center"
      >
        €
      </Link>
      <Link
        to="/gifts/pounds"
        className="bg-[#f1b42f] text-white text-sm font-semibold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition text-center"
      >
        £
      </Link>
    </div>
  );
};

export default MobileGiftButton;
