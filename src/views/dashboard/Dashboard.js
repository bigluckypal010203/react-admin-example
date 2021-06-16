import React, { lazy } from 'react'

import Users from '../users/Users.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsTraffic = lazy(() => import('../widgets/WidgetsTraffic.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <Users />
      <WidgetsTraffic />
    </>
  )
}

export default Dashboard
