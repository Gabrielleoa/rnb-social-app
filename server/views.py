from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Posts
from . import db
import json

views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST': 
        post = request.form.get('post')#Gets the note from the HTML 

        if len(post) < 1:
            flash('Post is too short!', category='error') 
        else:
            new_post = Posts(data=post, user_id=current_user.id)  #providing the schema for the note 
            db.session.add(new_post) #adding the note to the database 
            db.session.commit()
            flash('Post added!', category='success')

    return render_template("Post.jsx", user=current_user)


@views.route('/delete-post', methods=['POST'])
def delete_post():  
    post = json.loads(request.data) 
    postId = post['postId']
    post = Posts.query.get(postId)
    if post:
        if post.user_id == current_user.id:
            db.session.delete(post)
            db.session.commit()

    return jsonify({})