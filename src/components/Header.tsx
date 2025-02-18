import { Sparkle } from 'phosphor-react'

import './header.css'

interface Headerprops {
  title: string
}

export function Header(props: Headerprops) {
  return (
    <div className="timeline-header">
      {props.title}
      <a href="">
        <Sparkle />
      </a>
    </div>
  )
}