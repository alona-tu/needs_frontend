import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Modal, Button } from 'react-bootstrap'
import Axios from 'axios'
import NumberFormat from 'react-number-format'
import { FiUpload, FiPlusCircle } from 'react-icons/fi'
// import { alertActions } from '../../../../actions'

const AddProduct = (props) => {
  const {
    showAddProd,
    setShowAddProd,
    getData,
    merchantId,
    type,
    getCategories,
    categories,
    myData,
    setMyData,
    alertShow,
    setAlertShow,
    error,
    success,
    clear,
    alerMsg,
    alerType,
  } = props

  const dispatch = useDispatch()
  const postData = new FormData()

  const handleSetForm = (e, key) => {
    if (key === 'file') {
      const files = e.target.files
      for (let i = 0; i < files.length; i++) {
        const img = files[i]
        postData.append('imgList', img)
      }
    } else {
      const value = e.target.value
      // setMyData({ ...myData, [key]: value })
      postData.set(key, value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    Axios.post(
      `http://122.116.38.12:5050/bk-products-api?id=${merchantId}&prodType=0`,
      postData
    ).then((res) => {
      if (!res.data.success) {
        setAlertShow(true)
        setTimeout(() => {
          dispatch(clear())
          setAlertShow(false)
        }, 1500)
        return dispatch(error('新增失敗'))
      }
      setAlertShow(true)
      setShowAddProd(false)
      getData(merchantId, type)
      setTimeout(() => {
        dispatch(clear())
        setAlertShow(false)
      }, 1500)
      return dispatch(success('新增成功'))
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Modal
        className="addProdModal"
        show={showAddProd}
        onHide={(e) => {
          setShowAddProd(false)
          setMyData({})
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>實體商品上架</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="title">
              <Form.Label>商品名稱</Form.Label>
              <Form.Control
                type="text"
                // value={formData.title || ''}
                onChange={(e) => handleSetForm(e, 'title')}
              />
            </Form.Group>
            <Form.Label>商品圖片</Form.Label>
            <Form.Group controlId="file" className="uploadImg">
              <Form.File
                className="position-relative"
                required
                name="file"
                label={<FiUpload size="35px" />}
                feedbackTooltip
                multiple
                onChange={(e) => handleSetForm(e, 'file')}
              />
              <Form.Label>上傳圖片</Form.Label>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>商品類別</Form.Label>
              <Form.Control
                as="select"
                // value={formData.category}
                onChange={(e) => handleSetForm(e, 'category')}
              >
                <option value="" disabled selected hidden>
                  請選擇
                </option>
                {categories.map((item, index) => {
                  const arr = item.category.split(',')
                  return (
                    <>
                      <option
                        key={item.id}
                        value={item.id}
                        className="parentCat"
                        disabled
                      >
                        {item.parentCategory}
                      </option>
                      {arr.map((itm, idx) => {
                        return (
                          itm && (
                            <>
                              <option key={idx} value={itm.split(':')[0]}>
                                {itm.split(':')[1]}
                              </option>
                            </>
                          )
                        )
                      })}
                    </>
                  )
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="specification">
              <Form.Label>商品規格</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  // value={formData.specification1}
                  onChange={(e) => handleSetForm(e, 'specification1')}
                />
                <Form.Control
                  type="text"
                  // value={formData.specification2}
                  onChange={(e) => handleSetForm(e, 'specification2')}
                />
                <Form.Control
                  type="text"
                  // value={formData.specification3}
                  onChange={(e) => handleSetForm(e, 'specification3')}
                />
                <FiPlusCircle size="25px" style={{ color: '#495057' }} />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="price">商品定價</Form.Label>
              <NumberFormat
                className="form-control"
                thousandSeparator={true}
                prefix={'$'}
                id="price"
                // value={formData.price}
                onChange={(e) => handleSetForm(e, 'price')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="salePrice">商品促銷價</Form.Label>
              <NumberFormat
                className="form-control"
                thousandSeparator={true}
                prefix={'$'}
                id="salePrice"
                // value={formData.salePrice}
                onChange={(e) => handleSetForm(e, 'salePrice')}
              />
            </Form.Group>
            <Form.Group controlId="launchDate">
              <Form.Label>商品上架日</Form.Label>
              <Form.Control
                type="date"
                // value={formData.launchDate}
                onChange={(e) => handleSetForm(e, 'launchDate')}
              />
            </Form.Group>
            <Form.Group controlId="stock">
              <Form.Label>商品庫存</Form.Label>
              <Form.Control
                type="number"
                // value={formData.launchDate}
                onChange={(e) => handleSetForm(e, 'stock')}
              />
            </Form.Group>
            <Form.Group controlId="outline">
              <Form.Label>商品摘要</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                // value={formData.outline}
                onChange={(e) => handleSetForm(e, 'outline')}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              onClick={(e) => {
                setShowAddProd(false)
                setMyData({})
              }}
            >
              取消
            </Button>
            <Button variant="secondary">預覽商品頁</Button>
            <Button variant="primary" type="submit">
              上架商品
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={alertShow} centered className="alertModal">
        <Modal.Body className={alerType}>{alerMsg}</Modal.Body>
      </Modal>
    </>
  )
}

export default AddProduct
