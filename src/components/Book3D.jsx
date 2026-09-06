import { forwardRef, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Book3D.css'

const LEAF_COUNT = 5

const Book3D = forwardRef(function Book3D({ book, onClick, interactive = true, open = false }, ref) {
  const leafRefs = useRef([])
  const bookElRef = useRef(null)

  const setBookRef = (el) => {
    bookElRef.current = el
    if (typeof ref === 'function') ref(el)
    else if (ref) ref.current = el
  }

  useEffect(() => {
    if (!open || !bookElRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.fromTo(
        bookElRef.current,
        { rotateY: -70, scale: 0.85, transformPerspective: 1400 },
        { rotateY: 0, scale: 1, duration: 0.9 },
        0
      )
      leafRefs.current.forEach((leaf, i) => {
        if (!leaf) return
        tl.fromTo(
          leaf,
          { rotateY: 0 },
          { rotateY: -18 - i * 6, duration: 0.7 },
          0.15 + i * 0.05
        )
      })
    }, bookElRef)
    return () => ctx.revert()
  }, [open])

  return (
    <div
      className={`book3d ${interactive ? 'book3d--interactive' : ''} ${open ? 'book3d--open' : ''}`}
      ref={setBookRef}
      onClick={onClick}
      style={{ '--cover': book.cover, '--spine': book.spine, '--accent': book.accent }}
    >
      <div className="book3d__pages" aria-hidden="true">
        {Array.from({ length: LEAF_COUNT }).map((_, i) => (
          <div
            className="book3d__leaf"
            key={i}
            style={{ '--i': i }}
            ref={(el) => (leafRefs.current[i] = el)}
          />
        ))}
      </div>
      <div className="book3d__spine" />
      <div className="book3d__cover">
        <span className="book3d__cover-title">{book.title}</span>
        <span className="book3d__cover-author">{book.author}</span>
      </div>
      {interactive && <span className="book3d__open-tag">Open</span>}
    </div>
  )
})

export default Book3D
