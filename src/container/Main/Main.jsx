import React, { useState } from 'react'
import './Main.css'
import yogaIcon from '../../assets/yoga-icon.jpg'
import yogaIcon2 from '../../assets/yoga-icon-2.webp'
import Form from '../Form/Form'
import { Button } from '@mui/material'
import {MdExpandMore , MdExpandLess} from 'react-icons/md'
const Main = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <div className='main_container'>
      <div className='main_container_info' id = "quote">
        <img src={yogaIcon} />
        <h1>Bend your Mind,Inspire Yourself</h1>
        <h3>Yoga spritual practices and disciplines which originated in Northern India 5000 years ago</h3>
        <div className='main_container_info_scroll'>
          <img src = {yogaIcon2} />
        </div>
        <div className='main_container_info_expand'>   
          {(!toggle)?
          <a href='#form'><MdExpandMore style={{fontSize:"50px"}} onClick={()=>{setTimeout(()=>{setToggle(true)},100)}}/></a>:
          <a href="#quote"><MdExpandLess style={{fontSize:"50px"}} onClick={()=>{setTimeout(()=>{setToggle(false)},100)}} /></a>   
          }   
        </div>
      </div>
      <div className='main_container_form' id = "form">
      <Form/>
      </div>
    </div>
  )
}
export default Main