import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Posts = () => {

    const list = useSelector((state)=> state.display.lists)

  return (
    <>
      {
        list.map((elem) => {
          return (
          <AllData key={elem.id}> 
             <h3>{elem.data}</h3>
            <Buttons>  
             <Button>Like</Button>
             <Button>Comment</Button>
            </Buttons> 
          </AllData>
          )
        } )
      }
      
    </>
  )
}

export default Posts

const AllData = styled.div`
    margin-top:80px;
    padding-left:45px;
    font-size:30px;
    height : 120px;
    border-bottom:1px solid white;
    border-left:1.5px solid white;
`

const Button = styled.button`
   width:80px;
`

const Buttons = styled.div`
   display:flex;
   gap:10px;
`