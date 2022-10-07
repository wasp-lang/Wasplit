import React from 'react'

import getAllExpenses from '@wasp/queries/getAllExpenses'
import { useQuery } from '@wasp/queries'

const DashboardPage = ({ user }) => {
    const { data: myExpenses, myExpensesError } = useQuery(getAllExpenses)

    return <div>
        <div>
          Hi {user.username}
        </div>
        <div>
          {myExpenses?.map(expense => {
            return <div> {expense.name} </div>
          }) || []}
        </div>
      </div>
}

export default DashboardPage