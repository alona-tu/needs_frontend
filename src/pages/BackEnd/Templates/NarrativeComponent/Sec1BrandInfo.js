import React, { useState, useEffect } from 'react'
import {
  Col,
  Container,
  Row
} from 'react-bootstrap'
import { GiPositionMarker } from 'react-icons/gi';
import { AiTwotoneShop,AiTwotonePhone } from "react-icons/ai";
// import { SignalCellularNullSharp } from '@material-ui/icons';

function Sec1BrandInfo(props){
  const { displayBgImg, color ,thisMerchantBrandInfo } = props
  console.log('thisMerchantBrandInfo',thisMerchantBrandInfo)
    return(
        <>
            <div className="Narrative">
<div className="sec1_background" style={{ backgroundImage : `url(${displayBgImg})`}}></div>
          <div className="background-color" style={{
            backgroundColor:props.color,
          }}></div>
          <Container className="p-0">
          {/* {Object.keys(subjects).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
    </li>
))} */}
          {[thisMerchantBrandInfo].map((merchantInfos,i)=>
          
          (
            <div className="sec1 d-flex" key={i}>
            <div className="sec1_avatar m-auto">
              <div className="d-flex mx-auto">
                <div className="d-flex ml-3">  
                <div className="d-flex flex-column align-items-center">
                
                {/* <div className="avatar rounded pb-3" ></div> */}
                {merchantInfos.index_img ? (
              <img
                className="avatar rounded pb-3"
                src={`http://localhost:5000/img/brands/${merchantInfos.index_img}`}
                alt=""
              />
            ) : (
              ''
            )}
                  <button className="store-follower-btn rounded">+關注</button>
                </div>
                  <div className="d-flex flex-column">
                <h2 className="h4">{merchantInfos.brand_name}</h2>
                  <div className="mt-3">
                  <h4><AiTwotoneShop/>{merchantInfos.brand_en_name}</h4>
                  <h4><AiTwotonePhone/>{merchantInfos.tel}</h4>
                  <h4><GiPositionMarker/>{merchantInfos.address}</h4>
                  </div>
              </div>
                  </div>
        
              </div>
            </div>  

            <div className="sec1_info">
              <Row className="row1 mx-auto">
                  <Col>
                  <h4>評價</h4>
                  <h4 className="red">{merchantInfos.review}顆星</h4>
                  </Col>
                  <Col>
                  <h4>粉絲人數</h4>
                  <h4 className="red">{merchantInfos.fans}人</h4>
                  </Col>
                  <Col>
                  <h4>商品數量</h4>
                  <h4 className="red">{merchantInfos.product_amount}件</h4>
                  </Col>
                </Row>
                <Row className="mx-auto">
                  <Col>
                    <h4>加入時間</h4>
                    <h4>{merchantInfos.created_months}個月</h4>
                    </Col>
                    <Col>
                    <h4>回應速度</h4>
                    <h4>{merchantInfos.reply_speed}</h4>
                    </Col>
                    <Col>
                    <h4>出貨速度</h4>
                    <h4>{merchantInfos.delivery_days}</h4>
                    </Col>
                </Row> 
            </div>
            </div>
                  )
                )}
            
            </Container>
</div>
        </>
    )
}
export default Sec1BrandInfo 
