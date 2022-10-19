import Typography from "../Typography";
import AppImage from "../AppImage";
import AppButton from "../AppButton";

import "../ContactUsForm/style.css";

const ContactUsForm = () => {
  return (
    <div className="contactUsForm">
      <div className="contactUsForm-image">
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/contactUsImage.png`}
          alt="Contact us image"
          className="contactUsForm-img"
        />
      </div>

      <div className="contact-us-apply-form">
        <Typography className="contact-us-text">
          Send Your <span className="text-orange">Message To Us</span>
        </Typography>

        <form>
          <div className="form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-text"
            />
          </div>

          <div className="form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-text"
            />
          </div>

          <div className="form">
            <input
              type="number"
              name="number"
              placeholder="Mobile No"
              className="input-text"
            />
          </div>

          <div className="form">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-text"
            />
          </div>

          <div className="form">
            <textarea
              name="message"
              rows="5"
              placeholder="Send Massage"
              className="input-text"
            />
          </div>

          <AppButton className="contact-button">Send Message</AppButton>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
