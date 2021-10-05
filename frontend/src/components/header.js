import React from 'react';
import Image from './image';
import {Input} from 'reactstrap';
import SideBarToggle from '../js/sideBarToggle.js';
import ToggleFullScreen from '../js/toggleFullScreen.js';
import { NavMenuToggle, NavMenuToggleLeft } from '../js/navMenuToggle.js';
import { Maximize } from 'react-feather';
// import { Link} from "react-router-dom";
import { MoreHorizontal } from 'react-feather';
// import { LogOut } from 'react-feather';


export default function Header(props) {

  return(
    // <!-- Page Header Start-->
    <div className="page-main-header">
        <div className="main-header-right row">
            <div className="main-header-left d-lg-none">
            <div className="logo-wrapper"><a href="/"><Image src="favicon.png" alt="Logo" /></a></div>
            </div>
            <div className="mobile-sidebar d-block">
            <div className="media-body text-right switch-sm">
                <label className="switch">
                    <Input  type="checkbox" id="sidebar-toggle" defaultChecked onClick={() => SideBarToggle() } />
                    <span className="switch-state"></span>
                </label>
            </div>
            </div>
            <div className="vertical-mobile-sidebar"><i className="fa fa-bars sidebar-bar"></i></div>
            <div className="nav-right col left-menu-header">
                <ul className="nav-menus-left">
                    
                    <li><span className="text-dark" style={{cursor : 'pointer'}} onClick={() => ToggleFullScreen() }> <Maximize /> </span></li>
                    
                    {/* <li><Link to="/">Buy</Link></li> */}
                    
                    {/* <li><Link to="/stake">staking</Link></li> */}
                    
                    
                </ul>
            <div className="d-xl-none mobile-toggle-left pull-right" onClick={() => NavMenuToggleLeft() }><MoreHorizontal /></div>
            </div>
            <div className="nav-right col pull-right right-menu">
                <ul className="nav-menus">
                
                    <li>             
                        <div className="dropdown">
                            <span className="btn dropdown-toggle" data-toggle="dropdown">
                                {/* <span className="media user-header">
                                    <Image className="mr-2 rounded-circle img-35" src="favicon.png" alt="" />
                                </span> */}
                                {/* <button className="btn btn-pill btn-primary py-1 px-2 font-weight-bold ml-2 dropdown-toggle" data-toggle="dropdown" type="button" title="Connect Wallet" onClick={prop.connect}>Connect Wallet</button> */}
                            </span>
                        
                        </div>
                    </li>

                    {/* <li><a href="logout" title='logout'><LogOut /></a></li> */}
                
                </ul>
            </div>
            
            <div className="d-lg-none mobile-toggle pull-right" onClick={() => NavMenuToggle() }><MoreHorizontal /></div>
        </div>
    </div>
    // <!-- Page Header Ends --></div>
  )
}