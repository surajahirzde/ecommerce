import { Link } from "react-router-dom";
import "./style/footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  const list = [
    {
      name: "about",
      links: [
        "Contact Us",
        " About Us",
        " Careers",
        "Flipkart Stories",
        "Press",
        "Corporate Information",
      ],
    },
    {
      name: "Group Companies",
      links: ["Myntra", "Cleartrip", "Shopsy"],
    },
    {
      name: "Help",
      links: [
        " Payments",
        " Shipping",
        " Cancellation & Returns",
        " FAQ",
        "Report Infringement",
      ],
    },
    {
      name: "Consumer",
      links: [
        "Cancellation & Returns",
        "Terms Of Use",
        " Security",
        "     Privacy",
        "     Sitemap",
        " Grievance Redressal",
        "   EPR compliance",
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="footerLink">
        {list.map((foot, index) => {
          return (
            <div key={index}>
              <p>{foot.name}</p>
              <ul>
                {foot.links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link to={link.trim().replace(/\s/g, "-")}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="addressInfo">
          <p>Personal Infomation</p>
          <address>
            <span>
              <FaHome /> : <span>Mirzapur</span>
            </span>
            <span>
              <FaPhoneAlt />:
              <a
                href="tel:8810300724"
                target="_blank"
                rel="noopener noreferrer"
              >
                8810300724
              </a>
            </span>
            <span>
              <IoLogoWhatsapp /> :
              <a
                href="https://wa.me/918810300724"
                target="_blank"
                rel="noopener noreferrer"
              >
                8810300724
              </a>
            </span>
            <span>
              <MdEmail /> :
              <a
                href="mailto:sy241527@gmail.com?body=hello, this message from FlipKart Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                sy241527@gmail.com
              </a>
            </span>
            <span>
              <RiInstagramFill /> :
              <a
                href="https://instagram.com/surajahirzde"
                target="_blank"
                rel="noopener noreferrer"
              >
                surajahirzde
              </a>
            </span>
            <span>
              <FaXTwitter /> :
              <a
                href="https://x.com/SurajYa71961540"
                target="_blank"
                rel="noopener noreferrer"
              >
                SurajYa71961540
              </a>
            </span>
          </address>
        </div>
      </div>
      <div className="copy" style={{textAlign:"center",marginTop:"2rem",borderTop:"2px solid #ddd",paddingTop:"1rem"}}>
        All Copyright Reserved &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
