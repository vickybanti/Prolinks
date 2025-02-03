import Image from "next/image";
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Socials} from "./components/Socials"
import {Location} from "./components/Location"
import Work from "./components/Work"
import Footer from "./components/Footer"
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./components/ui/tracing-beam";


export default function Home() {
  return (
    
            <main >

      <Navbar />
      <Hero />
      <Socials />
      <Location />
      <Work />
      <Footer />
      </main>


  );
}
