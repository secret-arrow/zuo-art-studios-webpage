import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import Img from 'gatsby-image';




const Student = (props) => {

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
        <Header title="Student Artwork"></Header>
        <Container center={props}>

        { images }}


        </Container>
      </Layout>
);

};

export default Student;

Student.propTypes = {
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
