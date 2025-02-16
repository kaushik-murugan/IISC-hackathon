import easyocr

reader = easyocr.Reader(['en'])  # Load OCR model
text = reader.readtext("math_problem.png", detail=0)  # Extract text
print("\n".join(text))  # Print detected text
