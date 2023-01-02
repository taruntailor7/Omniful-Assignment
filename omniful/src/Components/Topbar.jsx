import React from 'react'
import "./Topbar.css"
import { BsLink, BsChevronDown, BsBell, BsQuestionCircle} from 'react-icons/bs';


export const Topbar = () => {
  return (
    <>
      <div className="topbar p-2">
          <div className="bar d-flex justify-content-between">
            <div className="quickLink d-flex mt-2">
              <BsLink />
              <p className='mt-3 mx-2'>Quick Links</p>
              <BsChevronDown fontSize={12}/>
            </div>
            <div className="lang d-flex justify-content-around">
              <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="usa" />
              English
              <BsBell />
              <BsQuestionCircle className=''/>
            </div>
          </div>
        </div>
    </>
  )
}
