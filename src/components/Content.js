import React,{ Component } from 'react';
import styled from 'styled-components';
import PrimaryPost from './PrimaryPost';
import Post from './Post';

class Content extends Component{

  render(){
    return(

      <Cont>
        <PrimaryPost></PrimaryPost>
        <Posts>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        </Posts>
      </Cont>

    );
  }
}
export default Content;

const Cont = styled.div`
  overflow:auto;
  margin-top: 70px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  background-color: #fff;
  width: 80%;
  height: 900px;
`;

const Posts = styled.div`
display: -webkit-flex;
display: flex;
justify-content: space-between;
margin: 20px 15px 0 15px;
`;
