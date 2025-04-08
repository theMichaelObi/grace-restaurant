import About from "./sections/About";
import Contact from "./sections/Contact";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Reviews from "./sections/Reviews";
import Reservation from "./sections/Reservation";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Menu />
        <Specials />
        <Events />
        <Reservation />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
    </>
  );
};
