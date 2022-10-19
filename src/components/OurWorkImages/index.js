import AppImage from "../AppImage";

import "../OurWorkImages/style.css";

const OurWorkImages = () => {
  return (
    <div className="ourwork-image">
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/Image1.png`}
        className="ourwork-img"
      />
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/Image2.png`}
        className="ourwork-img"
      />
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/Image3.png`}
        className="ourwork-img"
      />
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/Image4.png`}
        className="ourwork-img"
      />
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/Image5.png`}
        className="ourwork-img"
      />
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/Image6.png`}
        className="ourwork-img"
      />
    </div>
  );
};

export default OurWorkImages;
