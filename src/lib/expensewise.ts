export const EXPENSE_CATEGORIES = ["Food", "Travel", "Shopping", "Education", "Bills", "Entertainment", "Health", "Other"] as const;
export const INCOME_CATEGORIES = ["Salary", "Freelance", "Scholarship", "Pocket Money", "Business", "Other"] as const;
export const PAYMENT_METHODS = ["Cash", "UPI", "Debit Card", "Credit Card", "Bank Transfer"] as const;
export function budgetStatus(spent: number, budget: number) {
  const percentage = budget > 0 ? Math.round((spent / budget) * 100) : 0;
  return { percentage, state: percentage >= 100 ? "exceeded" : percentage >= 80 ? "warning" : "safe" } as const;
}
export function validatePassword(password: string) { return password.length >= 6; }
export const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
