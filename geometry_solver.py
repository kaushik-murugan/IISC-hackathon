"""/*import wolframalpha

//wolfram_client = wolframalpha.Client("HY599L-44LRKGX6X7")

//def solve_geometry_problem(question):
    try:
        res = wolfram_client.query(question)
        answer = next(res.results).text
        return answer
    except:
        return "Could not find a solution."

print(solve_geometry_problem("What is the area of a triangle with base 10 and height 5?"))
*/"""
import matplotlib.pyplot as plt
import numpy as np
import os

def solve_geometry_problem(question):
    fig, ax = plt.subplots()
    
    if "triangle" in question.lower():
        x = [1, 4, 2, 1]
        y = [1, 1, 4, 1]
        ax.plot(x, y, marker='o', linestyle='-')
        ax.set_title("Triangle")
    
    elif "circle" in question.lower():
        circle = plt.Circle((0, 0), 1, fill=False, edgecolor='b', linewidth=2)
        ax.add_patch(circle)
        ax.set_xlim(-1.5, 1.5)
        ax.set_ylim(-1.5, 1.5)
        ax.set_aspect('equal', adjustable='datalim')
        ax.set_title("Circle")
    
    else:
        return "Unknown shape!"

    img_path = "geometry_plot.png"
    plt.savefig(img_path)
    plt.close()
    
    print(f"✅ Image saved at: {img_path}")  # Debugging line
    return img_path

# Test function
print(solve_geometry_problem("Draw a triangle"))
