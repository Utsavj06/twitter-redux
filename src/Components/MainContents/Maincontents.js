import React from 'react'
import Headingtext from './Heading/Headingtext'
import TextBox from './TextBox'
import Posts from './Posts'

const Maincontents = () => {
  return (
    <div>
      <Headingtext text="Home" />
      <TextBox />
      <Posts />
    </div>
  )
}

export default Maincontents