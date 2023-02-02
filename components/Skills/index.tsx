import React, { useEffect, useState } from 'react'

import * as sc from './styled'

export default function Skills() {

  const skills = [
    "React", "jQuery", "Vue", "Node.js", "Express", "Next.js", "Three.js"
  ]

  return (
    <sc.MainWrapper>
      
      Feel free to take a look at my portfolio and get in touch if you'd like to discuss a project. 
      
     
      <br/>
      <br/>
      I&apos;d be more than happy to help bring your website dreams to life.
    </sc.MainWrapper>
  )
}
