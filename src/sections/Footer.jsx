import { useEffect } from "react";
import { 
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp 
} from "react-icons/fa";



function Footer() {
  
  useEffect(() => {
    // Verifica se lo script esiste già per evitare duplicati
    if (!document.getElementById('iubenda-script')) {
      const s = document.createElement('script');
      s.src = 'https://cdn.iubenda.com/iubenda.js';
      s.id = 'iubenda-script';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

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
        {/* COOKIE POLICY */}
        <a
          href="https://www.iubenda.com/privacy-policy/17998718/cookie-policy"
          className="iubenda-black iubenda-noiframe iubenda-embed"
          title="Cookie Policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Policy
        </a>
        <p>|</p>
        {/* PRIVACY POLICY */}
        <a
          href="https://www.iubenda.com/privacy-policy/17998718"
          className="iubenda-black iubenda-noiframe iubenda-embed"
          title="Privacy Policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
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