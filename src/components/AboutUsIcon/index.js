import '../AboutUsIcon/style.css';

import IconButton from '../IconButton';
import Typography from '../Typography';

const AboutUsIcon = () => {
  return (
    <div className='aboutUs-icon'>
        <div className='aboutUs-all-icons'>
            <IconButton
            src={`${process.env.PUBLIC_URL}/assets/icons/Icon1.svg`}
            />

            <Typography type='H3' className="aboutUs-icons-title">World leader in consulting and finance</Typography>
        </div>

        <div className='aboutUs-all-icons'>
            <IconButton
            src={`${process.env.PUBLIC_URL}/assets/icons/Icon2.svg`}
            />

            <Typography type='H3' className="aboutUs-icons-title">A focused team with a specialized skill</Typography>
        </div>

        <div className='aboutUs-all-icons'>
            <IconButton
            src={`${process.env.PUBLIC_URL}/assets/icons/Icon3.svg`}
            />

            <Typography type='H3' className="aboutUs-icons-title">Trusted and professional advisors for you</Typography>
        </div>

        <div className='aboutUs-all-icons'>
            <IconButton
            src={`${process.env.PUBLIC_URL}/assets/icons/Icon4.svg`}
            />

            <Typography type='H3' className="aboutUs-icons-title">Experience to give you a better results</Typography>
        </div>

      
    </div>
  );
};

export default AboutUsIcon;