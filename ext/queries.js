export function getAllExpenses(_args, context) {
    if (!context.user) {
        throw new HttpError(401)
    }

    return context.entities.Expense.findMany({
        include: {
            expenseParticipants: {
                include: {
                    participant: true,
                },
            },
        },
    })
}
