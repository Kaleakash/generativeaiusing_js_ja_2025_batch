const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded

let users = []; // In-memory user store

// 1️⃣ Signup Route (POST /signup)
app.post("/signup", (req, res) => {
    const { emailid, password } = req.body;     
    console.log("signup method")
    console.log(emailid+" "+password);
    // Check if email already exists
    if (users.some(user => user.emailid === emailid)) {
        return res.status(400).json({ message: "User already exists!" });
    }

    // Store user data (in-memory)
    users.push({ emailid, password });
    res.status(201).json({ message: "Signup successful! You can now sign in." });
});

// 2️⃣ Signin Route (POST /signin)
app.post("/signin", (req, res) => {
    const { emailid, password } = req.body;
    console.log("signin method")
    console.log(emailid+" "+password);
    // Find user
    const user = users.find(user => user.emailid === emailid && user.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password!" });
    }

    res.send({ message: "Signin successful!", emailid });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
