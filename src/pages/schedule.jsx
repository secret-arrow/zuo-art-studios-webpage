import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';




const Schedule = (props) => {
  const content = props.data.wordpressPost.content;

  return (
        <Layout>
          <Helmet title={'Zuo Art Studio'} />
          <Header title="Class Schedule"></Header>
          <Container center={props}>
            <div style={{textAlign: 'left', fontSize: "3em"}} dangerouslySetInnerHTML={{__html: content}}></div>
          </Container>
        </Layout>
      );
};

export default Schedule;

Schedule.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    wordpressPost(title: {eq: "Class Schedule"}) {
      id
      content
  }
}
`;
