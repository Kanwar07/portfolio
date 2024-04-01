import React, { useContext } from "react";
import footerstyle from "./Footer.module.css";
import { data } from "../context/Context";

function Footer() {
  const { socialhandles } = useContext(data);
  return (
    <div className={footerstyle.main}>
      <div>
        <div className="pt-4 pb-4">
          <a
            href="#Skills"
            className="text-[24px] cursor-pointer text-[#000000] hover:text-[#ffffff]"
          >
            Skills
          </a>
        </div>
        <div className="pt-4 pb-4">
          <a
            href="#Projects"
            className="text-[24px] cursor-pointer text-[#000000] hover:text-[#ffffff]"
          >
            Projects
          </a>
        </div>
        <div className="pt-4 pb-4">
          <a
            href="#Services"
            className="text-[24px] cursor-pointer text-[#000000] hover:text-[#ffffff]"
          >
            Services
          </a>
        </div>
        <div className="pt-4 pb-4">
          <a
            href="#Testimonials"
            className="text-[24px] cursor-pointer text-[#000000] hover:text-[#ffffff]"
          >
            Testimonials
          </a>
        </div>
      </div>
      <div className="flex flex-row">
        {socialhandles.length > 0 &&
          socialhandles.map((handle) => {
            const { image, platform, _id } = handle;
            return (
              <div key={_id} className="mr-4 cursor-pointer">
                <img src={image.url} alt={platform} className="size-6" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Footer;
