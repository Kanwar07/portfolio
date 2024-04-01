import React, { useContext } from "react";
import footerstyle from "./Footer.module.css";
import { data } from "../context/Context";

function Footer() {
  const { socialhandles } = useContext(data);
  return (
    <div className={footerstyle.main}>
      <div>
        <div className="pt-4 pb-4 text-[24px] cursor-pointer">Skills</div>
        <div className="pt-4 pb-4 text-[24px] cursor-pointer">Projects</div>
        <div className="pt-4 pb-4 text-[24px] cursor-pointer">Services</div>
        <div className="pt-4 pb-4 text-[24px] cursor-pointer">Testimonials</div>
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
