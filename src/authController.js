const dotenv=require("dotenv");
dotenv.config();
const jwt=require("jsonwebtoken");
const users = []; // temporary storage

exports.register = (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    users.push({ username, password });

    res.json({ message: "User registered successfully" });
};
exports.verifyToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};
exports.login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { username },
        process.env.jwtSecret,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token
    });
};