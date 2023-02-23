import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <header className='p-4 flex justify-between'>
      <a href="" className="flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
</svg>
    <span className='font-bold text-xl'>Booking-app</span>
      </a>
      <div className='flex border boreder-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-300'>
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Anyweek</div>
        <div className="border-l border-gray-300"></div>
        <div>Anyguests</div>
        <button className='bg-primary text-white p-1 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </button>
      </div>
      <div className='flex items-center border boreder-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-300'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
    <div className='bg-gray-500 text-white rounded-full border border-gray-500'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 relative top-1 overflow-hidden">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg>


    </div>
      </div>
    </header>
   </div>
  )
}

export default App
