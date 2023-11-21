import { iconsImgs } from "../../Data/images";
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import { sideBarState } from "../../Utils/sideBarSlice";
const ContentTop = () => {

    const dispatch = useDispatch();
    const handleSidebar = () => {
      dispatch(sideBarState());
    };

  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler">
                <img src={ iconsImgs.menu } alt="" onClick={handleSidebar} />
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
            <button className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop
