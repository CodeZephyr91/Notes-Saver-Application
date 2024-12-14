import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { addToPastes, updateToPastes } from '../features'
const Home = () => {
  const[title,setTitle]=useState('')
  const[value,setValue]=useState('')
  const[searchParams,setSearchParams]=useSearchParams()
  const pasteId=searchParams.get("pasteId")
  const dispatch= useDispatch()
  const allPastes = useSelector((state)=> state.paste.pastes)
  function handleChange(e){
    setTitle(title => e.target.value)
  }
  function handletext(e){
    setValue(value=>e.target.value)
  }
  useEffect(() => {
    if(pasteId){
      const paste= allPastes.find((p)=> p._id === pasteId)
      console.log("Page found")
      setTitle(paste.title)
      setValue(paste.content)
    }
  }, [pasteId]);
  function createPaste(){
    const paste={
      title:title,
      content:value,
      _id: pasteId|| Date.now().toString(36),
      createdAt: new Date().toISOString,
    }
    if(pasteId){
      dispatch(updateToPastes(paste))
    } 
    else{
      dispatch(addToPastes(paste))
    }
    setTitle('')
    setValue('')
    setSearchParams({})
   }
  return (
   <div>
     <div className='container1'>
      <input 
      id='inputbox'
      className='my-element'
      type="text"
      placeholder='Enter title here'
      value={title} 
      onChange={handleChange}/>
      <br />
      <button className='my-element' id='btn'
      onClick={createPaste}>
      {  pasteId?"Update Paste":"Create my Paste"}
      </button>
    </div>
    <div className='textareacontainer'>
      <textarea id='textarea'
      value={value}
      placeholder='Start writing....'
      onChange={handletext}>
      rows={20}
      </textarea>
    </div>
   </div>
  )
}

export default Home
