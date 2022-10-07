
export const getAllMyExpenses = (args, context) => {
    if (!context.user) { throw new HttpError(401) }
    // TODO: List all expenses where the user participated!
    //   For now however we just show all expenses, from all users, to get something quickly.
    return context.entities.Expense.findMany({})
}