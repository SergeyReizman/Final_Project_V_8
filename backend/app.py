from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields, ValidationError
import os  # Add this line to import the 'os' module

# Create a Flask app instance
app = Flask(__name__)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'  # SQLite database file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Enable CORS for all routes
CORS(app)

# Define models for Customer, Account, and Transaction
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    balance = db.Column(db.Float, default=0)

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    action = db.Column(db.String(20), nullable=False)

# Define schemas for input validation using Marshmallow
class CustomerSchema(Schema):
    name = fields.String(required=True)

class AccountSchema(Schema):
    customer_id = fields.Integer(required=True)
    balance = fields.Float(required=True)

class TransactionSchema(Schema):
    account_id = fields.Integer(required=True)
    amount = fields.Float(required=True)
    action = fields.String(required=True)

customer_schema = CustomerSchema()
account_schema = AccountSchema()
transaction_schema = TransactionSchema()

# Endpoint to get the list of customers
@app.route('/api/customers', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    customers_list = [{"id": customer.id, "name": customer.name} for customer in customers]
    
    # Print customers to the console
    print("List of Customers:", customers_list)
    
    return jsonify(customers_list)

# Endpoint to create a new customer
@app.route('/api/customers', methods=['POST'])
def create_customer():
    try:
        new_customer_data = request.get_json()

        # Validate input data using the schema
        errors = customer_schema.validate(new_customer_data)
        if errors:
            return jsonify({"error": f"Input validation failed: {errors}"}), 400

        new_customer = Customer(name=new_customer_data.get('name'))
        db.session.add(new_customer)
        db.session.commit()
        
        # Print customer creation to the console
        print("Customer created successfully")
        
        return jsonify({"message": "Customer created successfully"})
    except ValidationError as e:
        return jsonify({"error": f"Failed to create customer: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Failed to create customer: {str(e)}"}), 400

# Endpoint to update a customer
@app.route('/api/customers/<int:customer_id>', methods=['PUT'])
def update_customer(customer_id):
    try:
        updated_customer_data = request.get_json()
        customer = Customer.query.get(customer_id)

        if customer:
            # Validate input data using the schema
            errors = customer_schema.validate(updated_customer_data)
            if errors:
                return jsonify({"error": f"Input validation failed: {errors}"}), 400

            customer.name = updated_customer_data.get('name')
            db.session.commit()
            
            # Print customer update to the console
            print("Customer updated successfully")
            
            return jsonify({"message": "Customer updated successfully"})
        else:
            return jsonify({"error": "Customer not found"}), 404
    except ValidationError as e:
        return jsonify({"error": f"Failed to update customer: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Failed to update customer: {str(e)}"}), 400

# Endpoint to delete a customer
@app.route('/api/customers/<int:customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    try:
        customer = Customer.query.get(customer_id)

        if customer:
            db.session.delete(customer)
            db.session.commit()
            
            # Print customer deletion to the console
            print("Customer deleted successfully")
            
            return jsonify({"message": "Customer deleted successfully"})
        else:
            return jsonify({"error": "Customer not found"}), 404
    except Exception as e:
        return jsonify({"error": f"Failed to delete customer: {str(e)}"}), 400

# Endpoint to get the list of accounts
@app.route('/api/accounts', methods=['GET'])
def get_accounts():
    accounts = Account.query.all()
    accounts_list = [{"id": account.id, "customer_id": account.customer_id, "balance": account.balance} for account in accounts]
    
    # Print accounts to the console
    print("List of Accounts:", accounts_list)
    
    return jsonify(accounts_list)

# Endpoint to create a new account
@app.route('/api/accounts', methods=['POST'])
def create_account():
    try:
        new_account_data = request.get_json()

        # Validate input data using the schema
        errors = account_schema.validate(new_account_data)
        if errors:
            return jsonify({"error": f"Input validation failed: {errors}"}), 400

        new_account = Account(customer_id=new_account_data.get('customer_id'), balance=new_account_data.get('balance'))
        db.session.add(new_account)
        db.session.commit()
        
        # Print account creation to the console
        print("Account created successfully")
        
        return jsonify({"message": "Account created successfully"})
    except ValidationError as e:
        return jsonify({"error": f"Failed to create account: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Failed to create account: {str(e)}"}), 400

# Endpoint to update an account
@app.route('/api/accounts/<int:account_id>', methods=['PUT'])
def update_account(account_id):
    try:
        updated_account_data = request.get_json()
        account = Account.query.get(account_id)

        if account:
            # Validate input data using the schema
            errors = account_schema.validate(updated_account_data)
            if errors:
                return jsonify({"error": f"Input validation failed: {errors}"}), 400

            account.customer_id = updated_account_data.get('customer_id')
            account.balance = updated_account_data.get('balance')
            db.session.commit()
            
            # Print account update to the console
            print("Account updated successfully")
            
            return jsonify({"message": "Account updated successfully"})
        else:
            return jsonify({"error": "Account not found"}), 404
    except ValidationError as e:
        return jsonify({"error": f"Failed to update account: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Failed to update account: {str(e)}"}), 400

# Endpoint to delete an account
@app.route('/api/accounts/<int:account_id>', methods=['DELETE'])
def delete_account(account_id):
    try:
        account = Account.query.get(account_id)

        if account:
            db.session.delete(account)
            db.session.commit()
            
            # Print account deletion to the console
            print("Account deleted successfully")
            
            return jsonify({"message": "Account deleted successfully"})
        else:
            return jsonify({"error": "Account not found"}), 404
    except Exception as e:
        return jsonify({"error": f"Failed to delete account: {str(e)}"}), 400

# Endpoint to get the list of transactions
@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    transactions_list = [{"id": transaction.id, "account_id": transaction.account_id, "amount": transaction.amount, "action": transaction.action} for transaction in transactions]
    
    # Print transactions to the console
    print("List of Transactions:", transactions_list)
    
    return jsonify(transactions_list)

# Endpoint to create a new transaction
@app.route('/api/transactions', methods=['POST'])
def create_transaction():
    try:
        new_transaction_data = request.get_json()

        # Validate input data using the schema
        errors = transaction_schema.validate(new_transaction_data)
        if errors:
            return jsonify({"error": f"Input validation failed: {errors}"}), 400

        new_transaction = Transaction(account_id=new_transaction_data.get('account_id'), amount=new_transaction_data.get('amount'), action=new_transaction_data.get('action'))
        db.session.add(new_transaction)
        db.session.commit()
        
        # Print transaction creation to the console
        print("Transaction created successfully")
        
        return jsonify({"message": "Transaction created successfully"})
    except ValidationError as e:
        return jsonify({"error": f"Failed to create transaction: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Failed to create transaction: {str(e)}"}), 400

# Endpoint to update a transaction
@app.route('/api/transactions/<int:transaction_id>', methods=['PUT'])
def update_transaction(transaction_id):
    try:
        updated_transaction_data = request.get_json()
        transaction = Transaction.query.get(transaction_id)

        if transaction:
            # Validate input data using the schema
            errors = transaction_schema.validate(updated_transaction_data)
            if errors:
                return jsonify({"error": f"Input validation failed: {errors}"}), 400

            transaction.account_id = updated_transaction_data.get('account_id')
            transaction.amount = updated_transaction_data.get('amount')
            transaction.action = updated_transaction_data.get('action')
            db.session.commit()
            
            # Print transaction update to the console
            print("Transaction updated successfully")
            
            return jsonify({"message": "Transaction updated successfully"})
        else:
            return jsonify({"error": "Transaction not found"}), 404
    except ValidationError as e:
        return jsonify({"error": f"Failed to update transaction: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Failed to update transaction: {str(e)}"}), 400

# Endpoint to delete a transaction
@app.route('/api/transactions/<int:transaction_id>', methods=['DELETE'])
def delete_transaction(transaction_id):
    try:
        transaction = Transaction.query.get(transaction_id)

        if transaction:
            db.session.delete(transaction)
            db.session.commit()
            
            # Print transaction deletion to the console
            print("Transaction deleted successfully")
            
            return jsonify({"message": "Transaction deleted successfully"})
        else:
            return jsonify({"error": "Transaction not found"}), 404
    except Exception as e:
        return jsonify({"error": f"Failed to delete transaction: {str(e)}"}), 400

# Run the Flask app if this script is executed directly
if __name__ == '__main__':
    # Create the SQLite database file if it doesn't exist
    # Ensure that the SQLite database file is created before attempting to create the database tables.
    db_uri = app.config['SQLALCHEMY_DATABASE_URI']
    if db_uri.startswith('sqlite:///'):
        db_path = db_uri[len('sqlite:///'):]
        if not os.path.exists(db_path):
            open(db_path, 'w').close()

    # Create database tables before running the app
    with app.app_context():
        db.create_all()

    # Run the Flask app on port 5000 in debug mode
    app.run(port=5000, debug=True)

