import json
import os

def load_curated_careers():
    # backend/ -> repo root -> data/curated-careers.json
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    path = os.path.join(root, "data", "curated-careers.json")
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)
