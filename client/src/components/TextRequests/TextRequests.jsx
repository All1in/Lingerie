import React from 'react'
import Title from '../Title'

const TextRequests = ({ text, resolveText }) => {
  return text ? (
    <p
      style={
        resolveText ? { fontSize: '14px' } : { color: 'red', fontSize: '14px' }
      }
    >
      {text}
    </p>
  ) : (
    <Title subtitle='Smth wrong happened' />
  )
}

export default TextRequests
