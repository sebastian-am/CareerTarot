from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/llm/generate-insight', methods=['POST'])
def generate_insight():
    data = request.json
    prompt = data.get('prompt')
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400
    model = genai.GenerativeModel('models/gemini-2.0-flash')
    response = model.generate_content(prompt)
    return jsonify({'insight': response.text})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001) 