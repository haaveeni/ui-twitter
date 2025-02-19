import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'

const answers = [
  'Muito verdade!',
  'Adorei!',
  'Uau, parabéns!'
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content='blabla' />

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/haaveeni.png" alt="Veridiana Lucena" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}