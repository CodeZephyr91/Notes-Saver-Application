import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { addToPastes, updateToPastes } from '../features'
const View = () => {
  const {id}= useParams()
  const allPastes= useSelector((state)=> state.paste.pastes)
  const paste =allPastes.filter((p)=> p._id === id)[0]
  return (
    <div>
    <div className='container1'>
     <input 
     id='inputbox'
     className='my-element'
     type="text"
     placeholder='Enter title here'
     disabled
     value={paste.title} />
     <br />
     {/* <button className='my-element'
     onClick={createPaste}>
     {  pasteId?"Update Paste":"Create my Paste"}
     </button> */}
   </div>
   <div>
     <textarea id='textarea'
     value={paste.content}
     placeholder='Start writing....'
     disabled
     rows={20}>
     </textarea>
   </div>
  </div>
  )
}

export default View
