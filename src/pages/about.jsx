import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = (props) => {

  const username = props.data.allWordpressWpMe.edges[0].node.name;
  const description = props.data.allWordpressWpMe.edges[0].node.description;
  return (
      <Layout>
        <Helmet title={'Zuo Art Studio'} />
        <Header title="About Me"></Header>
        <Container center={props}>

            <h1>{ username }</h1>
            <h2>{ description }</h2>

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
    allWordpressWpMe {
      edges {
        node {
          name
          description
        }
      }
    }
}
`;
