import Link from "next/link";

const Footer = (props) => {
  return (
    <div
      className="lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen xxs:w-screen p-8 space-y-4"
      style={{
        background: `linear-gradient(268.4deg, #62B4FF 0.19%, #0080F6 97.81%)`,
      }}
    >
      <div className="w-full flex lg:align-center md:align-center reno:align-center lg:flex-row md:flex-row reno:flex-row sm:flex-col xs:flex-col xxs:flex-col justify-between">
        <a href="#home" className="lg:w-1/2 md:w-1/2 reno:w-1/2 sm:w-full xs:w-full xxs:w-full sm:items-center xs:items-center xxs:items-center sm:justify-center xs:justify-center xxs:justify-center flex items-center text-xl text-white space-x-2">
          <img className="w-auto" src="/images/logo-white.svg" />
          <h4 className="lg:w-full md:w-full reno:w-full">
            Stock <span className="font-bold">Knowledge</span>
          </h4>
        </a>
        <div className="lg:w-3/4 md:w-3/4 reno:w-3/4 sm:w-full xs:w-full xxs:w-full flex items-center lg:justify-end md:justify-end reno:justify-end sm:justify-center xs:justify-center xxs:justify-center text-md text-white space-x-5">
          <Link className="text-sm" href="/terms-and-policy?policy=true">
            Privacy Policy
          </Link>
          <Link href="/terms-and-policy?terms=true">
            Terms
          </Link>
          <div className="flex align-center space-x-4">
            <a href="https://www.facebook.com/StockKnowledgetool">
              <img src="/images/facebook.svg" />
            </a>
            <a href="https://twitter.com/stockknowledge_">
              <img src="/images/twitter.svg" />
            </a>
            <a href="https://www.instagram.com/stockknowledgetool/">
              <img src="/images/instagram.svg" />
            </a>
            <a href="https://www.linkedin.com/company/stock-knowledge">
              <img src="/images/linkedin.svg" />
            </a>
            <a href="https://stock-knowledge-engineering.github.io/">
              <img src="/images/github.svg" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex align-center lg:text-sm md:text-xs text-white lg:flex-row md:flex-col reno:flex-col sm:flex-col xs:flex-col xxs:flex-col xs:items-center xxs:items-center md:space-y-4 reno:space-y-4">
        <ul className="flex justify-around md:w-full md:flex-row xs:flex-col xxs:flex-col xs:text-center xxs:text-center">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#solution">Our Solutions</a>
          </li>
          <li>
            <a href="#story">Our Story</a>
          </li>
          <li>
            <a href="/#team">Our Team</a>
          </li>
          <li>
            <a href="/#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="/#partners">Partners</a>
          </li>
          <li>
            <a href="/#articles">Articles</a>
          </li>
          <li>
            <a href="/#contactus">Contact Us</a>
          </li>
        </ul>
        <div className="lg:w-1/4 md:w-full reno:w-full xs:w-full xxs:w-full flex align-center lg:justify-end md:justify-center reno:justify-center sm:justify-center xs:justify-center xxs:justify-center sm:text-sm xs:text-sm xxs:text-sm">
          <p className="">© 2021 Stock Knowledge. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
