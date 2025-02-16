import nltk
from transformers import pipeline

nltk.download('punkt')

# Load model only once
qa_pipeline = pipeline("question-answering", model="distilbert-base-cased-distilled-squad")

def extract_math_problem(question, context):
    return qa_pipeline(question=question, context=context)['answer']

context = "If 3 apples cost $6, how much does 1 apple cost?"
question = "What is the cost of 1 apple?"

print(extract_math_problem(question, context))  # Expected Output: '$2'
