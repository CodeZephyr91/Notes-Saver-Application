import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Paste.css'
import { removeFromPastes } from '../features'
import toast from 'react-hot-toast'
const Paste = () => {
  const pastes= useSelector((state)=> state.paste.pastes)
  console.log(pastes)
  const [searchTerm, setsearchTerm]=useState('')
  const dispatch = useDispatch()
  const filterData=pastes.filter((paste)=>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handlesearch(e){
    setsearchTerm((searchTerm)=> e.target.value)
  }
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId))
  }
  function formatDate(isoString) {
 // Create a Date object using the current date and time
    const date = new Date(isoString);
    const day = date.getDate(); // Get the day of the month (1-31)
    const month = date.toLocaleString('default', { month: 'long' }); // Get the full month name
    const year = date.getFullYear(); // Get the full year (e.g., 2024)
    
    // Function to get the appropriate suffix for the day
    const getDaySuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return 'th'; // Special case for 11th, 12th, 13th
      }
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    // Get the suffix for the current day
    const daySuffix = getDaySuffix(day);
  
    // Return the formatted date
    return `${day}${daySuffix} ${month}, ${year}`;
  }
  //?. --conditional chaining (no error thrown when value is null, it simply returns undefined)
  return (
    <div id='searchcontainer'>
      <input type="text" 
      id='searchbar'
      placeholder='Search here'
      value={searchTerm}
      onChange={handlesearch}
       />
      <div className='cardcontainer'> 
      {
        filterData.length>0&&filterData.map((paste)=>{
        return(
          <div className='innerContainer'>
            <div id='card'>
            {paste.title}
            </div>
          <div id='btncollection'>
            <button className='btn'>
              <a className='links' href={`/?pasteId=${paste?._id}`}>
              Edit
              </a>
            </button>
            <button className='btn'>
            Share
            </button>
            <button className='btn' onClick={() => handleDelete(paste?._id)}>
              Delete
            </button>
            <button className='btn'>
              <a className='links' href={`pastes/${paste?._id}`}>View</a>
            </button>
            <button className='btn' onClick={() => {
                   navigator.clipboard.writeText(paste?.content)
                   toast.success("Copied to Clipboard")
            }}>
              Copy
            </button>
          </div>
          <div id='date'>
            Created on: {formatDate(paste.createdAt)}
          </div>
          </div>
        )
      }

      )
      }
      </div>
    </div>

  )
}

export default Paste
