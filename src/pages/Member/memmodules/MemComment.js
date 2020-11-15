import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { RiMessage2Fill } from 'react-icons/ri'
import './MemComment.scss'

const MemComment = () => {
  const [memcomment, setMemcomment] = useState([])

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/comment?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemcomment(res.data)
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])
  const display = (
    <>
      <div className="meminform">
        <div className="maincard">
          <div  className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <RiMessage2Fill />
              </p>
              <p>我的評論</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史評論</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">尚未評論</p>
                </div>
              </Link>
            </div>
          </div>
          {memcomment.map((item, index) => {
            return (
              <div className="informbar d-flex justify-content-center">
                <img
                  className="sign"
                  src={`http://localhost:5000/img/products/${item.image_path}`}
                  alt="products"
                />

                <div className="textbox">
                  <div>
                    <p>{item.brand_name}</p>
                  </div>
                  <div>
                    <p>{item.buyer_message}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
  return display
}

export default MemComment
