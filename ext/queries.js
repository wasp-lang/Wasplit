export function getAllExpenses(_args, context) {
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
