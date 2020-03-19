import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';




const About = (center) => {

{/*

  const {
      allWordpressWpMedia: { edges },
    } = graphql`
      {
         allWordpressWpMedia {
            edges {
              node {
                id
                alt_text
                date
                slug
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
        }

      }

  `;
*/}



  return (
      <Layout>
        <Helmet title={'About Page'} />
        <Header title="About Page">Gatsby Tutorial Starter</Header>
        <Container center={center}>

            {/*{edges.map(({node}) =>
            <Img
            fluid={image.node.localFile.childImageSharp.fluid}
            alt={alt}
            style={{
              width: width ? width + 'px' : '100%',
              maxWidth: '100%'
            }}/>
          )}
          */}


        </Container>
      </Layout>
);

};

export default About;

About.propTypes = {
  center: PropTypes.object,
};



{/*
const allMedia = graphql`
  query {
    allWordpressWpMedia {
      edges {
        node {
          source_url
          localFile {
            publicURL
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

*/}
