import express from "express"; 
import AuthRoute from "./routes/auth.js";
import ToDoRoute from "./routes/todo.js"; // Corrected the path

const app = express(); 
const PORT = 3000; 

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/user", AuthRoute);
app.use("/api/todos", ToDoRoute);

// Root route
app.get("/", (req, res) => {
    res.send("hello world");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});