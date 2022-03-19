import React from 'react'
import styled from 'styled-components'

const Headingtext = (props) => {
  return (
    <Head>{props.text}</Head>
  )
}

export default Headingtext

const Head = styled.div`
     padding: 15px 30px;
     font-size:25px;
     border-bottom: 1px solid white;
`