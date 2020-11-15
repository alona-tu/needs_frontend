import React from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemLike from './memmodules/MemLike'
import './member.scss'

function MemberLike() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemLike />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLike
