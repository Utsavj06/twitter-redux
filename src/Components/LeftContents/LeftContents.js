import React from 'react'
import styled from 'styled-components'

const LeftContents = (props) => {
  return (
    <div>
        <List>
            <li>
                <Link href="www.google.com">
                    {props.Icons}
                    {props.text}
                </Link>
            </li>
        </List>
    </div>
  )
}

export default LeftContents

const Link = styled.a`
        font-size:25px;
        text-decoration:none;
        color:white;
        display:flex;
        gap:15px;
`
const List = styled.ul`
        list-style-type:none;
`