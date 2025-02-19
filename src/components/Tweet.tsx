import './tweet.css'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/haaveeni.png" alt="Veridiana Lucena" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Veridiana Lucena</strong>
          <span>@haaveeni</span>
        </div>
        {props.content}

        <div className="tweet-content-footer">
          <button>
            <ChatCircle style={{ color: '#fff' }} />
          </button>

          <button>
            <ArrowsClockwise style={{ color: '#fff' }} />
          </button>

          <button>
            <Heart style={{ color: '#fff' }} />
          </button>


        </div>
      </div>
    </Link>
  )
}
