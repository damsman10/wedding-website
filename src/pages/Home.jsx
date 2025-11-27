import Hero from "../components/Hero"
import OurStory from "../components/OurStory"
import Rsvp from "../components/Rsvp"
import Gifts from "../components/Gifts"
import Gallery from "../components/Gallery"
import Party from "../components/Party"
import Faq from "../components/FAQ"
import Header from "../components/Sticky/Header"


const Home = () => {
  return (
    <div id="home" className="overflow-hidden">
      <Header />
      <Hero />
      <OurStory />
      <Gallery />
      <Gifts />
      <Party />
      <Rsvp />
      <Faq />
    </div>
  )
}

export default Home