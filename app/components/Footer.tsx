import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={86}
          height={86}
          className="hidden sm:block"
        />
      </aside>
      <nav>
        <h6 className="footer-title">Social Media</h6>
        <div className="grid grid-flow-col gap-4">
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
            href="https://www.instagram.com/skss.baznaskabmojokerto"
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
      </nav>
    </footer>
  );
};
export default Footer;
