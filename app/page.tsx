import NavItem from "./components/NavItem";
import ImageSlide from "./components/ImageSlide";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-green-900 text-white">
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
            <NavItem>Tentang</NavItem>
          </ul>
        </div>
          </div>
        </div>
      </div>
      <ImageSlide />
      <div className="grid sm:grid-cols-2 container mx-auto sm:py-20 py-10 gap-10">
        <div className="flex sm:py-10 py-2 px-10 items-center">
          <div className="rounded-full h-[150px] w-[150px] overflow-hidden flex-shrink-0">
            <Image
              src="/images/person-1.jpg"
              alt="testimonials"
              width={150}
              height={150}
              className="object-cover object-center h-full w-full"
            />
          </div>
          <div className="pl-10">
            <p>
              Ini adalah testimoni yang memiliki kalimat yang cukup panjang. Ini
              terdiri dari minimal dua puluh lima kata.
              <br />
              <span className="font-bold italic">- Sahrul Hidayat</span>
            </p>
          </div>
        </div>
        <div className="flex sm:py-10 py-2 px-10 items-center">
          <div className="rounded-full h-[150px] w-[150px] overflow-hidden flex-shrink-0">
            <Image
              src="/images/person-1.jpg"
              alt="testimonials"
              width={150}
              height={150}
              className="object-cover object-center h-full w-full"
            />
          </div>
          <div className="pl-10">
            <p>
              Ini adalah testimoni yang memiliki kalimat yang cukup panjang. Ini
              terdiri dari minimal dua puluh lima kata.
              <br />
              <span className="font-bold italic">- Sahrul Hidayat</span>
            </p>
          </div>
        </div>
        <div className="flex sm:py-10 py-2 px-10 items-center">
          <div className="rounded-full h-[150px] w-[150px] overflow-hidden flex-shrink-0">
            <Image
              src="/images/person-1.jpg"
              alt="testimonials"
              width={150}
              height={150}
              className="object-cover object-center h-full w-full"
            />
          </div>
          <div className="pl-10">
            <p>
              Ini adalah testimoni yang memiliki kalimat yang cukup panjang. Ini
              terdiri dari minimal dua puluh lima kata.
              <br />
              <span className="font-bold italic">- Sahrul Hidayat</span>
            </p>
          </div>
        </div>
        <div className="flex sm:py-10 py-2 px-10 items-center">
          <div className="rounded-full h-[150px] w-[150px] overflow-hidden flex-shrink-0">
            <Image
              src="/images/person-1.jpg"
              alt="testimonials"
              width={150}
              height={150}
              className="object-cover object-center h-full w-full"
            />
          </div>
          <div className="pl-10">
            <p>
              Ini adalah testimoni yang memiliki kalimat yang cukup panjang. Ini
              terdiri dari minimal dua puluh lima kata.
              <br />
              <span className="font-bold italic">- Sahrul Hidayat</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
