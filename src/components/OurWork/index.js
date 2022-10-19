import Typography from "../Typography";
import OurWorkImages from "../OurWorkImages";

import "../OurWork/style.css";

const OurWork = () => {
  return (
    <section className="ourWork">
      <Typography className="ourWork-text">Our Work</Typography>
      <Typography className="ourWork-title">
        We Have Some <span className="text-orange">Designed & Development</span>
        &nbsp; Projects
      </Typography>

      <nav className="navbar">
        <ul className="nav-ul">
          <li className="text-orange">All</li>
          <li>Graphic Design</li>
          <li>UI/UX Design</li>
          <li>Web Development</li>
        </ul>
      </nav>

      <OurWorkImages className="ourWork-images"></OurWorkImages>
    </section>
  );
};

export default OurWork;
