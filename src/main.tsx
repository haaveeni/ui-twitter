import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './global.css'

import logo from './assets/x-logo.svg'
import home from './assets/home-logo.svg'
import explore from './assets/explore-logo.svg'
import notifications from './assets/notifications-logo.svg'
import messages from './assets/messages-logo.svg'
import bookmarks from './assets/bookmarks-logo.svg'
import lists from './assets/lists-logo.svg'
import profile from './assets/profile-logo.svg'
import more from './assets/more-logo.svg'
import sparkle from './assets/sparkle-logo.svg'
import { Tweet } from './components/Tweet'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div className="layout">
      <div className="sidebar">
        <img className='logo' src={logo} alt="logo" />

        <nav className="main-navigation">
          <a href=""><img className='logo' src={home} alt="home-logo" />Home</a>
          <a href=""><img className='logo' src={explore} alt="explore-logo" />Explore</a>
          <a href=""><img className='logo' src={notifications} alt="notifications-logo" />Notifications</a>
          <a href=""><img className='logo' src={messages} alt="messages-logo" />Messages</a>
          <a href=""><img className='logo' src={bookmarks} alt="bookmarks-logo" />Bookmarks</a>
          <a href=""><img className='logo' src={lists} alt="lists-logo" />Lists</a>
          <a href=""><img className='logo' src={profile} alt="profile-logo" />Profile</a>
          <a href=""><img className='logo' src={more} alt="more-logo" />More</a>
        </nav>

        <button className="new-tweet">Post</button>
      </div>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <a href=""><img src={sparkle} alt="" /></a>
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
