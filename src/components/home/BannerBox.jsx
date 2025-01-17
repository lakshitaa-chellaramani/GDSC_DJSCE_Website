import React , {useContext} from "react";
import { ThemeContext } from "../../ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons';
// import Flip from 'react-reveal/Flip';

export const BannerBox = () => {

  const {darkMode} = useContext(ThemeContext) ;
  return (
    <> 
    <div data-aos="fade-in" data-aos-offset="210">
      <div className ={darkMode ? "banner_box dark":"banner_box light"}>
        <span className="left_arrow"  
        data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="210"> 
        <FontAwesomeIcon icon={faAngleLeft}  size="2x" />
        </span>

        <span className="right_arrow" 
        data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="210"> 
        <p>/</p>
         <FontAwesomeIcon icon={faAngleRight}  size="2x" /> 
        </span>
        
        <div className="banner_span">
            <span style={{color:"#4385F3"}} 
              data-aos="fade-down"  data-aos-delay="50" data-aos-offset="180">
                CODE. 
            </span>

            <span style={{color:"#E94436"}}
             data-aos="fade-down"  data-aos-delay="150"data-aos-offset="180" >
               CREATE. 
            </span>
            <span style={{color:"#00994E"}}  data-aos="fade-down"  data-aos-delay="350" data-aos-offset="180">
              DEVELOP. 
            </span>
            <span style={{color:"#FBC02D"}}  data-aos="fade-down"  data-aos-delay="500" data-aos-offset="180">
              DEPLOY 
            </span>
        </div>
        

      </div>

      </div>

    </>
  );
};