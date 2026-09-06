import { useRef } from 'react'
import Book3D from './Book3D'
import { BOOKS } from '../data/books'
import './BookShelf.css'

export default function BookShelf({ onSelect, shelfRef }) {
  const cardRefs = useRef([])

  return (
    <section className="shelf" ref={shelfRef}>
      <h1 className="shelf__heading">Books</h1>
      <div className="shelf__row">
        {BOOKS.map((book, i) => (
          <div className="shelf__slot" key={book.id} style={{ '--i': i }}>
            <Book3D
              ref={(el) => (cardRefs.current[i] = el)}
              book={book}
              onClick={() => onSelect(book, cardRefs.current[i])}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
