import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [state, setState] = useState(null)

  useEffect(() => {
    setState(new Date().getFullYear())
  }, [])

  return (
    <footer>
      Copyright © {state}
    </footer>
  )
}

export default Footer
