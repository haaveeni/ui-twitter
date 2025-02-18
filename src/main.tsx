import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './global.css'

import { Tweet } from './components/Tweet'

import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'

import logo from './assets/x-logo.svg'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div className="layout">
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
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <a href="">
              <Sparkle />
            </a>
          </div>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/haaveeni.png" alt="Veridiana Lucena" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type='submit'>Tweet</button>
          </form>
          <div className="separator" />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>

  </StrictMode>,
)
