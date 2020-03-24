import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import Img from 'gatsby-image';




const About = (props) => {



  return (
      <Layout>
        <Helmet title={'About Page'} />
        <Header title="About Page">Gatsby Tutorial Starter</Header>
        <Container center={props}>

        <Img fixed={props.data.allFile.edges[0].node.childImageSharp.fixed} />


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
    allFile(filter: {sourceInstanceName: {eq: "student"}}) {
    edges {
      node {
        childImageSharp {
              fixed {
              ...GatsbyImageSharpFixed
            }
        }
      }
    }
  }
  }
`
