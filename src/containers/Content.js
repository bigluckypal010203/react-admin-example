import React from 'react'


import { CContainer } from '@coreui/react'
import Dashboard from '../views/dashboard/Dashboard'

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>        
        <Dashboard/>
      </CContainer> 
    </main>
  )
}

export default React.memo(TheContent)
