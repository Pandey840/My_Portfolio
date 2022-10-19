import '../Poster/style.css';
import AppImage from '../AppImage';
import Typography from '../Typography';
import AppButton from '../AppButton';
import SocialIcon from '../SocialIcon';


const Poster = () => {
   return (
      <section className='poster-section bg-orange-v'>
         <div className='poster-image'>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/poster_image.png`} alt='Poster_image'
            className="poster-image-tag"/>
         </div>

         <div className="poster-text">
            <Typography type="H1" className="poster-title">
               We Are The Best <span className="text-orange">
                  Digital Agency
                  </span>
                  &nbsp;for business
            </Typography>

            <Typography type='H4' className='text-gray poster-subtitle'>
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
               sint. Velit officia consequat duis enim velit mollit...
            </Typography>

            <AppButton>Contact Us</AppButton>

         </div>

         <SocialIcon className='poster-social-icons' />

      </section>

   );
};

export default Poster;