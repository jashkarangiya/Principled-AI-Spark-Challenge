from flask import Blueprint, jsonify
from services.data_store import load_curated_careers

careers_bp = Blueprint("careers", __name__)

@careers_bp.get("/careers")
def list_careers():
    return jsonify(load_curated_careers())
