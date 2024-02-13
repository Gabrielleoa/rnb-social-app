from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from sqlalchemy.sql import func
# from sqlalchemy.orm import DeclarativeBase

# class Base(DeclarativeBase):
#     pass

db= SQLAlchemy()

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(25), unique= True, nullable=False)
    password = db.Column(db.String(30), unique=True, nullable=False)
    email =db.Column(db.String, unique=True)
    posts = db.relationship('Posts')
    comments = db.relationship('Comment')

class Posts(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    post_content= db.Column(db.String)
    user_id= db.Column(db.Integer, db.ForeignKey('user.id'))
    date = db.Column(db.DateTime(timezone=True), default=func.now())

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String)
    user_id =  db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    posts_id= db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('posts'))
    posts= db.relationship("Posts", backref=db.backref('comments'))
    
