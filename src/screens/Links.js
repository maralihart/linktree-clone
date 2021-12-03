// react
import { useState, useEffect } from 'react';

// api
import request from 'graphql-request';

// styling
import { Col } from 'react-bootstrap';

// components
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';

export default function Links({ information }) {

  const [links, setLinks] = useState([
    {
      "id": "1",
      "link": "https://mara.fyi",
      "content": "test"
    }
  ]);

  useEffect(() => {
    const fetchLinks = async () => {
      // const { links } = await request(
      //   "https://api-us-east-1.graphcms.com/v2/cknukiy6yga6w01yzfte93hr7/master",
      //   `
      //     {
      //       links {
      //         id
      //         link
      //         content
      //       }
      //     }
      //   `
      // );
      // setLinks(links.reverse());
    };
    fetchLinks();
  }, []);

  const colors = information.colors;

  return (
    <div style={{
      backgroundColor: colors.accent,
      color: colors.primary
      }}>
      <div class="buffer">
        <Header information={information}/>
        <Banner information={information}/>
        <Col style={{ marginTop: 10 }}>
          {links.map((item) => <LinkButton item={item} information={information}/>)}
        </Col>
      </div>
      <Footer information={information}/>
    </ div>
  );
}