import requests

def generate_explanation(problem, solution):
    url = "https://api.mistral.ai/v1/chat/completions"
    headers = {"Authorization": "Bearer R1GbzU9aNpEG8iiJ2UK7YjKGJBAZr9vP"}
    data = {
        "model": "mistral-tiny",
        "messages": [
            {"role": "system", "content": "You are a helpful AI math tutor."},
            {"role": "user", "content": f"Explain the solution to this problem: {problem}\nSolution: {solution}"}
        ]
    }
    response = requests.post(url, json=data, headers=headers)
    return response.json()["choices"][0]["message"]["content"]

problem = "Solve for x: 2x + 3 = 7"
solution = "x = 2"
print(generate_explanation(problem, solution))
