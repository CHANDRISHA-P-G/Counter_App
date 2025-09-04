import React, { useState } from 'react'

function Toggle() {
  const [isDark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#222',
        height: '100vh',
        textAlign: 'center',
        paddingTop: '50px'
      }}
    >
      <button onClick={() => setDark(!isDark)}>Toggle Theme</button>
      <h2>Hello</h2>
    </div>
  )
}

export default Toggle;
