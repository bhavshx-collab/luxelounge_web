import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import FeaturedServices from "@/components/FeaturedServices";
import OurPromise from "@/components/OurPromise";
import Gallery from "@/components/Gallery";
import ComingSoonServices from "@/components/ComingSoonServices";
import WhyLuxeLounge from "@/components/WhyLuxeLounge";
import GrandOpening from "@/components/GrandOpening";
import FoundersVision from "@/components/FoundersVision";
import InstagramFeed from "@/components/InstagramFeed";
import BookAppointment from "@/components/BookAppointment";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* ── Section 1: Cinematic hero */}
        <Hero />

        {/* ── Section 2: Brand story */}
        <About />

        {/* ── Section 3: Why The Luxe Lounge (replaces old WhyChooseUs) */}
        <WhyChooseUs />

        {/* ── Section 4: Luxury services list */}
        <Services />

        {/* ── Section 5: Featured signature services */}
        <FeaturedServices />

        {/* ── Section 6: Our Promise (replaces fake Stylists) */}
        <OurPromise />

        {/* ── Section 7: Gallery */}
        <Gallery />

        {/* ── Section 8: Coming Soon Services (replaces Before/After) */}
        <ComingSoonServices />

        {/* ── Section 9: Why Choose The Luxe Lounge (replaces fake Reviews) */}
        <WhyLuxeLounge />

        {/* ── Section 10: Grand Opening */}
        <GrandOpening />

        {/* ── Section 11: Founder's Vision */}
        <FoundersVision />

        {/* ── Section 12: Instagram Feed */}
        <InstagramFeed />

        {/* ── Section 13: Book Appointment */}
        <BookAppointment />

        {/* ── Section 14: FAQ */}
        <FAQ />

        {/* ── Section 15: Location + Map */}
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
