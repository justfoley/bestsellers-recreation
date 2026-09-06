import './LeafParticles.css'

const POSITIONS = [
  { top: '15%', left: '6%', size: 14, delay: 0 },
  { top: '70%', left: '10%', size: 10, delay: 1.2 },
  { top: '30%', left: '92%', size: 16, delay: 0.6 },
  { top: '80%', left: '88%', size: 11, delay: 1.8 },
  { top: '48%', left: '48%', size: 9, delay: 0.9 },
  { top: '10%', left: '60%', size: 12, delay: 2.2 },
]

export default function LeafParticles() {
  return (
    <div className="leaf-field" aria-hidden="true">
      {POSITIONS.map((p, i) => (
        <span
          key={i}
          className="leaf-field__leaf"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size * 1.3,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
