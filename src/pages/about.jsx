import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = (props) => {
  const content = props.data.wordpressPost.content;

  return (
      <Layout>
        <Helmet title={'Zuo Art Studio'} />
        <Header title="About Me"></Header>
        <Container center={props}>

            <div style={{textAlign: 'left', fontSize: "3em"}}dangerouslySetInnerHTML={{__html: content}}></div>

        </Container>
      </Layout>
    );
};

export default About;

About.propTypes = {
  center: PropTypes.object,
};



export const query = graphql`
  query {
    wordpressPost(title: {eq: "About Me"}) {
      id
      content
  }
}
`;
