import './form.css';

export function Form() {
  return (
    <form className='new-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/haaveeni.png" alt="Veridiana Lucena" />
        <textarea id="tweet" placeholder="What's happening?" />
      </label>

      <button type='submit'>Tweet</button>
    </form>
  )
}