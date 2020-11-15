import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemCardEdit from './memmodules/MemCardEdit'
import './member.scss'

function MemberCardEdit(props) {
  return (
    <>
      <div className="container member">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-10">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemCardEdit />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCardEdit
