import React, { useState } from 'react'
import { Range } from 'rc-slider'
import { Button } from 'react-bootstrap'
import StarRating from '../../../components/StarRating'
import 'rc-slider/assets/index.css'
import './SideFilter.scss'
import { event } from 'jquery'

const SideFilter = (props) => {
  const { ecoin, setEcoin } = props
  // setting PriceRang
  const [price, setPrice] = useState([500, 6000])

  //setting handlePrice step
  const sliderProps = {
    min: 0,
    max: 10000,
    step: 100,
    marks: {
      0: 0,
      5000: 5000,
      10000: 10000,
    },
  }

  const onSliderChange = (price) => {
    console.log(price)
    setPrice(price)
  }

  const checkUseEcoin = () => {
    setEcoin(!ecoin)
  }

  return (
    <>
      <div className="sideFilter priceRange">
        <div className="filterItem">
          <h6 className="title">價格範圍</h6>
          <div>
            <div className="showPrice">
              <label>{price[0]}</label>
              <label>-</label>
              <label>{price[1]}</label>
            </div>
            <Range
              allowCross={false}
              defaultValue={[500, 6000]}
              onChange={onSliderChange}
              {...sliderProps}
            />
          </div>
        </div>
        <div className="filterItem">
          <h6 className="title">顏色分類</h6>
          <div className="d-flex colorSelect">
            <div className="color red" onClick={(e) => console.log('1')}></div>
            <div
              className="color orange"
              onClick={(e) => console.log('2')}
            ></div>
            <div
              className="color yellow"
              onClick={(e) => console.log('3')}
            ></div>
            <div
              className="color Indigo"
              onClick={(e) => console.log('4')}
            ></div>
            <div
              className="color green"
              onClick={(e) => console.log('5')}
            ></div>
          </div>
        </div>
        <div className="filterItem starSelect">
          <h6 className="title">評價</h6>
          <StarRating />
        </div>
        <div className="filterItem">
          <h6 className="title">其他篩選</h6>
          <div>
            <label>
              <input type="checkbox" checked={ecoin} onChange={checkUseEcoin} />
              可用e幣
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              尚有庫存
            </label>
          </div>
        </div>
      </div>

      <Button variant="dark">套用搜索</Button>
    </>
  )
}

export default SideFilter
