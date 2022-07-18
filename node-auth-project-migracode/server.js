const express = require("express");

const cors = require("cors");
const app = express();
const user = require("./routes/user");

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/", () => {
  res.json({ message: "Welcome to Migracode" });
});

const PORT = process.env.PORT || 4000;

app.use("/user", user);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
