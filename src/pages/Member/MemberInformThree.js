import React from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemuInformThree from './memmodules/MemInformThree'
import './member.scss'

function MemberInform() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemuInformThree />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberInform
