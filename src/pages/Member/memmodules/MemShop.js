import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './MemShop.scss'

import { useSelector } from 'react-redux'
import { FaShoppingBag } from 'react-icons/fa'

function MemShop() {
  const [memshop, setMemshop] = useState([])
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/shop?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemshop(res.data)
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])
  return (
    <>
      <div className="memshop">
        <div className="maincard">
          <div className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaShoppingBag />
              </p>
              <p>購買清單</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史清單</p>
                </div>
              </Link>
              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">待付款</p>
                </div>
              </Link>

              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">待出貨</p>
                </div>
              </Link>

              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">待收貨</p>
                </div>
              </Link>

              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">取消</p>
                </div>
              </Link>

              <div className="shoppinglist">
                <div className="d-flex fo">
                  <div>訂購編號</div>
                  <div>20201006_SC4_0003816</div>
                </div>

                <table className="table table-striped listhead">
                  <thead>
                    <tr>
                      <th className="">日本雙山</th>
                      <th className="">訂購日期</th>
                      <th className="">單價</th>
                      <th className="">數量</th>
                      <th className="">小計</th>
                      <th className="">狀態</th>
                    </tr>
                  </thead>
                  <tbody bgcolor="white">
                    {memshop.map((item, index) => {
                      return (
                        <tr>
                          <td className="d-flex">
                            <img
                              className="box"
                              src={`http://localhost:5000/img/products/${item.image_path}`}
                              alt="brands"
                            />
                            <div className="align-self-center">
                              <p className="font-s">{item.title}</p>
                              <p className="font-s">規格：單一規格</p>
                            </div>
                          </td>
                          <td>2020/10/06</td>
                          <td>NT$780</td>
                          <td>3</td>
                          <td>NT$2340</td>
                          <td>Ｖ</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemShop
