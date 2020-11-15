import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './MemLike.scss'

import { useSelector } from 'react-redux'
import { FaStore } from 'react-icons/fa'

function MemLike() {
  const [memlike, setMemLike] = useState([])
  const [type, setType] = useState('brands')
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/like?customer_id=${val}&filter=${type}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemLike(res.data.rows)
  }

  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [type])

  return (
    <>
      <div className="memlike">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaStore />
              </p>
              <p>我的關注</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto" onClick={(e) => setType('brands')}>
                  <p className="font-s">關注商家</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto" onClick={(e) => setType('product')}>
                  <p className="font-s">關注商品</p>
                </div>
              </Link>

              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史關注</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="d-flex">
            {memlike.map((item, index) => {
              return (
                <div className="likecard">
                  <img
                    className="mark"
                    src={`http://localhost:5000/img/brands/${item.index_img}`}
                    alt="brands"
                  />

                  <p className="font-s">{item.brand_name}</p>

                  <p className="font-s">*****</p>
                  <div className="d-flex justify-content-center">
                    <p className="font-s">粉絲數量</p>
                    <p className="font-s">267</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemLike
