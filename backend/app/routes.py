from flask import Blueprint, jsonify, request
import uuid

main_routes = Blueprint("main", __name__)

# In-memory "database" example
applicants = []

@main_routes.route("/")
def home():
    """Root endpoint for testing."""
    return jsonify({"message": "Welcome to Cloud Portal API"})

@main_routes.route("/applicants", methods=["GET"])
def get_applicants():
    """Return all applicants"""
    return jsonify(applicants)

@main_routes.route("/applicants", methods=["POST"])
def add_applicant():
    """Add a new applicant"""
    data = request.json
    applicant = {
        "id": str(uuid.uuid4()),   # Unique ID
        "name": data.get("name"),
        "email": data.get("email")
    }
    applicants.append(applicant)
    return jsonify(applicant), 201
