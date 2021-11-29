
import { isMobile } from 'react-device-detect';
import pfp from '../assets/profile.jpg';
import TikTokIcon from '../assets/tiktok-logo.png';

import { Row, Col } from 'react-bootstrap';
import InstagramIcon from '../assets/instagram-logo.png';

export default function Header() {
  return (
    <>
    <Row style={{
      justifyContent: "space-evenly",
      alignItems: "center",
      margin: "20px 0 7px 0"
    }}>
      <img
        className="circle"
        src={pfp}
        width="125px" height="125px"
        alt="Mara drinking juice at brunch" />
    </Row>
    <h1 className="text-center" style={{ fontFamily: "Source Sans Pro", textTransform: "uppercase" }}>mara</h1>
    {/* <h2 className="text-center">assalamu alaiykum</h2> */}
    </>
  )
}