import Agenda from "./components/Agenda";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import ImageSlide from "./components/ImageSlide";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FrequentlyAskedQuestions";

export default function Home() {
  return (
    <>
      <AppBar />
      <ImageSlide />
      <Agenda />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
