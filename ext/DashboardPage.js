import React from 'react'

import getAllMyExpenses from '@wasp/queries/getAllMyExpenses'
import { useQuery } from '@wasp/queries'

const DashboardPage = ({ user }) => {
    const { data: myExpenses, myExpensesError } = useQuery(getAllMyExpenses)

    return
      <div>
        <div>
          Hi {user.username}
        </div>
        <div>
          {myExpenses.map(expense => {
            return <div> expense.name </div>
          }) || []}
        </div>
      </div>
}

export default DashboardPage