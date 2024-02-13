from random import choice as rc

from faker import Faker

from app import app
from models import db, Posts

fake = Faker()

usernames = [fake.first_name() for i in range(4)]
if "Duane" not in usernames:
    usernames.append("Duane")

def make_post():

    Posts.query.delete()
    
    posts = []

    for i in range(20):
        post = Posts(
            body=fake.sentence(),
            username=rc(usernames),
        )
        posts.append(post)

    db.session.add_all(posts)
    db.session.commit()        

if __name__ == '__main__':
    with app.app_context():
        make_post()
