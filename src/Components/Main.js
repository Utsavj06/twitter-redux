import React from 'react'
import styled from 'styled-components'
import Maincontents from './MainContents/Maincontents'

const Main = () => {
  return (
    <Container><Maincontents /></Container>
  )
}

export default Main;

const Container = styled.div`
        width:53.3%;
        color:white;
`