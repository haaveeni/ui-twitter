import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'

import logo from '../assets/x-logo.svg'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  return (
    <div className="sidebar">
      <img className='logo' src={logo} alt="logo" />

      <nav className="main-navigation">
        <NavLink to="/"><House />
          <span>Home</span></NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet">
        <Pencil />
        <span>Post</span>
      </button>
    </div>
  )

}