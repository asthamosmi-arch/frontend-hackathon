import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Features      from "./components/Features";
import Pricing       from "./components/Pricing";
import Testimonials  from "./components/Testimonials";
import FAQ           from "./components/FAQ";
import CTA           from "./components/CTA";
import Footer        from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
