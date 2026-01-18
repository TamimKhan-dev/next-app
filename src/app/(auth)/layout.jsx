import React from 'react'

export default function layout({ children }) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow">
        {children}
      </div>
    </main>
  )
}
