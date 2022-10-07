import React from 'react'

const DashboardPage = ({ user }) => {
    console.log(user)
    return
      <div>
        Hi {user.username}
      </div>
}

export default DashboardPage