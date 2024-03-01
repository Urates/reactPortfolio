import React from 'react';
import './MobileBlog.css';
import BlogHomeImage from '../../images/BlogPost.jpg';
import ExpandIcon from '../../images/expandIcon.png'; 
import DropDownIcon from '../../images/dropDwnIcon.png'; 

const MobileBlog = () => {
    return (
    <div className='MobileBlog-Container'>
        <span><h3>Welcome to my Blog!</h3><hr></hr></span>
        <img src={BlogHomeImage} alt='Table Mountain Picture'/>
        <p><b>Photo taken at:</b>Table Mountain, Cape Town</p>

        <h4>THE POWER OF NETWORKING</h4>
        <p>Often times we tend to underrate the power hidden in the art of networking. This is probably the reason why the whole system of human existence is twisted, i.e. humans either misapply the art of networking or undermine the power hidden in it. It does not matter what causes ignorance around this matter but the fact is that networking has created billionaires that are today known worldwide. </p>

        <p>This photo then proves in one way that networking is not only fun but also powerful. This is, of course, only evident if you are to observe the relationship I have with the candidates in this picture before the event and after. I have observed everything for you here and I attest that networking is indeed the second if not the only key to success.  </p>

        <div className='DropDownHandler'>
            <span><a>Video Content</a><img src={DropDownIcon} alt='dropdown icon'/></span>
            <span><a>Image Content</a><img src={DropDownIcon} alt='dropdown icon'/></span>
            <span><a>Reports Content</a><img src={DropDownIcon} alt='dropdown icon'/></span>
        </div>
    </div>
  );
}
export default  MobileBlog;
