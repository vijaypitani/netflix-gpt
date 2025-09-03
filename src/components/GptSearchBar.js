import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[20%] flex justify-center'>
        <from className="w-1/2 bg-black grid grid-cols-12">
            <input 
             type="text"
             className='p-4 m-4 col-span-9'
             placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </from>
    </div>
  )
}

export default GptSearchBar