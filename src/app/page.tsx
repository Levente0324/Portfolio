import About from "@/components/aboutme";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Stack from "@/components/techstack";

export default function Home() {
  return (
    <div className="w-full h-full m-0">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Footer />
      <Copyright />
    </div>
  );
}
// contact
