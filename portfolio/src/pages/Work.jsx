import React from 'react'
import Nav from "../components/public/Nav";

const Work = () => {
  return (
    <div>
        <div>
            <Nav/>
        </div>
      <div className="text-left bg-purple-300">
            <h1 className="text-4xl text-purple-1100 font-bold">Mes technos préférées</h1>
            <div className='flex items-center'>
                <div className=''>
                    
                    <img src="/react.svg" alt="react" className="h-8 w-8" />
                    <p className="text-purple-1100 text-lg mt-4"><br/>Python</p>
                </div>
                <div className='flex'>
                    <img src="/react.svg" alt="react" className="h-8 w-8" />
                    <p className="text-purple-1100 text-lg mt-4"><br/>PHP</p>
                </div>
                <div className='flex'>
                    <img src="/react.svg" alt="react" className="h-8 w-8" />
                    <p className="text-purple-1100 text-lg mt-4"><br/>Java</p>
                </div>
                <div className='flex'>
                    
                    <img src="/react.svg" alt="react" className="h-8 w-8" />
                    <p className="text-purple-1100 text-lg mt-4"><br/>Javascript (surtout React)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
