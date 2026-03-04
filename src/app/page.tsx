
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WebDev from "../components/WebDev";
import DiscordDev from "../components/DiscordDev";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Kyro from "../components/Kyro";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <WebDev />
      <DiscordDev />
      <Projects />
      <Contact />
      <Kyro />
    </main>
  );
}
