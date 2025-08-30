import Headssb from "@/components/headssb";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Description from "@/components/description";
import Course from "@/components/course";

export default function Home() {
    return (
        <>
            <Headssb />
            <section className="parallax" id="section-1">
                <Hero />
            </section>

            <section className="content-section">
                <div className="content">
                    <p></p>
                </div>
            </section>

            <section className="parallax" id="section-2">
                <div className="wrapper">
                    <About />
                </div>
            </section>

            {/*<section className="content-section">*/}
            {/*    <div className="content">*/}
            {/*        <p>some content here...</p>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="parallax" id="section-3">
                {/*<div className="wrapper">*/}
                    <Description/>
                {/*</div>*/}
            </section>

            <section className="content-section">
                <div className="content">
                    <p></p>
                </div>
            </section>
            <section className="parallax" id="section-4">
                <div className="wrapper" id="wrapper1">
                    <Course/>
                </div>
            </section>
            <section className="content-section">
                <div className="content">
                    <p></p>
                </div>
            </section>
            <section className="parallax" id="section-5">
                <div className="wrapper" id="wrapper1">
                    <Contact />
                </div>
            </section>

            <section className="content-section">
                <div className="content">
                    <p></p>
                </div>
            </section>


        </>
    );
}
