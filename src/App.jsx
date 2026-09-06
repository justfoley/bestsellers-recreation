import { useState } from 'react'
import Header from './components/Header'
import BookShelf from './components/BookShelf'
import BookDetail from './components/BookDetail'
import './App.css'

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="app">
      <Header />
      <div className={`shelf-layer ${selected ? 'shelf-layer--hidden' : ''}`}>
        <BookShelf onSelect={setSelected} />
      </div>
      <div className={`detail-layer ${selected ? 'detail-layer--visible' : ''}`}>
        <BookDetail book={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  )
}
