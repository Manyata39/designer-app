from flask import Flask, jsonify, request
from flask_cors import CORS
from data import designers

app = Flask(__name__)
CORS(app)
# Get all designers
@app.route('/api/designers', methods=['GET'])
def get_designers():
    return jsonify(designers)

# Toggle shortlist status
@app.route('/api/designers/<int:designer_id>/shortlist', methods=['POST'])
def toggle_shortlist(designer_id):
    for designer in designers:
        if designer['id'] == designer_id:
            designer['isShortlisted'] = not designer['isShortlisted']
            return jsonify({'success': True, 'isShortlisted': designer['isShortlisted']})
    return jsonify({'error': 'Designer not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)