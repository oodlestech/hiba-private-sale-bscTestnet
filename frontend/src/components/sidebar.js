

import React from 'react';
import Image from './image';
import { Send } from 'react-feather';
import { Twitter } from 'react-feather';
import { BookOpen } from 'react-feather';
import { Globe } from 'react-feather';


export default function Sidebar() {

  return(
    // <!-- Page Sidebar Start-->
    <div className="page-sidebar iconcolor-sidebar">
        <div className="main-header-left d-none d-lg-block">
            <div className="logo-wrapper">
                <a href="/">
                    <Image src="favicon.png" alt="Logo" /><b style={{color : 'white'}}>HIBA FINANCE</b>
                </a>
            </div>
        </div>
        <div className="sidebar custom-scrollbar">
            <ul className="sidebar-menu">
                <li><a className="sidebar-header" href="https://t.me/Hiba_finance" target="_blank" rel="noreferrer"><Send /><span>Telegram</span></a></li>
                <li><a className="sidebar-header" href="https://twitter.com/HibaFinance?s=09" target="_blank" rel="noreferrer"><Twitter /><span>Twitter</span></a></li>
                <li><a className="sidebar-header" href="https://hibafinance.com/whitepaper.html" target="_blank" rel="noreferrer"><BookOpen /><span> Hiba Whitepaper</span></a></li>
                <li><a className="sidebar-header" href="https://hibafinance.com" target="_blank" rel="noreferrer"><Globe /><span> Hibafinance.com</span></a></li>
            </ul>
        </div>
    </div>
            
  )
}