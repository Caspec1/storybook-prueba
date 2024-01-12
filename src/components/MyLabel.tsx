import './MyLabel.css'

interface Props {
  /**
   * Text to display
   */
  label: string
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Caps text
   */
  allCaps?: boolean
  /**
   * Color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

  /**
   * Custom font color
   */
  fontColor?: string
}

export const MyLabel = ({label, size = 'normal', allCaps, color = 'text-primary', fontColor}: Props) => {
  return (
    <span className={`${size} ${color}`} style={{color: fontColor}}>{allCaps ? label.toUpperCase() : label}</span>
  )
}
