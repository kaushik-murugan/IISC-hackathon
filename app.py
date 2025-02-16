from flask import Flask, request, jsonify
import easyocr
import os
from math_solver import solve_equation
from word_problem_solve import extract_math_problem
from mistral import generate_explanation
from graph_plotter import plot_graph
from geometry_solver import solve_geometry_problem
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


# Initialize EasyOCR Reader
try:
    reader = easyocr.Reader(['en'])
    print("✅ EasyOCR Loaded Successfully!")
except Exception as e:
    print("❌ EasyOCR Loading Error:", e)

@app.route("/solve", methods=["POST"])
def solve():
    data = request.json
    problem = data.get("problem")

    if "=" in problem:
        solution = solve_equation(problem)
        explanation = generate_explanation(problem, solution)
        return jsonify({"solution": solution, "explanation": explanation})
    else:
        return jsonify({"error": "Invalid equation format"}), 400

@app.route("/word_problem", methods=["POST"])
def solve_word_problem():
    data = request.json
    question = data.get("question")
    context = data.get("context")

    extracted_problem = extract_math_problem(question, context)
    solution = solve_equation(extracted_problem)
    explanation = generate_explanation(extracted_problem, solution)
    
    return jsonify({"extracted_problem": extracted_problem, "solution": solution, "explanation": explanation})

@app.route("/upload_image", methods=["POST"])
def recognize_math_image():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    file = request.files["image"]
    file_path = os.path.abspath("uploaded_image.jpg")
    file.save(file_path)

    try:
        extracted_text = reader.readtext(file_path, detail=0)
        extracted_text = " ".join(extracted_text)  # Combine text
        solution = solve_equation(extracted_text)
        explanation = generate_explanation(extracted_text, solution)

        return jsonify({
            "extracted_text": extracted_text,
            "solution": solution,
            "explanation": explanation
        })
    except Exception as e:
        return jsonify({"error": f"OCR Processing Error: {str(e)}"}), 500
@app.route("/graph", methods=["POST"])
def graph():
    data = request.json
    equation = data.get("equation")

    img_base64 = plot_graph(equation)
    return jsonify({"message": "Graph plotted successfully.", "image": img_base64})

@app.route("/geometry", methods=["POST"])
def geometry():
    data = request.json
    question = data.get("question")

    answer = solve_geometry_problem(question)
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)
