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
    height : 80px;
    border-bottom:1px solid white;
`