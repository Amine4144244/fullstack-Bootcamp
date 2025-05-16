from flask import Flask, request, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)

def get_connection():
    return psycopg2.connect(
        host="localhost",
        dbname="Users",
        user="postgres",  
        password="Amine@22",
    )


@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        name = data['name']
        email = data['email']

        conn = get_connection()
        cursor = conn.cursor()
        query = "INSERT INTO users (name, email) VALUES (%s, %s) RETURNING id;"
        cursor.execute(query, (name, email))
        user_id = cursor.fetchone()[0]
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "User added", "user_id": user_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------------------
# GET all users
@app.route('/users', methods=['GET'])
def get_all_users():
    try:
        conn = get_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM users;")
        users = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------------------
# GET one user by ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        conn = get_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM users WHERE id = %s;", (user_id,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()

        if user:
            return jsonify(user), 200
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------------------
# UPDATE a user
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        data = request.get_json()
        name = data['name']
        email = data['email']

        conn = get_connection()
        cursor = conn.cursor()
        query = "UPDATE users SET name = %s, email = %s WHERE id = %s;"
        cursor.execute(query, (name, email, user_id))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "User updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------------------
# DELETE a user
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        query = "DELETE FROM users WHERE id = %s;"
        cursor.execute(query, (user_id,))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "User deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
