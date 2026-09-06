import PillButton from './PillButton'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <span className="site-header__logo">Bestsellers</span>
        <div className="site-header__actions">
          <button className="site-header__menu" aria-label="Menu">
            =
          </button>
          <PillButton tone="cream">Get Tickets</PillButton>
        </div>
      </div>
    </header>
  )
}
