
from flask import request, jsonify
from .models import db, User

def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])
