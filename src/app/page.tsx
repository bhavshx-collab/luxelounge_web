import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import FeaturedServices from "@/components/FeaturedServices";
import Stylists from "@/components/Stylists";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import BookAppointment from "@/components/BookAppointment";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <FeaturedServices />
        <Stylists />
        <Gallery />
        <BeforeAfter />
        <Reviews />
        <InstagramFeed />
        <BookAppointment />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
