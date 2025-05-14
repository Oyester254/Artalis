import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className=" bg-[rgb(1,53,1)]  flex  justify-center items-center px-5 py-2.5 text-center">
      <div className=" text-[16px] text-white gap-4 mx-2 p-2 text-center">
        <p>&copy; 2025 Artalis Creative Space. All rights reserved</p>
        <div className="flex gap-4 p-[10px] justify-center items-center">
          <div>
            <FaFacebookF className=" hover:text-red-300" />
          </div>
          <div>
            <FaXTwitter className=" hover:text-red-300" />
          </div>
          <div>
            <FiInstagram className=" hover:text-red-300" />
          </div>
          <div>
            <TbBrandFiverr className=" hover:text-red-300" />
          </div>
          <div>
            <FaLinkedinIn className=" hover:text-red-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
