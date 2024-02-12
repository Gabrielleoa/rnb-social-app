from flask_sqlalchemy import SQLAlchemy

db= SQLAlchemy

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(25), unique= True, nullable=False)
    password = db.Column(db.String(30), unique=True, nullable=False)

class Posts(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    post_content= db.Column(db.String)

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String)
    user_id =  db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    posts_id= db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('posts'))
    posts= db.relationship("Posts", backref=db.backref('comments'))
