import React from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/MemCard'
import './member.scss'

function MemberCard(props) {
  return (
    <>
      <div className="container member">
        <div class="pos-f-t">
          <nav class="navbar navbar-dark bg-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h4 class="text-white">Collapsed content</h4>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
        </div>

        <button
          className="hidebtn navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Memsidebar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="row my-3">
          <div className="col-lg-2 collapse" id="Memsidebar">
            <MemSidebar {...props} />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemCard {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCard
