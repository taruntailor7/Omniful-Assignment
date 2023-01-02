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
                <img className="logo" src="data:image/png;base64,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" alt="" />
                <div className='mt-3'><SlHome /></div>
                <div className='mt-3'><BiDollarCircle/></div>
                <div className='mt-3'><MdAutoGraph/></div>
                <div className='mt-3'><BiDockTop /></div>
                <div className='mt-3'><VscSymbolKeyword/></div>
                <div className='mt-3'><TbTriangleSquareCircle/></div>
                <div className='mt-3'><BiWalletAlt /></div>
                <div className='mt-3'><AiOutlineSetting /></div>
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

