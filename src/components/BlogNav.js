import React from 'react';
import vdIcon from '../images/videos.png';
import ImageSvg from '../images/image-svg.png';
import ReportSvg from '../images/reports.png';
import SearchB from '../images/searchB.png';


const BlogNav = () => {
    return (
      <div className='mainBlog'>
          <div className='NavItems'>
                <div className='resizedImage'>
                    <img src={vdIcon}></img>
                    <p>Video Posts</p>
                </div>
                <div className='resizedImage' >
                    <img src={vdIcon} alt='Video Icon'  />
                    <p>Video Posts</p>
                </div>

                <div className='resizedImage'>
                <img src={ImageSvg} alt='Image Icon' />
                <p>Image Posts</p>
                </div>
              
                <div className='resizedImage'>
                <img src={ReportSvg} alt='Reports Icon' />
                <p>Reports</p>
                </div>

                <div>
                <img src={SearchB} />
                <input placeholder='search content in my Blog'></input>
                </div> 
          </div>
      </div>
    );
  }
  
  export default BlogNav;