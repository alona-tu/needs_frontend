import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import './investment.scss'
import Banner from './modules/Banner'
import Silder from './modules/Silder'
import InvestmentAdvantage from '../../components/InvestmentAdvantage'
import CreateStoreStep from './modules/CreateStoreStep'
import Partnership from './modules/Partnership'
import Fee from './modules/Fee'
import BrandList from './modules/BrandList'
import BrandData from '@assets/data/brands.json'
import Join from './modules/Join'
import CollapseList from './modules/CollapseList'
import CollapseData from '@assets/data/investment_q&a.json'

const Investment = () => {
  //Animation set Show
  const [advantageShow, setAdvantage] = useState(false)
  const [brandListShow, setBrandListShow] = useState(false)
  const [partnershipShow, setPartnershipShow] = useState(false)
  const [joinShow, setjoinShow] = useState(false)

  const advantageRef = useRef()
  const brandListRef = useRef()
  const partnershipRef = useRef()
  const joinRef = useRef()

  const windowHeight = window.innerHeight

  //Scroll hadler for animation
  const handleScroll = () => {
    const posY = (ref) => ref.current.getBoundingClientRect().top
    if (advantageRef.current && posY(advantageRef) <= windowHeight)
      setAdvantage(true)
    if (brandListRef.current && posY(brandListRef) <= windowHeight)
      setBrandListShow(true)
    if (partnershipRef.current && posY(partnershipRef) <= windowHeight)
      setPartnershipShow(true)
    if (joinRef.current && posY(joinRef) <= windowHeight) setjoinShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Container fluid className="investment">
        <Banner />
      </Container>

      <Container className="investment">
        <Silder />
        <InvestmentAdvantage show={advantageShow} aniRef={advantageRef} />
        <CreateStoreStep />
      </Container>

      <Container fluid className="investment">
        <Partnership show={partnershipShow} aniRef={partnershipRef} />
        <Fee />
      </Container>

      <Container className="investment">
        <BrandList
          show={brandListShow}
          BrandData={BrandData}
          aniRef={brandListRef}
        />
      </Container>

      <Container fluid className="investment">
        <Join show={joinShow} aniRef={joinRef} />
      </Container>

      <Container className="investment">
        <CollapseList CollapseData={CollapseData} />
      </Container>
    </>
  )
}

export default Investment
