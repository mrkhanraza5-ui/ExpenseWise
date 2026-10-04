<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep ExpenseWise user data in Lovable Cloud tables protected by per-user row-level security; this preserves a simple full-stack architecture and prevents cross-account access.
- Use one shared ExpenseWise application shell across protected routes; this keeps navigation and CRUD behavior consistent and understandable for a student project.
