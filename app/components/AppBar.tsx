import NavItem from "../components/NavItem";
import Image from "next/image";

const AppBar = () => {
  return (
    <div className="bg-emerald-600 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between py-2 px-5">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={48} height={48} className="w-12 h-12 mr-4" />
            <div className="uppercase text-base font-semibold tracking-wider leading-4 md:leading-5">
              SKSS BAZNAS <br/> KABUPATEN MOJOKERTO
            </div>
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
              <NavItem>Blog</NavItem>
              <NavItem>FAQ</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
