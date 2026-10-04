import { describe, expect, it } from "vitest";
import { budgetStatus, validatePassword } from "@/lib/expensewise";
describe("ExpenseWise rules",()=>{
 it("requires passwords to have at least 6 characters",()=>{expect(validatePassword("12345")).toBe(false);expect(validatePassword("123456")).toBe(true)});
 it("warns when 80 percent of a budget is used",()=>{expect(budgetStatus(800,1000)).toEqual({percentage:80,state:"warning"})});
 it("marks a budget exceeded at 100 percent",()=>{expect(budgetStatus(1000,1000)).toEqual({percentage:100,state:"exceeded"})});
});
