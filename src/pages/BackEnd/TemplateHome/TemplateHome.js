import React, { useState, useEffect } from 'react'
import { withRouter,useHistory} from 'react-router-dom'

import { Col, Container, Button } from 'react-bootstrap'

import TemplatepicBig from './images/minimal_pro.png'
import './Styles/TemplateHome.scss'
import '../../../styles/Backend/_backend.scss'

import { MdVisibility, MdVisibilityOff, MdEdit } from 'react-icons/md'

function TemplateHome(props) {

const [eyeshow,setEyeShow]= useState(true)

  return (
    <>
      <div className="template-home">
        <Col className="offset-2" xs={10}>
          <Container className="w-80">
            <h2 className="mt-4">主題</h2>
            <Button className="mt-4 btn-light" onClick={()=>{props.history.push('/homepage')}}>
              <MdVisibility /> 查看目前主頁
            </Button>
            <hr />
            <h2 className="mt-4">當前主題</h2>
            <button className="mt-3 btn-purple" onClick={()=>{props.history.push('/customer-backend/template-edit')}}>
              <MdEdit /> 編輯當前主題
            </button>

            <div className="main-div rounded mt-5 main-adjust">
              <div className="col-6">
                <div className="d-flex flex-column">
                  <img
                    src={TemplatepicBig}
                    className="img-fluid bg-img"
                    alt="Responsive image"
                  ></img>
                  <button className="mt-4 btn-large" onClick={()=>{props.history.push('/customer-backend/template-list')}}>前往主題商店</button>
                </div>
              </div>
              <div className="col-6"></div>
            </div>

            <h2 className="mt-4">收藏的主題</h2>
            <hr />
          </Container>
        </Col>
      </div>
    </>
  )
}

export default TemplateHome
