import { useState } from "react";
import Groom from "../assets/man.jpeg";
import Bride from "../assets/woman.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import flowerright from "../assets/flowerright.png";
import flowerleft from "../assets/flowerleft.png";

const OurStory = () => {
  const [showGroomFull, setShowGroomFull] = useState(false);
  const [showBrideFull, setShowBrideFull] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const groomStory = `
    It all began on 23 May 2022 — the day I first saw her. We were meant to meet our boss for an introductory meeting at work (yes, we worked in the same organisation). 
    
    I did not know it then, but that moment would change my life.

    What struck me first was how easy it felt to talk to her. We connected like two puzzle pieces that had been waiting for each other. From that day, I found in Yodit a true friend — someone I could trust, someone whose presence made everything a little brighter.

    Before long, I realised I was looking forward to work a bit more than usual… simply because I knew I would see her smile. And that smile became the quiet 
    highlight of my everyday.

    Fast forward to 2024. We had been together for a year, and the truth was clear to me: 
    I did not want to live a single day without her. So, on 1 April 2024 (her birthday), 
    with my heart racing and my thoughts all over the place, I asked her the 
    most important question of my life: Will you marry me?

    Her answer is the reason you’re reading this today.
  `;

  const brideStory = `
    The day I met him, I knew my life was about to change. He brought joy, laughter, and love into my world in ways I never expected. His kindness, patience, and presence made every day feel lighter and more beautiful.

    What started as friendship quickly became something deeper — 
    something steady, genuine, and filled with peace. With him, 
    love feels effortless and true.

    I can’t imagine sharing my future with anyone else but him.
  `;

  // Utility to limit to first 4 paragraphs
  const getPreview = (story) => {
    const paragraphs = story.trim().split("\n").filter(p => p.trim() !== "");
    return paragraphs.slice(0, 2).join("\n\n");
  };

  return (
    <section id="our-story" className="relative py-24 px-6 bg-white text-left">

      {/* Flowers */}
      <div className="absolute -top-11 left-0 w-50 h-50">
        <img src={flowerleft} alt="Wedding Flower" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -top-11 right-0 w-50 h-50">
        <img src={flowerright} alt="Wedding Flower" className="w-full h-full object-contain" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-center text-[#b27c33]">Our Story</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden font-montserrat">
        <Slider {...settings}>

          {/* Groom */}
          <div className="flex flex-col items-center">
            <img src={Groom} alt="Groom" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

            <p className="text-[18px] text-gray-800 whitespace-pre-line">
              {showGroomFull ? groomStory : getPreview(groomStory)}
            </p>

            <div className="text-center">
              <button
                className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
                onClick={() => setShowGroomFull(!showGroomFull)}
              >
                {showGroomFull ? "See Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <img src={Bride} alt="Bride" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

            <p className="text-[18px] text-gray-800 whitespace-pre-line">
              {showBrideFull ? brideStory : getPreview(brideStory)}
            </p>

            <button
              className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
              onClick={() => setShowBrideFull(!showBrideFull)}
            >
              {showBrideFull ? "See Less" : "Read More"}
            </button>
          </div>

        </Slider>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex justify-center gap-20">
        
        {/* Groom */}
        <div className="flex flex-col items-center max-w-lg">
          <img src={Groom} alt="Groom" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

          <p className="text-[18px] text-gray-800 whitespace-pre-line">
            {showGroomFull ? groomStory : getPreview(groomStory)}
          </p>
          <button
            className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
            onClick={() => setShowGroomFull(!showGroomFull)}
          >
            {showGroomFull ? "See Less" : "Read More"}
          </button>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center max-w-lg">
          <img src={Bride} alt="Bride" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

          <p className="text-[18px] text-gray-800 whitespace-pre-line">
            {showBrideFull ? brideStory : getPreview(brideStory)}
          </p>
          <button
            className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
            onClick={() => setShowBrideFull(!showBrideFull)}
          >
            {showBrideFull ? "See Less" : "Read More"}
          </button>
        </div>

      </div>

    </section>
  );
};

export default OurStory;
