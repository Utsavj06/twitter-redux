import React from 'react'
import styled from "styled-components"
import LeftContents from './LeftContents/LeftContents'
import { FiTwitter, FiSearch, FiBookmark } from 'react-icons/fi'
import { FaHome } from "react-icons/fa";
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiMessageDetail } from 'react-icons/bi'
import { ImProfile } from 'react-icons/im'
import { CgMoreO } from 'react-icons/cg'
import "./LeftSideBar.css"

const LeftSideBar = () => {
        
  return (
    <Container>
        <MiniContainer>
            <LeftContents Icons={<FiTwitter />} />
            <LeftContents Icons={<FaHome />} text="Home" />
            <LeftContents Icons={<FiSearch />} text="Explore" />
            <LeftContents Icons={<IoIosNotificationsOutline />} text="Notification" />
            <LeftContents Icons={<BiMessageDetail />} text="Messages" />
            <LeftContents Icons={<FiBookmark />} text="Bookmarks" />
            <LeftContents Icons={<ImProfile />} text="Profile" />
            <LeftContents Icons={<CgMoreO />} text="More" />
            <MyButton>Tweet</MyButton>
        </MiniContainer>    
    </Container>
  )
}

export default LeftSideBar

const Container = styled.div`
        width:25%;
        display:flex;
        align-items:center;
        border-right: 0.5px solid white;
        height:100vh;
        color:white;
        flex-direction:column;
        position:fixed;
`

const MiniContainer = styled.div`
        display:flex;
        flex-direction:column;
`
const MyButton = styled.button`
        width:170px;
        margin-left:40px;
        margin-top:22px;
        height:40px;
        background-color:DodgerBlue;
        border:none;
        border-radius:30px;
        cursor:pointer;
        &:hover{
           background-color:cornflowerblue;    
        }
`