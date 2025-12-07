import { useState } from "react";
import Groom from "../assets/man.jpg";
import Bride from "../assets/woman.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurStory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title, story) => {
    setModalTitle(title);
    setModalContent(story);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
    We met in the summer of 2022, not in the middle of some grand romantic setting, but simply at work two working students assigned to the same team. 
    
    At first, it was just easy teamwork. We understood each other,
     laughed at the same things, and fell into a natural rhythm that made even the busiest workdays feel light.
    From the very beginning, one thing stayed with me: his kind eyes. Long before I knew anything else about him, those eyes told me he was someone gentle, trustworthy, and safe.

    It was also my first year in Germany, a time filled with loneliness. I was struggling to find my way and to feel like I belonged somewhere again. Meeting him felt like an opening into a new world. He was the first person who made me feel that I wasn’t alone in a foreign place.

    Our friendship grew quickly, in a kind of way that feels effortless. We supported one another, laughed through stressful days, and shared small pieces of ourselves that slowly built into something meaningful. Caring for each other came naturally. We started to rely on one another, not just as coworkers, not just as friends but as people who genuinely wanted the best for each other.

    Looking back, falling in love didn’t feel like a dramatic leap. It felt like the most natural next step, almost as if the path had been quietly shaping itself since the moment we met. Friendship turned into care, care into trust, and trust into imagining a life we wanted to build side by side.
    And then came the surprise of my life:
    On my birthday this year, he proposed!

    I didn’t see it coming not at that exact moment, not in that beautiful way he chose, But the instant he asked, everything became clear. I saw our future all at once: warm, steady, full of shared dreams. And I felt a joy I had never felt before. It was one of the happiest moments of my life, a moment that tied together everything we had grown through since the day we met.

    What began as two working students in the same team has become a partnership built on kindness, connection, and the beautiful surprise of finding love where you least expect it and choosing each other, again and again, as we build our future together.

  `;

  const getPreview = (story) => {
    const paragraphs = story.trim().split("\n").filter(p => p.trim() !== "");
    return paragraphs.slice(0, 2).join("\n\n");
  };

  return (
    <section id="our-story" className="relative py-24 px-6 bg-white text-left">

      {/* Header */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-center text-[#b27c33]">
          Our Story
        </h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden font-montserrat">
        <Slider {...settings}>

          {/* Groom */}
          <div className="flex text-center flex-col items-center">
            <div className="flex justify-center">
              <img
                src={Groom}
                alt="Groom"
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
              />
            </div>

            <p className="text-[18px] text-gray-800 whitespace-pre-line">
              {getPreview(groomStory)}
            </p>

            <button
              className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
              onClick={() => openModal("Groom’s Story", groomStory)}
            >
              Read More
            </button>
          </div>

          {/* Bride */}
          <div className="flex text-center flex-col items-center">
            <div className="flex justify-center">
              <img
                src={Bride}
                alt="Bride"
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
              />
            </div>

            <p className="text-[18px] text-gray-800 whitespace-pre-line">
              {getPreview(brideStory)}
            </p>

            <button
              className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
              onClick={() => openModal("Bride’s Story", brideStory)}
            >
              Read More
            </button>
          </div>

        </Slider>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex justify-center gap-20">

        {/* Groom */}
        <div className="flex flex-col items-center max-w-lg">
          <img
            src={Groom}
            alt="Groom"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
          />

          <p className="text-[18px] text-gray-800 whitespace-pre-line">
            {getPreview(groomStory)}
          </p>

          <button
            className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
            onClick={() => openModal("Groom’s Story", groomStory)}
          >
            Read More
          </button>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center max-w-lg">
          <img
            src={Bride}
            alt="Bride"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
          />

          <p className="text-[18px] text-gray-800 whitespace-pre-line">
            {getPreview(brideStory)}
          </p>

          <button
            className="mt-4 text-[#b27c33] font-semibold cursor-pointer"
            onClick={() => openModal("Bride’s Story", brideStory)}
          >
            Read More
          </button>
        </div>

      </div>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={closeModal} // clicking outside closes
        >
          <div
            className="bg-white rounded-lg max-w-xl w-full p-6 relative shadow-xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >

            <h3 className="text-2xl font-bold text-[#b27c33] mb-4">
              {modalTitle}
            </h3>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {modalContent}
            </p>

            <button
              className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default OurStory;
