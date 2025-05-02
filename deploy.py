from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# --- Load model saat server mulai ---
with open(r'C:\Users\Administrator\Documents\Project(Projek)\Machine-Learning\model_GBR.pkl', 'rb') as file:
    model = pickle.load(file)

# --- Route untuk homepage ---
@app.route('/')
def home():
    return "Welcome! Flask server is running. Use /predict to send data."

# --- Route untuk prediksi ---
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Ambil data JSON dari request
        data = request.get_json()

        # Misal kamu expect data dalam bentuk list of features
        features = np.array(data['data']).reshape(1, -1)

        # Prediksi
        prediction = model.predict(features)

        # Kirim hasil
        return jsonify({
            'prediction': prediction.tolist()  # Ubah ke list supaya JSON serializable
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
