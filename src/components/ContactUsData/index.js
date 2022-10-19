import Typography from "../Typography";
import AppImage from "../AppImage";

import "../ContactUsData/style.css";

const ContactUsData = (props) => {
  return (
    <div className="contactUsData">
      <div className="contact-us">
        <div className="contact-us-mail-imgage">
          <AppImage src={props.src} className="mail-img" />
        </div>

        <div className="contact-us-text">
          <Typography className="title">{props.title}</Typography>

          <Typography className="contact">{props.contact}</Typography>
        </div>
      </div>

      <div className="contact-details">
        <Typography className="email">{props.email}</Typography>

        <Typography className="number">{props.number}</Typography>
      </div>
    </div>
  );
};

export default ContactUsData;
