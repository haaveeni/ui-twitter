import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import logo from '../assets/x-logo.svg'
import './sidebar.css'

export function Sidebar() {
  return (
    <div className="sidebar">
      <img className='logo' src={logo} alt="logo" />

      <nav className="main-navigation">
        <a href=""><House />
          Home</a>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button className="new-tweet">Post</button>
    </div>
  )

}