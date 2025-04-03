import AppBar from "./components/AppBar";
import ImageSlide from "./components/ImageSlide";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <AppBar />
      <ImageSlide />
      <div className="max-7xl relative py-24 flex justify-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-24 px-8 text-center">Agenda</h1>
          <ul className="px-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">10-14 Maret 2025</time>
                <div className="text-lg font-black">Pasar Murah Ramadhan</div>
                Membantu BAZNAS Kabupaten Mojokerto untuk melaksanakan acara
                Pasar Murah Ramadhan. Acara ini bertujuan untuk membantu
                masyarakat yang membutuhkan dalam memenuhi kebutuhan pokok
                selama bulan Ramadhan
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">April 2025</time>
                <div className="text-lg font-black">Jum&apos;at Berkah</div>
                Kami memberdayakan sedekah dari pengusaha warung makanan berupa sejumlah makanan dan kotak nasi sekitar dan membagikannya kepada masyarakat
                sekitar yang membutuhkan
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">???</time>
                <div className="text-lg font-black">
                  Tunggu acara kami selanjutnya ya...!!
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Testimonials />
    </>
  );
}
