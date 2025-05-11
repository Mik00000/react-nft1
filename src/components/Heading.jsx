import React from 'react'

const Heading = ({children, className, bubbleColor}) => {
  return (
    <h1 className={`heading-with-bubble ${className}`} style={{
        "--bubble-color": bubbleColor
    }}>{children}</h1>
  )
}

export default Heading