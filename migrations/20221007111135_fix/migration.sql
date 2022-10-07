/*
  Warnings:

  - The primary key for the `ExpenseParticipant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `currencyId` on the `ExpenseParticipant` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExpenseParticipant" (
    "amount" INTEGER NOT NULL,
    "isSpender" BOOLEAN NOT NULL DEFAULT false,
    "expenseId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,

    PRIMARY KEY ("expenseId", "participantId", "isSpender"),
    CONSTRAINT "ExpenseParticipant_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExpenseParticipant_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ExpenseParticipant" ("amount", "expenseId", "participantId") SELECT "amount", "expenseId", "participantId" FROM "ExpenseParticipant";
DROP TABLE "ExpenseParticipant";
ALTER TABLE "new_ExpenseParticipant" RENAME TO "ExpenseParticipant";
CREATE TABLE "new_Expense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER NOT NULL,
    "currencyId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Expense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Expense_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Expense" ("categoryId", "date", "id", "name") SELECT "categoryId", "date", "id", "name" FROM "Expense";
DROP TABLE "Expense";
ALTER TABLE "new_Expense" RENAME TO "Expense";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
