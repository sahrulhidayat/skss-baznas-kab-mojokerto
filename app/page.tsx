import Agenda from "./components/Agenda";
import AppBar from "./components/AppBar";
import ImageSlide from "./components/ImageSlide";
import Testimonials from "./components/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AppBar />
      <ImageSlide />
      <Agenda />
      <Testimonials />
      <footer className="w-full h-[300px] bg-zinc-900 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-between items-center px-8 text-white">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={86}
              height={86}
              className="hidden sm:block"
            />
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-6/12 my-12 space-y-4 md:space-y-0 md:space-x-8 justify-end items-center">
            <Link href="" className="hover:underline">
              About Us
            </Link>
            <Link href="" className="hover:underline">
              Contact
            </Link>
            <Link href="" className="hover:underline">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
