import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';

const Navigation = () => {
  return (
    <>
     <div className="nav">
            <li className='push'><FiFacebook /></li>
            <li>Sample</li>
            <li>House</li>
            <li>product</li>
            <li>About</li>
            <li>Contact</li>
            <li>
            <AiOutlineSearch/>
            </li>
        </div>
    </>
  )
}

export default Navigation