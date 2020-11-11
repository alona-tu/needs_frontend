import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import { Col, Container, Pagination } from 'react-bootstrap'
import './ProductsManagement.scss'
import ToolBar from './modules/ToolBar'
import ProductsContent from './modules/ProductsContent'
import BackendPagination from '../../../components/backend/BackendPagination'
import AddProduct from './modules/AddProduct'
import AddCourse from './modules/AddCourse'
import History from '../../../components/history'
import { alertActions } from '../../../actions'

const ProductsManagement = (props) => {
  const { error, success, clear } = alertActions
  const alerMsg = useSelector((state) => state.alert.message)
  const alerType = useSelector((state) => state.alert.type)

  // all launched soldout unlaunched, grid list
  const [type, setType] = useState('all')
  const [viewType, setViewType] = useState('list')
  const [showAddProd, setShowAddProd] = useState(true)
  const [showAddCourse, setShowAddCourse] = useState(false)

  // const merchantId = useSelector((state) => state.authentication.user.user.id)
  const [merchantId, setMerchantId] = useState(12)
  const [data, setData] = useState([])
  const [pageItems, setPageItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({})
  const [alertShow, setAlertShow] = useState(false)

  const toPage = (e) => {
    setCurrentPage(e)
    History.push(`/customer-backend/products-management/page=${e}`)
    window.scrollTo(0, 0)
  }

  const getCategories = () => {
    Axios.get(`http://122.116.38.12:5050/get-categories-api`).then((res) => {
      const data = res.data
      setCategories(data)
    })
  }

  const getData = (merchantId, type) => {
    //跟server拿資料
    Axios.get(
      `http://122.116.38.12:5050/bk-products-api/list?id=${merchantId}&filter=${type}&page=${currentPage}`
    )
      .then((res) => {
        const data = res.data.rows
        //送入資料
        setTotalPages(res.data.totalPages)
        setData(data)

        //處理頁碼
        const pageArr = []
        for (let i = 1; i <= res.data.totalPages; i++) {
          pageArr.push(
            <Pagination.Item
              key={i}
              active={i === currentPage}
              onClick={(e) => toPage(i)}
            >
              {i}
            </Pagination.Item>
          )
        }
        setPageItems(pageArr)
      })
      .catch((error) => {
        console.log(error.toString())
        return error.toString()
      })
  }

  //type跟currentPage改變觸發filter
  useEffect(() => {
    getData(merchantId, type)
  }, [currentPage, type])

  return (
    <>
      <div className="productsMng">
        <Col className="main offset-2" xs={10}>
          <Container fluid>
            <ToolBar
              type={type}
              setType={setType}
              viewType={viewType}
              setViewType={setViewType}
              showAddProd={showAddProd}
              setShowAddProd={setShowAddProd}
              showAddCourse={showAddCourse}
              setShowAddCourse={setShowAddCourse}
            />
            <ProductsContent data={data} />
            <BackendPagination
              pageItems={pageItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            <AddProduct
              showAddProd={showAddProd}
              setShowAddProd={setShowAddProd}
              getData={getData}
              merchantId={merchantId}
              type={type}
              categories={categories}
              setCategories={setCategories}
              formData={formData}
              setFormData={setFormData}
              alertShow={alertShow}
              setAlertShow={setAlertShow}
              error={error}
              success={success}
              clear={clear}
              alerMsg={alerMsg}
              alerType={alerType}
              getCategories={getCategories}
            />
            <AddCourse
              showAddCourse={showAddCourse}
              setShowAddCourse={setShowAddCourse}
              getData={getData}
              merchantId={merchantId}
              type={type}
            />
          </Container>
        </Col>
      </div>
    </>
  )
}

export default ProductsManagement
