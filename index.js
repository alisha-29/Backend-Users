const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [
        {
            "id": 1,
            "username": "user_one",
            "name": "Alice Smith",
            "repoCount": 12,
            "location": "New York, USA"
        },
        {
            "id": 2,
            "username": "user_two",
            "name": "Bob Johnson",
            "repoCount": 25,
            "location": "San Francisco, USA"
        },
        {
            "id": 3,
            "username": "user_three",
            "name": "Charlie Brown",
            "repoCount": 7,
            "location": "London, UK"
        },
        {
            "id": 4,
            "username": "user_four",
            "name": "Diana Prince",
            "repoCount": 20,
            "location": "Berlin, Germany"
        },
        {
            "id": 5,
            "username": "user_five",
            "name": "Ethan Hunt",
            "repoCount": 15,
            "location": "Sydney, Australia"
        }
    ];

    app.get("/users", (req, res) => {
        res.json({users});
    });

    app.get("/users/:id", (req, res) => {
        let userId = parseInt(req.params.id);
        let user = users.find((user) => user.id === userId);

        if(user){
            res.json({user})
        } else {
            res.status(404).json({ message : "User not found"})
        }
    });

    const PORT = 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });