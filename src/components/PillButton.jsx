import './PillButton.css'

export default function PillButton({ children, tone = 'pink', icon, className = '', ...rest }) {
  return (
    <button className={`pill-btn pill-btn--${tone} ${className}`} {...rest}>
      {icon && <span className="pill-btn__icon">{icon}</span>}
      {children}
    </button>
  )
}
