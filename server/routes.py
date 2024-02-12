# routes.py
from flask import Blueprint
from .controllers import user_controller, doghouse_controller, review_controller

api = Blueprint('api', __name__)

# User routes
api.add_url_rule('/users', view_func=user_controller.get_users, methods=['GET'])

# DogHouse routes
api.add_url_rule('/doghouses', view_func=doghouse_controller.get_doghouses, methods=['GET'])

# Review routes
api.add_url_rule('/reviews', view_func=review_controller.create_review, methods=['POST'])

