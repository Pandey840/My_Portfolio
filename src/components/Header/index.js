import { useState } from 'react';

import AppImage from '../AppImage';
import AppModal from '../AppModal';
import DesktopNavbar from '../DesktopNavbar';
import MobileNavbar from '../MobileNavbar';
import '../Header/style.css';

const Header = (props) => {
   const [modalIsOpen, setIsOpen] = useState(false);

   const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

   return (
      <>

      <header className='app-header'>
         <div>
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/images/digiency.png`}
            alt='logo'
            />
         </div>

         <DesktopNavbar className='desktop-nav' />

         <div>
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/icons/light.svg`}
            alt='light'
            />
         </div>

         <div className='app-mobile-menu' onClick={onOpenModal}>
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/icons/menu.svg`}
            alt='menu'
            />
         </div>
      </header>

      <AppModal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        contentLabel='Example Modal'
      >
         <header className='app-header'>
          <div>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/images/digiency.png`}
              alt='Logo'
            />
          </div>

          <div className='app-mobile-close' onClick={onCloseModal}>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/icons/close.svg`}
              alt='Menu Close'
            />
          </div>

          </header>

          <MobileNavbar />

      </AppModal>

      </>
   );
}

export default Header;