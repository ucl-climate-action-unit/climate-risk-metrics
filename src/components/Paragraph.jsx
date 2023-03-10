import React from 'react'
import ReactMarkdown from 'react-markdown'

export function Paragraph({ value }) {
  console.log(value)
  return <ReactMarkdown className="mb-4 rich-text">{value}</ReactMarkdown>
}
