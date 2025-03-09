import React, { ReactElement } from 'react';
import styles from './footer.module.scss';
import TikTokIcon from './Tiktok';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      
      <ul className={styles['footeradress-items']}>
        <li>
          <a href="https://www.instagram.com/msastgallen/">
            <InstagramIcon/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/msasg/">
            <LinkedInIcon/>
          </a>
        </li>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsRRYqyg6tCcSxxlmIp0XPbgO9Hi9kqf710BIo6Treq-mONA/viewform" className={styles.joinUs}>
        membership form
      </a>
        <li>
          <a href="https://www.tiktok.com/@msastgallen?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1">
            <TikTokIcon/>
          </a>
        </li>
        <li>
          <a href="https://chat.whatsapp.com/K6B7fEb3Xb73LA6UgKF3de" style={{ maxWidth: '3rem' }}>
            <WhatsAppIcon/>
          </a>
        </li>
      </ul>
    </footer>
  );
}
