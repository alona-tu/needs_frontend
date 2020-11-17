import React, { useState, useEffect } from 'react'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
function Sec5Story(props){
    const { displayStoryImg , thisMerchantBrandInfo } = props
    let StoryHTML = ''
    return(
        <>
            <div className="sec5 py-5">
            {[thisMerchantBrandInfo].map((merchantInfos,i)=>
          (
            <div className="m-auto">
            <div className=" underline-wrapper">

            <div className="underline ml-5">
            <h2>品牌故事</h2>
            </div>
            </div>
            <ScrollParallax 
                            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.8] }}
                            style={{ transform: 'translateX(100px)', opacity: 0 }}
                            always={true}
                            duration={1000}
                            > 
            <div className="d-flex adjust">
            {/* <div className="brandStory_img" style={{ backgroundImage : `url(${displayStoryImg})`}}></div> */}
            {merchantInfos.brandStory_img ? (
              <img
                className="brandStory_img"
                src={`http://localhost:5000/BrandStoryImg/${merchantInfos.brandStory_img}`}
                alt=""
              />
            ) : (
              ''
            )}
            {/* http://localhost:5000/BrandStoryImg/ */}
            <div 
                className=" col-6 text-wrapper ml-5"
                dangerouslySetInnerHTML={{ __html: merchantInfos.brand_story}}
                ></div>
            </div>
            </ScrollParallax>
            </div>
            )
                )}  
            </div>
        </>
    )
}
export default Sec5Story