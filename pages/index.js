import React, { Component }from 'react';
import styled from 'styled-components';
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import posts from '../src/mocks/postMock';

export default class Home extends Component{
 render(){
  console.log(posts);
  return(
   <div>
    <Header />
    <Content />
   </div>
  );
 }
}
