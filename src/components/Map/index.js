import AppImage from "../AppImage";

import "../Map/style.css";

const Map = () => {
  return (
    <div className="map">
      <div className="map-image">
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/Map.png`}
          alt="Map Image"
          className="map-img"
        />
      </div>

      <div className="security-tag">
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/group1.png`}
          alt="Security Image"
          className="security-img"
        />

        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/group2.png`}
          alt="Security Image"
          className="security-img"
        />

        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/group3.png`}
          alt="Security Image"
          className="security-img"
        />

        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/group4.png`}
          alt="Security Image"
          className="security-img"
        />
      </div>
    </div>
  );
};

export default Map;
