import Typography from "../Typography";
import AppImage from "../AppImage";
import SocialIcon from "../SocialIcon";

import "../Footer/style.css";

const Footer = () => {
  return (
    <div className="footer bg-black text-white">
      <div className="digiency">
        <Typography className="digiency-title">
          <span className="text-orange">Digie</span>ncy
        </Typography>

        <Typography className="digiency-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, cursus
          egestas etiam posuere vitae cursus consectetur eu. Cursus vitae
          porttitor libero est posuere.
        </Typography>

        <SocialIcon className="footer-social-icons" />
      </div>

      <div className="company">
        <Typography className="company-title">Company</Typography>
        <Typography className="company-text">About Us</Typography>
        <Typography className="company-text">Our Work</Typography>
        <Typography className="company-text">Client</Typography>
        <Typography className="company-text">Our Blog</Typography>
        <Typography className="company-text">Contact US</Typography>
      </div>

      <div className="sevices">
        <Typography className="sevices-title">Sevices</Typography>
        <Typography className="sevices-text">Graphic Design</Typography>
        <Typography className="sevices-text">UI/UX Design</Typography>
        <Typography className="sevices-text">Web Development</Typography>
        <Typography className="sevices-text">App Development</Typography>
        <Typography className="sevices-text">Web Hosting</Typography>
      </div>

      <div className="newsletter">
        <Typography className="newsletter-title">Newsletter</Typography>

        <Typography className="newsletter-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu feugiat
          in mollis augue vel aliquam. Ut faucibus elit, libero varius.
        </Typography>

        <div className="inputBox">
          <input
            className="input-text"
            type="text"
            placeholder="info@gmail.com"
          />

          <div className="bg-orange">
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/icons/send-plane-fill.svg`}
              alt="inputBox image"
              className="inputBox-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
