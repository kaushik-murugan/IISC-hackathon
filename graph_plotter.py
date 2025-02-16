import numpy as np
import matplotlib.pyplot as plt

def plot_graph(equation):
    x = np.linspace(-10, 10, 400)  
    y = eval(equation.replace("^", "**"))  

    plt.figure(figsize=(6, 4))
    plt.plot(x, y, label=f"y = {equation}")
    plt.axhline(0, color='black', linewidth=0.5)
    plt.axvline(0, color='black', linewidth=0.5)
    plt.grid()
    plt.legend()
    plt.show()

plot_graph("x**2 - 4*x + 3")  # Example: y = x^2 - 4x + 3
