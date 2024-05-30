import React from 'react'

function Card({img, text}) {
  return (
    <div>
        <div className='max-w-[78rem] mx-auto px-4 sm:px-6'>
            <div className='bg-[#ffffff] rounded-lg border-gray-200 border-[2px] hover:shadow-2xl overflow-hidden max-w-sm mt-6'>
                <div>
                    <img src={img} height={346} width={346} alt={text} />
                </div>
            </div>
            <h2 className="text-sm font-semibold text-gray-800 mt-4 font-pop">{text}</h2>
        </div>
        
    </div>
  )
}

export default Card