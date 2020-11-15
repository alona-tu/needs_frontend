import React from 'react'
import { Link } from 'react-router-dom'
import {
  Col,
  Container,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import avatar from '../../pages/BackEnd/Dashboard/images/book.jpg'
import customer from '../../pages/BackEnd/Dashboard/images/australia-customer.jpg'
import BreadcrumbBackend from './Breadcrumb'
import { userActions } from '../../actions'

function Navbar() {
  const loginUser = useSelector((state) => state.authentication.user)

  //logout
  const { logout } = userActions

  const openFullscreen = () => {
    const elem = document.body
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
  }

  return (
    <>
      <div className="backend-navbar-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <div className="main-navbar d-flex">
              <BreadcrumbBackend />
              <Nav variant="pills" activeKey="1" onSelect={openFullscreen}>
                <Nav.Item className="nav-icon">
                  <Nav.Link eventKey="1" href="#/home">
                    <i className="fas fa-expand"></i>
                  </Nav.Link>
                </Nav.Item>
                <Dropdown as={NavItem} className="nav-icon">
                  <Dropdown.Toggle as={NavLink}>
                    <i className="far fa-bell"></i>
                    <span className="badge badge-pill badge-primary nav-badge">
                      5
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right notification-dropdown">
                    <Dropdown.Item className="dropdown-menu-header">
                      <div className="notifier">
                        <i className="far fa-envelope pr-2"></i>5則新通知
                      </div>
                    </Dropdown.Item>
                    <div className="scrollable-container">
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <NavItem className="staff-info">
                  <div
                    style={{
                      textAlign: 'end',
                    }}
                  >
                    {loginUser.user.username}
                  </div>
                  <div
                    className="staff-status"
                    style={{ padding: '0 0.5rem', fontSize: '14px' }}
                  >
                    <i className="fas fa-circle status-online"></i>上線
                  </div>
                </NavItem>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <div className="staff-avatar">
                      <img
                        src={`http://122.116.38.12:5050/img/brands/${loginUser.user.brand_img}`}
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-staff dropdown-menu-right">
                    <Dropdown.Item>
                      <Link to="/">
                        <i class="fas fa-home pr-2"></i>回到首頁
                      </Link>
                    </Dropdown.Item>
                    <div className="dropdown-divider"> </div>
                    <Dropdown.Item>
                      <i className="fas fa-user pr-2" />
                      個人資料
                    </Dropdown.Item>
                    <div className="dropdown-divider"> </div>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault()
                        logout()
                      }}
                    >
                      <i className="fas fa-sign-out-alt pr-2" />
                      登出
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </div>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Navbar
