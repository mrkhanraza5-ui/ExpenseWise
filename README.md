# ExpenseWise

A complete full-stack expense tracker for managing income, expenses, categories, monthly budgets, reports, and profile details.

## Features
- Email/password and Google authentication
- Private user profiles and protected pages
- Transaction CRUD with search, filters, sorting, and confirmation
- Live dashboard totals calculated from stored records
- Category and monthly budget management with 80% warnings
- Responsive Recharts reports
- Profile editing and secure password changes
- Frontend and database validation, loading states, and friendly errors

## Technology
React 19, TypeScript, TanStack Start/Router, Tailwind CSS, Recharts, TanStack Query, and Lovable Cloud (PostgreSQL, authentication, generated REST data API, row-level security).

## Structure
- `src/components/ExpenseWiseApp.tsx` — reusable application screens
- `src/routes/auth.tsx` — registration and login
- `src/routes/_authenticated/` — protected pages
- `src/lib/expensewise.ts` — shared rules and formatting
- `drizzle/migrations/` — database schema

## Run locally
1. Install Bun.
2. Run `bun install`.
3. Run `bun run dev`.
4. Open the local address printed in the terminal.

Cloud connection values are managed automatically and private secrets are never committed. The frontend uses authenticated database requests; row-level security ensures every user can access only their own records.

## Testing the main flow
1. Register and confirm the email, or continue with Google.
2. Add income and an expense.
3. Check that dashboard totals and reports update.
4. Search, edit, and delete a transaction.
5. Set a category budget and verify the usage indicator.
6. Update the profile and test password change.

## API and data model
The app uses the backend's generated REST API for `profiles`, `categories`, `transactions`, and `budgets`. Each table supports the required protected CRUD operations. Authentication issues and validates access tokens, while database policies enforce ownership.

## Deployment
The same managed backend serves preview and production, so no separate database server or secret file is required. For GitHub, keep generated migration files committed and never commit private environment values.

## Screenshots
Add dashboard, transactions, budgets, and reports screenshots here before submission.

## Future enhancements
Recurring transactions, receipt uploads, CSV export, and savings goals.
