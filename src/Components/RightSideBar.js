import React from 'react'
import styled from 'styled-components'

const RightSideBar = () => {
  return (
    <Container>RightSideBar</Container>
  )
}

export default RightSideBar

const Container = styled.div`
        width:25%;
        display:flex;
        justify-content:center;
        color:white;
        border-left:0.5px solid white;
        position:fixed;
        height:43rem;
        margin-left:1013px;
`