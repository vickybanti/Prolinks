import Image from "next/image";
import {Hero} from "./components/Hero";
import {Socials} from "./components/Socials"
import {Location} from "./components/Location"
import Work from "./components/Work"
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./components/ui/tracing-beam";


export default function Home() {
  return (
    
            <main >

      <Hero />
      <Socials />
      <Location />
      <Work />
      </main>


  );
}
