import { Header } from '../components/Header'
import { Separator } from '../components/Separator'

import { Tweet } from '../components/Tweet'

import './timeline.css'

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/haaveeni.png" alt="Veridiana Lucena" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      <Tweet content='tweet 1' />
      <Tweet content='tweet 2' />
      <Tweet content='tweet 3' />
      <Tweet content='tweet 4' />
    </main>
  )
}