const http = require('http');
const url = require('url');
const mysql = require('mysql');
const qs = require('querystring');

const con = mysql.createConnection({
    host: "localhost:3306",
    user: "workbench",
    password: "ninguna",
    database: "fullstack"
});

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let post = qs.parse(body);
            if (req.url === '/confData.js') {
                // Update user profile
                let sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
                let values = [post.name, post.email, post.password, post.id]; // Assuming you also send user id
                con.query(sql, values, (err, result) => {
                    if (err) throw err;
                    console.log("Number of records updated: " + result.affectedRows);
                });
            } else if (req.url === '/confDelete.js') {
                // Delete account
                let sql = "DELETE FROM users WHERE id = ?";
                let values = [post.id]; // Assuming you also send user id
                con.query(sql, values, (err, result) => {
                    if (err) throw err;
                    console.log("Number of records deleted: " + result.affectedRows);
                });
            }
            res.end('ok');
        });
    }
}).listen(3306);