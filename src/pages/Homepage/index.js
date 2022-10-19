import Header from "../../components/Header";
import Poster from "../../components/Poster";
import AboutUs from "../../components/AboutUs";
import OurExperience from "../../components/OurExperience";
import TeamMember from "../../components/TeamMember";
import OurWork from "../../components/OurWork";
import ClientsFeedback from "../../components/ClientsFeedback";
import OurBlog from "../../components/OurBlog";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import ContactUsForm from "../../components/ContactUsForm";
import Map from "../../components/Map";
import Copyright from "../../components/Copyright";

import "../Homepage/style.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Poster />
      <AboutUs />
      <OurExperience />
      <TeamMember />
      <OurWork />
      <ClientsFeedback />
      <OurBlog />
      <ContactUs />
      <ContactUsForm />
      <Map />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Homepage;
