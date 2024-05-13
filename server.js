const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // para acceder al body
app.use(express.json());

// Routes

const loginRouter = require("./routes/login");
const formRouter = require("./routes/form");
const profileRouter = require("./routes/profile");
const contactsRouter = require("./routes/contacts");
const protected = require("./routes/protected");

app.use("/login", loginRouter);
app.use(logger);

app.use("/form", formRouter);
app.use(logger);

app.use("/profile", profileRouter);
app.use(logger);

app.use("/contacts", contactsRouter);
app.use(logger);

app.use("/protected", protected);
app.use(logger);

// Callback

app.get("/", logger, (req, res) => {
  res.send("Im working :)");
});

// MiddlewareS
// Imprime la URL original 

function logger(req, res, next) {
  console.log(req.originalUrl + "from logger");
  next();
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
module.exports = app; 