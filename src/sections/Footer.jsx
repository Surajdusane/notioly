import logo from '../assets/icon/logo.svg';
import { footerData } from '../constants';

function Footer() {
  return (
    <footer className="p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-10">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center">
          <a href="/">
            <img src={logo} alt="Company Logo" className=" md:h-12" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="mt-6 md:mt-0 flex flex-wrap justify-center md:justify-end  space-x-4 md:space-x-7">
          {footerData.map((stat, index) => (
            <a
              key={index}
              href={stat.link}
              className="text-base font-pop hover:text-gray-600 transition duration-300 ease-in-out"
            >
              {stat.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
