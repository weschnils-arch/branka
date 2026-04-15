import { Hero } from '../components/Hero'
import { Introduction } from '../components/Introduction'
import { BookSessionTeaser } from '../components/BookSessionTeaser'

export function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <BookSessionTeaser />
    </>
  )
}
