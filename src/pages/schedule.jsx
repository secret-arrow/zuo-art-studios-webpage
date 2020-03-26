import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Zuo Art Studio'} />
    <Header title="Class Schedule"></Header>
    <Container center={center}>
      
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
