from flask import Flask, request, jsonify, redirect, url_for, render_template, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
import sqlite3


from models import User,  Posts, Comment, db


app = Flask(__name__)
app.secret_key = '12345'

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
@app.route("/login", methods=["GET","POST"])
def login():
      if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Check credentials against database
        if verify_credentials(username, password):
            # Store user session
            session['username'] = username
            # Redirect to home page
            return redirect(url_for('home'))
        else:
            # Invalid credentials, display error message
            error = 'Invalid username or password'
            return render_template('login.html', error=error)
    
      return render_template('Login.jsx')

def verify_credentials(username, password):
    # Connect to your SQL database and verify credentials
    # This is a basic example using SQLite
    conn = sqlite3.connect('your_database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()
    conn.close()
    return user is not None

if __name__ == '__main__':
    app.run(debug=True)

