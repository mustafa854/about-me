import React from "react"

import B from '../ActionButton'

import * as sc from './styled'

export default function Introduction() {

  return (
    <sc.MainWrapper>
      <sc.Title>
        <span>
          Mustafa B.
        </span>
        <span>
          FOUNDER
        </span>
        <span>
        Developer
        </span>
      </sc.Title>
      <sc.Subtitle>
        <B href="https://wa.me/919904652091">CONTACT ME</B>
      </sc.Subtitle>
    </sc.MainWrapper>
  )
}
