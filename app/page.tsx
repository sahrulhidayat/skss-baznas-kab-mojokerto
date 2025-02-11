import NavItem from "./components/NavItem";
import ImageSlide from "./components/ImageSlide";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-emerald-600 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between py-2 px-5">
            <div className="w-6/12 uppercase text-base sm:text-xl sm:w-3/12 font-semibold tracking-wider leading-4">
              SKSS BAZNAS KABUPATEN MOJOKERTO
            </div>
            <div className="w-6/12 flex justify-end">
              <div className="flex sm:hidden h-full items-center">
                <button className="text-white focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="hidden sm:flex justify-end space-x-10 h-full items-center">
                <NavItem>Beranda</NavItem>
                <NavItem>Blog</NavItem>
                <NavItem>FAQ</NavItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ImageSlide />
      <div className="relative py-24">
        <h1 className="text-6xl text-white font-bold text-center w-full mb-24" style={{ textShadow: "0 0 6px rgba(0,0,0,0.4)" }}>
          Apa kata mereka?
        </h1>
        <div
          className="absolute -z-10 bottom-[2%] left-0 -mr-56 h-[30rem] w-screen max-w-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 238, 88, 0.6) 0%, rgba(255, 238, 88, 0.4) 40%, rgba(255, 238, 88, 0.2) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -z-10 bottom-[2%] left-0 -ml-56 h-[30rem] w-screen max-w-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(5, 150, 105, 0.6) 0%, rgba(5, 150, 105, 0.4) 40%, rgba(5, 150, 105, 0.2) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <Testimonials />
      </div>
    </>
  );
}
