import './tweet.css'
import { ChatCircle } from 'phosphor-react'

export function Tweet() {
  return (
    <div className="tweet">
      <img src="https://github.com/haaveeni.png" alt="Veridiana Lucena" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Veridiana Lucena</strong>
          <span>@haaveeni</span>
        </div>
        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:<br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s)<br />
          ✅ npm build: De 120s para 22s<br />

          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
        </p>

        <div className="content-footer">
          <button>
            <ChatCircle style={{ color: '#fff' }} />
          </button>

        </div>
      </div>
    </div>
  )
}
