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
      <div className="">
        <div className="container mx-auto p-4 md:p-16">
          <div className="flex flex-col">
            <div className="w-full md:w-6/12">
              <p className="text-center md:text-start text-2xl md:text-3xl font-bold">
                Sekarang, Anda bisa membayar zakat, shodaqoh, dan infaq dari
                mana saja
              </p>
                <div className="mt-4 flex flex-col md:flex-row md:space-x-4 items-center md:items-start">
                <button className="bg-emerald-600 px-4 py-2 my-2 w-40 h-10 rounded-[50] text-white font-bold">
                  Bayar Zakat
                </button>
                <button className="bg-emerald-600 px-4 py-2 my-2 w-40 h-10 rounded-[50] text-white font-bold">
                  Bayar Infaq
                </button>
                </div>
            </div>
            <div className="flex-row w-6/12"></div>
          </div>
        </div>
      </div>
      <ImageSlide />
      <Agenda />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
