
import { isMobile } from 'react-device-detect';
import pfp from '../assets/profile.jpg';
import TikTokIcon from '../assets/tiktok-logo.png';

import { Row, Col } from 'react-bootstrap';
import InstagramIcon from '../assets/instagram-logo.png';

export default function Header({ information }) {
  const colors = information.colors
  return (
    <div style={{
      paddingTop: 20,
      paddingBottom: 15
    }}>
    <Row style={{
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <img
        className="circle"
        src={pfp}
        width="125px" height="125px"
        alt={`Headshot of ${information.name}`} />
    </Row>
    <h1 className="text-center" style={{color: colors.primary}}>{information.name}</h1>
    </div>
  )
}