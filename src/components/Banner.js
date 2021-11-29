
import { isMobile } from 'react-device-detect';
import pfp from '../assets/profile.jpg';
import TikTokIcon from '../assets/tiktok-logo.png';
import InstagramIcon from '../assets/instagram-logo.png';

import { Row, Col } from 'react-bootstrap';

export default function Banner() {
  return (
    <Row style={{ justifyContent: "space-evenly", alignItems: "center" }}>
      <p className="text-center">collab: pr@mara.fyi</p>
      <p style={{ background: "red", padding: "10px"}}><a className="text-white" href="./MARA_HART_MEDIAKIT_PUBLIC.pdf" 
      download="MARA_HART_MEDIAKIT">
        download media kit</a></p>
    </Row>
  )
}