import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { alertActions } from './actions'
import History from './components/history'

//平台
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FixedButtons from './components/FixedButtons'

import Home from './pages/Home'
import MemberCard from './pages/Member/MemberCard'
import MemberShop from './pages/Member/MemberShop'
import MemberLike from './pages/Member/MemberLike'
import MemberInform from './pages/Member/MemberInform'
import MemberEcoin from './pages/Member/MemberEcoin'
import MemberComment from './pages/Member/MemberComment'
import Investment from './pages/Investment'
import Article from './pages/Article/Article'
import ProductList from './pages/ProductList/ProductList'
import MerchantHome from './pages/MerchantHome/merchantHome'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp'

//商家後台
import BackEndSidebar from './components/backend/Sidebar'
import BackEndNavbar from './components/backend/Navbar'
import BackEndDashboard from './pages/BackEnd/Dashboard'
import Sales from './pages/BackEnd/Sales'
import Ads from './pages/BackEnd/Ads'
import CreateArticle from './pages/Article/CreateArticle'
import TemplateEditedPage from './pages/BackEnd/TemplateEditedPage/TemplateEditedPage'
import TemplateHome from './pages/BackEnd/TemplateHome/TemplateHome'
import TemplateList from './pages/BackEnd/TemplateList/TemplateList'
import ArticleDetial from './pages/Article/ArticleDetial'
import TestArticleDetial from './pages/Article/TestArticleDetial'
import ProductsManagement from './pages/BackEnd/ProductsManagement'
import Breadcrumb from './components/backend/Breadcrumb'
import ContractsManagement from './pages/BackEnd/ContractsManagement'
import OrdersManagement from './pages/BackEnd/OrdersManagement'

//設置layout props
const DynamicLayoutRoute = (props) => {
  const { component: RoutedComponent, layout, ...rest } = props

  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  )

  //判斷layout
  switch (layout) {
    case 'FRONT_END_NAV': {
      return (
        <>
          <Navbar />
          <FixedButtons />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
    case 'BACK_END_NAV': {
      return (
        <>
          <BackEndNavbar />
          <BackEndSidebar />
          {actualRouteComponent}
        </>
      )
    }
    default: {
      return (
        <>
          <Navbar />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
  }
}

const url = new URL(window.location)
const pathname = url.pathname

//Route設置
function App(props) {
  useEffect(() => {
    History.listen((location) => props.clearAlerts)
  }, [pathname])

  return (
    <Router>
      <>
        {/* 平台 */}
        <Switch>
          <DynamicLayoutRoute
            exact
            path="/"
            component={Home}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/investment"
            component={Investment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/products/:id"
            component={ProductDetail}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/cart_list"
            component={Cart}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/cart_payment"
            component={Payment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/articles"
            component={Article}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/createArticle"
            component={CreateArticle}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/article/:id"
            component={TestArticleDetial}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/articleClassic"
            component={ArticleDetial}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/productlist"
            component={ProductList}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/card/:userid?"
            component={MemberCard}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/shop"
            component={MemberShop}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/like"
            component={MemberLike}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/inform"
            component={MemberInform}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/ecoin"
            component={MemberEcoin}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/comment"
            component={MemberComment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/homepage"
            component={MerchantHome}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/login"
            component={Login}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/signup"
            component={SignUp}
            layout="FRONT_END_NAV"
          />
          {/* 商家後台 */}
          <DynamicLayoutRoute
            exact
            path="/customer-backend/"
            component={BackEndDashboard}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-home"
            component={TemplateHome}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-edit"
            component={TemplateEditedPage}
            layout="BACK_END_NAV"
          />
          {/* <Route
            path="/customer-backend/template-edit"
            component={EditedPage}
          /> */}
          <DynamicLayoutRoute
            path="/customer-backend/template-list"
            component={TemplateList}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/sales-index"
            component={Sales}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/ads"
            component={Ads}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/products-management"
            component={ProductsManagement}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/contracts-management"
            component={ContractsManagement}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/orders-management"
            component={OrdersManagement}
            layout="BACK_END_NAV"
          />
        </Switch>
      </>
    </Router>
  )
}

const mapStateToProps = (store) => {
  const { alert } = store
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}

export default connect(mapStateToProps, actionCreators)(App)
