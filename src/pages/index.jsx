import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import logo from '../../static/logo/header-logo.png';


const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;







const Index = ( props ) => {
  







  return (
    <Layout>
      <Helmet title={'Zuo Art Studio'} />
      <Header title="Zuo Art Studio"></Header>

















      <PostWrapper>




        <PostList
          cover={logo}
          path={'/artwork'}
          title="Artwork"
        />

        <PostList
          cover={logo}
          path={'/schedule'}
          title="Class Schedule"
        />

        <PostList
          cover={logo}
          path={'/student'}
          title="Student Artwork"
        />
      </PostWrapper>











    </Layout>
  );
};

export default Index;
