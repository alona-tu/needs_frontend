import React from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemInformOne from './memmodules/MemInformOne'
import './member.scss'

function MemberInformOne() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemInformOne />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberInformOne
