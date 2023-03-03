import Link from "next/link";
import Image from "next/image";
//flex items-center justify-between
import logo from "../../public/assets/img/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer_wrap">
          <div className="footer-logo">
            <Image src={logo} alt="Atlas Vela Luka footer logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/policy-and-privacy">Policy and Privacy</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="info">
            <Link
              href="https://goo.gl/maps/LhU437yGSuFeKJQV9"
              className="location"
            >
              Location
            </Link>
            <Link href="mailto:velalukaatlas@gmail.com" className="telephone">
              Email
            </Link>
            <Link href="tel:+385 91 610 0130">Telephone</Link>
          </div>
        </div>
        <div className="copyright__wrapper">
          <p className="copyright">
            © 2021 Atlas Vela Luka. All rights reserved.
          </p>
          <p>
            HandCrafted by{" "}
            <Link
              className="vik underline"
              href="https://www.instagram.com/viktorbilokapic/"
            >
              VB
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
