'use client'
import reducer, { StarWarsContext } from '@/state/store'
import './globals.css'
import { Inter } from 'next/font/google'
import { useContext, useReducer } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ctx = useContext(StarWarsContext);
  const [state, dispatch] = useReducer(reducer, ctx.state);

  return (
    <StarWarsContext.Provider value={{ state, dispatch }}>
      <html lang="en">
        <body className={inter.className}>
          <div className='max-w-2xl mx-auto p-10'>
          <header className="bg-gray-800 text-white mb-2">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <div>
              <h1 className="text-2xl font-semibold">Henry Schein Wan Kandobi Search Wars</h1>
              <h2 className="text-xl italic"> The Dental Force Awakens</h2>
              </div>
            </div>
          </header>
          <div>
            {children}
          </div>
          </div>
        </body>
      </html>
    </StarWarsContext.Provider>
  )
}
