import React from 'react'
import { useEffect, useState } from 'react';
import { personsImgs } from '../../Data/images';
import { navigationLinks } from '../../Data/data'
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Sidebar.css'
const Sidebar = () => {

  const [activeLinkIdx,setActiveIndex] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const open = useSelector((store) => store.sideBarSlice.open);

  // if (!open) return null;

  useEffect(() => {
    if(!open){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [open]);

  return (
    <div className={ `sidebar ${sidebarClass}` }>
      <div className="user-info">
          <div className="info-img img-fit-cover">
              <img src={ personsImgs.person_two } alt="profile image" />
          </div>
          <span className="info-name">john-doe</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink) => (
                <li className="nav-item" key = { navigationLink.id } onClick={()=>setActiveIndex(navigationLink.id)}>
                  <Link to={navigationLink.id === activeLinkIdx ? "" : navigationLink.title==="Home"?"":navigationLink.title} className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                  </Link>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar