import { 
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp 
} from "react-icons/fa";

function Footer() {
  return (
    <section 
      className="flex flex-wrap items-center justify-between 
                 gap-5 pb-6 text-sm text-neutral-400 c-space"
    >
      <div
        className="mb-4 bg-gradient-to-r from-transparent 
                  via-neutral-700 to-transparent h-[1px] w-full"
      />
      <div className="flex gap-2">
        <p className="cursor-pointer">
          Terms & Conditions
        </p>
        <p>|</p>
        <p className="cursor-pointer">
          Privacy Policy
        </p>
      </div>
      <div className="flex gap-5 text-white">
        {/* <a 
          href="https://www.instagram.com/roccotaccogna/"
          target="_blank"
        >
          <FaInstagram 
            className="w-7 h-7"
          />
        </a> */}
        {/* <a 
          href="https://www.linkedin.com/in/rocco-taccogna-39aaa7263/"
          target="_blank"
        >
          <FaLinkedin 
            className="w-7 h-7"
          />
        </a> */}
        <a 
          href="https://wa.me/393462404139"
          target="_blank"
        >
          <FaWhatsapp  
            className="w-7 h-7"
          />
        </a>
      </div>
      <p>
        © 2025 &nbsp;
          <span class="text-teal-500">ValRoc</span> &nbsp;
        All rights reserved.
      </p>
    </section>
  )
}

export default Footer;