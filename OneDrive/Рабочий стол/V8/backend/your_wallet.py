# This code sets up a simple Flask application with a RESTful API for user-related operations. 
# The application uses Flask, Flask-Restful, and 
# Flask-SQLAlchemy to create a basic wallet app with 
# user registration and retrieval of user information.

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from werkzeug.security import generate_password_hash, check_password_hash

# Create a Flask application
app = Flask(__name__)

# Configure the SQLAlchemy database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wallet.db'

# Create an instance of the SQLAlchemy database
db = SQLAlchemy(app)

# Create an instance of the Flask-Restful API
api = Api(app)

# Define a User model for the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    balance = db.Column(db.Float, default=0.0)

# Define a resource for handling user-related operations
class UserResource(Resource):
    def get(self, user_id):
        # Retrieve user information by user ID
        user = User.query.get(user_id)
        if user:
            return {'id': user.id, 'username': user.username, 'balance': user.balance}
        else:
            return {'message': 'User not found'}, 404

    def post(self):
        # Retrieve user information from the request
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        # Hash the user's password before storing it in the database
        hashed_password = generate_password_hash(password, method='sha256')

        # Create a new user instance and add it to the database
        new_user = User(username=username, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'User created successfully'}, 201

# Add the UserResource to the API with endpoints for user operations
api.add_resource(UserResource, '/users', '/users/<int:user_id>')

# Add a simple route for the home page
@app.route('/')
def home():
    return 'Welcome to the Wallet App!'

# Ensure the application context is set up before running the app
with app.app_context():
    # Create the necessary database tables
    db.create_all()

# Run the application in debug mode
if __name__ == '__main__':
    app.run(debug=True)
