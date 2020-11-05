import React from 'react'
import { withRouter } from 'react-router-dom'
import './ProductSideBar.scss'

const ProductSideBar = (props) => {
  const { categories, setSelectCategory, history } = props

  return (
    <>
      <div className="allCategories" onClick={() => setSelectCategory('')}>
        所有分類
      </div>
      {categories.map((value, index) => (
        <div className="classItem" key={index}>
          <div
            onClick={() => {
              setSelectCategory(index + 1)
              history.push(`/productlist/${value.name}`)
            }}
          >
            {value.name}
          </div>
        </div>
      ))}
    </>
  )
}

export default withRouter(ProductSideBar)
