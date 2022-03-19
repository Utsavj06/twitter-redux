import React from 'react'
import styled from 'styled-components'

const Icons = (props) => {
  return (
    <Mydiv>{props.src}</Mydiv>
  )
}

export default Icons

const Mydiv =styled.div`
    padding-top:6px;
    cursor:pointer;
`