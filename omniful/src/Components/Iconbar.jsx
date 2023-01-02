import React from 'react'
import "./Iconbar.css";
import {SlHome} from 'react-icons/sl'
import { BiDollarCircle, BiDockTop, BiWalletAlt } from 'react-icons/bi'
import { MdAutoGraph } from 'react-icons/md'
import { TbTriangleSquareCircle } from 'react-icons/tb'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai'
import {FiUsers,FiLogOut} from 'react-icons/fi'
import {BsShieldCheck} from 'react-icons/bs'


export const Iconbar = () => {
  return (
    <>
        <div className="d-flex flex-column">
            <div className="iconbar d-flex flex-column p-2">
                <img className="logo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/i2n6r3qczrsmretrymn0" alt="logo"/>
                <div className='mt-3'><SlHome /></div>
                <div className='mt-3'><BiDollarCircle/></div>
                <div className='mt-3'><MdAutoGraph/></div>
                <div className='mt-3'><BiDockTop /></div>
                <div className='mt-3'><VscSymbolKeyword/></div>
                <div className='mt-3'><TbTriangleSquareCircle/></div>
                <div className='mt-3'><BiWalletAlt /></div>
                <div className='mt-3 setting d-flex'><AiOutlineSetting /></div>
                <div className='mt-3'><FiUsers /></div>
                <div className='my-3'><BsShieldCheck /></div>
            </div>
            <div className="logout d-flex flex-column p-2">
                <div className='mt-3'><AiOutlineQuestionCircle /></div>
                <div className='mt-3'><FiLogOut /></div>
            </div>
        </div>
    </>
  )
}

