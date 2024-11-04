from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../frontend/mubak-ecomerce/dist', static_url_path='')

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
