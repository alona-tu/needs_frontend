import React, { useState, useEffect } from 'react'
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

            <div className="d-flex adjust">
            {/* <div className="brandStory_img" style={{ backgroundImage : `url(${displayStoryImg})`}}></div> */}
            {merchantInfos.brandStory_img ? (
              <img
                className="brandStory_img"
                src={`http://localhost:5000/BackgroundImg/${merchantInfos.brandStory_img}`}
                alt=""
              />
            ) : (
              ''
            )}
            {/* http://localhost:5000/BrandStoryImg/ */}
            <div className=" col-6 text-wrapper ml-5">
                    <>
                    StoryHTML+=`{merchantInfos.brand_story}`
                    </>
            </div>
        

            </div>
            </div>
            )
                )}  
            </div>
        </>
    )
}
export default Sec5Story