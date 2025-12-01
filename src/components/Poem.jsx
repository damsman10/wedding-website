import { useEffect, useState } from 'react';
import couple2 from "../assets/couple2.jpg"; // Import the image

// Poem Component with Scrollable Container
const Poem = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in animation on load
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300); // Delay for smooth transition
    return () => clearTimeout(timer);
  }, []);

  const poem = `
WHISPERS OF LOVE


What do you do when your problem and solution is the same person?

From the beginning of my life, I've been looking for your face but today I’ve seen it, today I've seen the charm, the beauty, the unfathomable grace of the face that I was looking for.

Today I have found you, and those who laughed & scorned me yesterday are sorry that they were not looking as I did.
I am bewildered by the magnificence of your beauty and wish to see you with a hundred eyes. My heart has burnt with passion and has searched forever for this wondrous beauty that I now behold.

I am ashamed to call this love human and afraid of God to call it divine. Your fragrant breath like the morning breeze has come to the stillness of the garden. You have breathed a new life into me; I have become your sunshine & also your shadow.

My soul is screaming in ecstasy, every fiber of my being is in love with you. Your effulgence has lit a fire in my heart and you have made radiant for me the earth and the sky.

I didn’t fall in love with you. I walked into love with you, with my eyes wide open, choosing to take every step along the way.
I do believe in fate and destiny, but I also believe we are only fated to do the things we’d choose anyway. And I would choose you — in a hundred lifetimes, in a hundred worlds, in any version of reality, I'd find you and I'd choose you.

I can sense your presence in my heart although you belong to the world.
Everyone sleeps except me — your lover who stays awake, telling stories to God.

I once had a thousand desires, but in my desire to know you all else melted away.
I would have nothing more than to simply, entirely be saturated by your existence.

I just know that you are the one I am supposed to fall for. I spent my whole life craving a soul like yours.
I was not sure if I’d ever get that lucky — but I did. And I fell hard.

You are the best thing that has ever happened to me. Falling for you was so much sweeter. It was like reading a book for the first time where every page pulls you deeper… an anticipation to know more, a curiosity burning behind my eyes.

Falling for you was a pleasant surprise.
Falling for you was a gradual liberation, an invitation into a safe haven. It was like a tight and comforting hug.
Falling in love with you was an honest surrender — falling for you was finding overwhelming peace.

One more day with you would mean the world — to bridge the gap between us that time created. A day to reminisce on all that we've missed. We could walk through the memories we shared. One more day to understand each other better. One more chance to show you my appreciation, to celebrate your presence in my life & how much you matter to me.

Just one more day could make a difference — one more day to trace the contours of your soul with the fingertips of mine. To explore the depth of what we were and what we could be together. One more day to stare into your eyes, where the sun finds envy in the light that shines from them — to see the reflection of my own feelings mirrored back.

One more day to listen to the silence between us… and the peace that comes from that.

I miss you deeply, unfathomably — senselessly, terribly.
Can’t think of anything and want only to lay my face in your lap… feel your hand on my head and remain like that for eternity.

I long for you — I, who usually longs without longing, as though unconscious in neutrality — now utterly long for every bit of you.`;

  return (
    <section
      id="poem"
      className={`py-24 px-6 bg-gradient-to-r from-[#f1e1c9] via-[#f1d199] to-[#f1b42f] text-center transition-opacity duration-1000 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Header with Side Lines and Title */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-center text-[#b27c33]">Love Letter from the Bride</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <div className="relative max-w-4xl mx-auto text-white text-lg leading-relaxed font-montserrat italic p-12 rounded-3xl shadow-2xl overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
          style={{
            backgroundImage: `url(${couple2})`, // Correctly linking the image
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",  // Optional parallax effect
          }}
        ></div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Decorative Border and Textured Background Inside the Frame */}
        <div className="absolute inset-0 p-2 border-8 border-dashed border-[#a37208] rounded-xl opacity-30 z-0"></div>
        <div className="absolute inset-0 bg-[url('/assets/textured-background.png')] bg-cover bg-center z-0 opacity-10"></div>

        {/* Scrollable Poem Container */}
        <div className="max-h-[500px] overflow-y-scroll pr-4 relative z-20">
          <p className="font-courgette whitespace-pre-line leading-relaxed">{poem}</p>
        </div>
      </div>
    </section>
  );
};

export default Poem;
