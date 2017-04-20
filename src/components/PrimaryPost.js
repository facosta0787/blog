import React,{ Component } from 'react';
import styled from 'styled-components';
import posts from '../mocks/postMock';
class PrimaryPost extends Component{

  render(){
    return(
      <PPost>
        <CardTitulo>
          <div className="title-post">{posts.items[4].title}</div>
          <div className="foot-post">{posts.items[4].date}</div>
        </CardTitulo>
      </PPost>
    );
  }
}
export default PrimaryPost;

const PPost = styled.div`
  /*background-color: #fff;*/
  /*border: 1px solid grey;*/
  background-image: url("${posts.items[4].image}");
  background-size:100%;
  width: 100%;
  height: 300px;
`;

const CardTitulo = styled.div`
  position:relative;
  top: 200px;
  left: 20px;
  background-color: rgba(224,224,224,0.4);
  width: 300px;
  height: 80px;
  .title-post{
    color: #424242;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0 20px 0;
    border-bottom: 1px solid #9E9E9E;
  }
  .foot-post{
    width: 90%;
    margin: 0 auto;
    font-size: 0.8em;
    text-align: right;
    color: #424242;
  }
`;
