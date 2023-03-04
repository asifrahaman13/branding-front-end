import React from "react";
import { FiFacebook } from 'react-icons/fi';

const SecondFooter = () => {
  return (
    <>
      <div className="second-footer">
        <div className="second-footer-container">
          <FiFacebook className="second-footer-image" />
          <div className="footer-first">
            <li>HelpDesk</li>
            <li>change</li>
            <li>powerered</li>
          </div>
          <div className="footer-first">
            <li>lorem</li>
            <li>change</li>
            <li>contact</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondFooter;
