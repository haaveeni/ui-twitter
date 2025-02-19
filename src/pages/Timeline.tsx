import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'

import { Tweet } from '../components/Tweet'

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <Form />

      <Separator />

      <Tweet content='tweet 1' />
      <Tweet content='tweet 2' />
      <Tweet content='tweet 3' />
      <Tweet content='tweet 4' />
    </main>
  )
}