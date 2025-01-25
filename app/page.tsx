import Image from "next/image";
import {Navbar} from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-black">
      <Navbar />
    </main>
  );
}
