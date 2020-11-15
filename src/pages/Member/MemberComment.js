import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemComment from './memmodules/MemComment'
import './member.scss'

function MemberComment() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemComment />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberComment
