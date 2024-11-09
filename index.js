const express = require("express");
const {
  getDocs,
  collection,
  getDoc,
  doc,
  addDoc,
} = require("firebase/firestore");
const { db } = require("./firebase.config");

const app = express();
const PORT = process.env.NODE_ENV === "production" ? 8080 : 3000;

app.use(express.urlencoded({ extended: true }));

// Routes

// Get all users
app.get("/api/users/", async (req, res) => {
  const userSnap = getDocs(collection(db, "users"));

  return res.status(200).json((await userSnap).docs.map((doc) => doc.data()));
});

// Get user by ID
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await getDoc(doc(db, "users", id));

  if (!user.exists()) {
    return res.status(404).send("User not found.");
  } else {
    return res.status(200).json(user.data());
  }
});

// Create a new user
app.post("/api/users/", async (req, res) => {
  const { id, firstName, lastName, email } = req.body;

  await addDoc(collection(db, "users"), {
    id,
    firstName,
    lastName,
    email,
  });

  return res.status(200).json({ message: "User added successfully!!!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
