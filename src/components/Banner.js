
import { SocialIcon } from 'react-social-icons';
import { Row } from 'react-bootstrap';

export default function Banner({ information }) {
  const socials = information.socialmedia
  const colors = information.colors

  return (
    <Row style={{ justifyContent: "space-evenly", alignItems: "center", margin: "15, 10" }}>
      {Object.values(socials).map((item) => {
        return (<SocialIcon url={item} 
          bgColor={colors.primary} 
          fgColor={colors.accent}
          style={{
            width: 36,
            height: 36,
          }}/>)
      })}
    </Row>
  )
}