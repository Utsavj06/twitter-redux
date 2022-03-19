import React , { useState } from 'react'
import styled from 'styled-components'
import Icon from './Icons'
import { GoFileMedia } from 'react-icons/go'
import { AiOutlineGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { GrEmoji } from 'react-icons/gr'
import { MdSchedule } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { show } from "../../actions/index"

const TextBox = () => {

        const dispatch = useDispatch();
        const [getDatas , setDatas] = useState("")

        const getData = (events) => {
                setDatas(events.target.value);
        }

  return (
    <>
       <Content>
           <Input type="text" placeholder="What's happening ?" onChange={getData} value={getDatas} />
           <Icons>
               <Icon src={<GoFileMedia />}/>
               <Icon src={<AiOutlineGif />} />
               <Icon src={<BiPoll />} />
               <Icon src={<GrEmoji />} />
               <Icon src={<MdSchedule />} />
               <Buttondiv> 
                   <MyButton onClick={()=>dispatch(show(getDatas), setDatas(''))}>Tweet</MyButton>
               </Buttondiv>   
           </Icons>    
       </Content>
    </>
  )
}

export default TextBox

const Content = styled.div`
        margin-top: 25px; 
        display:flex;
        align-items:center;
        flex-direction:column;
        padding-bottom:20px;
        border-bottom:1px solid white;
`

const Input = styled.textarea`
        width:400px;
        height:80px;
        background-color:black;
        border:none;
        color:white;
        font-size:20px;
`

const Icons = styled.div`
        display: grid;
        grid-template-columns: 25px 25px 25px 25px 25px 200px ;
        font-size:25px;
        margin-top:25px;        
        justify-content:center;
        align-items:center;
        gap:20px;
`

const MyButton = styled.button`
        width:120px;
        height:30px;
        background-color:DodgerBlue;
        border:none;
        border-radius:30px;
        cursor:pointer;
        &:hover{
            background-color:cornflowerblue;    
         }
`

const Buttondiv = styled.div`
        display:flex:
        width:300px;
        justify-content:flex-end;
`