import ContactUsData from "../ContactUsData";
import Typography from "../Typography";

import "../ContactUs/style.css";

const ContactData = [
  {
    src: `${process.env.PUBLIC_URL}/assets/images/mail.png`,

    title: "Drop a line",

    contact: "Mail Us",

    email: "Support87@gmial.com",

    number: "ijkuiu874@gmial.com",
  },

  {
    src: `${process.env.PUBLIC_URL}/assets/images/call.png`,

    title: "24/7 Service",

    contact: "Call Us",

    email: "+880 265 98745",

    number: "+895 855 85589",
  },

  {
    src: `${process.env.PUBLIC_URL}/assets/images/location.png`,

    title: "Location",

    contact: "Visit Us",

    email: "158 ralegih sit,",

    number: "houston, yk 5896,uk",
  },
];

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-text">
        <Typography type="H4" className="contact-us-title">
          Contact Us
        </Typography>

        <Typography type="H2" className="contact-us-content">
          Feel <span className="text-orange">Free to Contact</span> With Us
        </Typography>
      </div>

      <div className="contact-box">
        {ContactData.map((data, i) => (
          <ContactUsData
            src={data.src}
            title={data.title}
            contact={data.contact}
            email={data.email}
            number={data.number}
            key={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
