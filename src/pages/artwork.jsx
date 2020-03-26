import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import Img from 'gatsby-image';







const About = (props) => {

  const arr = [];

  for (let i = 0; i < props.data.allFile.edges.length; i++) {
    arr.push(i);
  }

  let images = arr.map(num => {
           return <Img fixed={props.data.allFile.edges[num].node.childImageSharp.fixed} />
        });


  return (
      <Layout>
        <Helmet title={'Zuo Art Studio'} />
        <Header title="Artwork"></Header>
        <Container center={props}>


        { images }





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
    allFile(filter: {sourceInstanceName: {eq: "zuo_art"}}) {
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
