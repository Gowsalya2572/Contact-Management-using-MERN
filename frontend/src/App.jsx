import React from 'react'
import ContactPage from './page/ContactPage'

const App = () => {
  return (
    <div>

      <header className="bg-indigo-600 border border-gray-500">
        
        <div className="max-w-6xl mx-auto px-4 py-4 text-white flex items-center justify-center">
           <h3 className='text-3xl font-bold '>Contact Management Web</h3>
        </div>
      </header>
      <main>
        <ContactPage/>
      </main>
      <footer className='mt-5 bg-indigo-600 border-t h-24 text-white flex justify-center items-center'>
        <p>©2025 Contact Management. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App


