import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ArticleRecomment from '../../components/Article/ArticleRecomment'
import ArticleRecommentProduct from '../../components/Article/ArticleRecommentProduct'

const TestArticleDetial = (props) => {
  const [getDetial, setGetDetial] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      const url = `http://localhost:5000/article/${props.match.params.id}`
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setGetDetial(res.data)
    }
    fetchPosts()
    window.scrollTo(0, 0)
  }, [])

  const DeleteBtn = async () => {
    const url = `http://localhost:5000/article/${props.match.params.id}`
    const data = await axios
      .delete(url)
      .catch((err) => console.log('ErrDelete', err))
    console.log('delete', data)
  }

  return (
    <>
      <button onClick={DeleteBtn}>DeleteBtn</button>
      <div className="container">
        <div className="d-flex flex-lg-row flex-md-column mt-4">
          <div className="articleDetial col-lg-8 col-md-12">
            {<div dangerouslySetInnerHTML={{ __html: getDetial.detial }} />}
          </div>
          <div className="col-lg-4 col-md-12">
            <div style={{ marginBottom: '200px' }}>
              <h5 className="mb-4">推薦文章</h5>
              <ArticleRecomment />
            </div>
            <div className="">
              <h5 className="mb-4">精選5款人氣筆記本套推薦</h5>
              <ArticleRecommentProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestArticleDetial
