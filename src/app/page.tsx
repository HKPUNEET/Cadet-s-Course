import Image from "next/image";
import Headssb from "@/components/headssb";
import About from "@/components/about";
import Enroll from "@/components/enroll";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div >
      <Headssb></Headssb>


        <Hero></Hero>
        <div style={{ height: "200vh", background: "#111" }}>
            <h1 style={{ color: "white" }}>Scroll me</h1>
        </div>


      <About></About>

      <Contact></Contact>

      <Enroll></Enroll>


    </div>
  );
}
