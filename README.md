# My Lifestyle Blog

A full-stack blog application where you can create, view, and delete blog posts. Built with Node.js, Express, MySQL, and vanilla JavaScript/CSS for the frontend.

## Features
- Create new blog posts
- View featured and all posts on the home page
- View all posts on a dedicated page
- Read full post details
- Delete any post
- Responsive, modern UI
- Social links and subscribe button in the header

## Folder Structure
```
BLOG/
├── backend/           # Express backend and database connection
│   ├── db.js
│   ├── routes/
│   │   └── posts.js
│   └── server.js
├── frontend/          # Static frontend files
│   ├── index.html
│   ├── all-posts.html
│   ├── create.html
│   ├── post.html
│   └── style.css
├── package.json       # Project dependencies
└── README.md          # This file
```

## Prerequisites
- Node.js (v16+ recommended)
- MySQL server

## Setup Instructions

### 1. Clone the Repository
```
git clone <your-repo-url>
cd BLOG
```

### 2. Install Backend Dependencies
```
cd backend
npm install
```

### 3. Configure the Database
- Create a MySQL database named `blog_site`.
- Create a `posts` table with the following structure:

```sql
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
- Set your MySQL credentials in a `.env` file in the `backend/` folder:

```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=blog_site
```

### 4. Start the Backend Server
```
node server.js
```
The server will run on `http://localhost:3000`.

### 5. Open the Frontend
- Open `frontend/index.html` in your browser.
- You can also open `all-posts.html` and `create.html` directly.

## Usage
- **Create Post:** Go to Create Post, fill in the form, and submit.
- **View Posts:** Posts appear on the home page and All Posts page.
- **Read More:** Click to view full post details.
- **Delete:** Use the delete button to remove a post.

## Customization
- Update your social links in the header in `index.html`.
- Adjust styles in `style.css` as needed.

## License
do not use it without my knowledge
