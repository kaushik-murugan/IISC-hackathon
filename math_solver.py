from sympy import symbols, Eq, solve, sympify

def solve_equation(equation):
    x = symbols('x')
    try:
        # Split equation into left and right parts
        left, right = equation.split("=")
        eq = Eq(sympify(left), sympify(right))
        solution = solve(eq, x)
        return [str(sol) for sol in solution]
    except Exception as e:
        return str(e)