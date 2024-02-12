from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource


from models import User, db, Users


app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, welcome to the login page</p>"


# @app.route("/login", methods=["POST"])
# def login():
#     email = request.json["email"]
#     password = request.json["password"]

#     return jsonify({
#         "id":"1",
#         "email": "gabrielle@email.com"
#     })
@app.route("/login", methods=["POST"])
def login():
    try:
        email = request.json["email"]
        password = request.json["password"]
        
        # Perform authentication logic here
        
        # Dummy response for demonstration purposes
        return jsonify({
            "success": True,
            "message": "Login successful",
            "email": email
        }), 200
    except KeyError:
        return jsonify({
            "success": False,
            "message": "Missing email or password field"
        }), 400
    except Exception as e:
        return jsonify({
            "success": False,
            "message": "An error occurred: {}".format(str(e))
        }), 500


if __name__ == '__main__':
    app.run(debug=True)

