import { forwardRef } from 'react'
import Book3D from './Book3D'
import PillButton from './PillButton'
import LeafParticles from './LeafParticles'
import './BookDetail.css'

const BookDetail = forwardRef(function BookDetail({ book, onClose }, ref) {
  if (!book) return null

  return (
    <div className="book-detail" ref={ref}>
      <button className="book-detail__close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="book-detail__stage">
        <LeafParticles />
        <Book3D book={book} interactive={false} open />
      </div>
      <div className="book-detail__info">
        <h2 className="book-detail__title">{book.title}</h2>
        <p className="book-detail__blurb">{book.blurb}</p>
        <div className="book-detail__meta">
          <span className="book-detail__stars" aria-label={`${book.rating} out of 5 stars`}>
            {'★'.repeat(book.rating)}
            {'★'.repeat(5 - book.rating).replace(/★/g, '☆')}
          </span>
          <span className="book-detail__year">{book.year}</span>
        </div>
        <div className="book-detail__actions">
          <PillButton tone="outline">By {book.author}</PillButton>
          <PillButton tone="pink">Buy Now</PillButton>
          <PillButton tone="cream">Buy Audiobook</PillButton>
        </div>
      </div>
    </div>
  )
})

export default BookDetail
