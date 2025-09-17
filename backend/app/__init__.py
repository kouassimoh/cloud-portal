from flask import Flask
from flask_cors import CORS
from .routes import main_routes

def create_app():
    """
    Flask app factory.
    - Registers routes
    - Enables CORS for frontend integration
    """
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your-secret-key'

    # Allow frontend (React) to call backend
    CORS(app)

    # Register blueprint with routes
    app.register_blueprint(main_routes)

    return app
