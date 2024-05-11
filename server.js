const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); // para acceder al body
app.use(express.json());

// Routes

const loginRouter = require("./routes/login");
const protected = require("./routes/protected");





app.use("/login", loginRouter);
app.use(logger);

app.use("/protected", protected);
app.use(logger);

//imprime la ruta en la consola


// URL - Callback
app.get("/", logger, (req, res) => {
  res.send("Im working :)");
});

// MiddlewareS
//imprime la URL original 
function logger(req, res, next) {
  console.log(req.originalUrl + "from logger");
  next();
}


app.listen(3010, () => {
  console.log("Server running on port 3000");
});
module.exports = app; 

