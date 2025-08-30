import Headssb from "@/components/headssb";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Description from "@/components/description";
import Course from "@/components/course";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SSB Preparation Course with Refundable Fee - Cadet Program',
    description: 'Join our 21-day refundable SSB preparation course. Free trial available. Expert SSB guidance from selected cadets like Ayush Kumar Singh (AIR-34 TES-51) and Varadraj Patil (AIR-42 TES-51). Build officer-like qualities (OLQs) and crack your SSB interview. Limited seats - register now!',
    keywords: 'SSB coaching, SSB interview preparation, refundable course, free SSB training, cadet program, defence academy, SSB success, officer selection, Indian Army SSB, Navy SSB, Air Force SSB, Aayush Kumar Singh, Subham Singh',
    openGraph: {
        title: 'SSB Preparation Course - Refundable Program for Defence Aspirants',
        description: '21-day online SSB course with money-back guarantee. Learn from successful cadets and crack your SSB interview. Build confidence and discipline.',
    },
}

export default function Home() {
    return (
        <>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            "name": "Cadet's Course",
                            "description": "21-day online intensive SSB preparation course with refundable fee",
                            "url": "https://cadet-s-course.vercel.app",
                            // Remove the image line since we're not using it in metadata
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "IN"
                            },
                            "offers": {
                                "@type": "Offer",
                                "name": "21-Day SSB Preparation Course",
                                "price": "499",
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/LimitedAvailability",
                                "validFrom": "2025-08-27",
                                "priceValidUntil": "2025-08-27"
                            },
                            "review": {
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "4.8",
                                    "bestRating": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "Ayush Kumar Singh"
                                }
                            }
                        })
                    }}
                />

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
