require("dotenv").config();
const cookie = require("cookie-parser");
const express = require("express");
const app = express();
require("./services/dbService");
require("./models/relations");
const { errorHandler } = require("./Controllers/errorController");
const userRouter = require("./routes/userRoutes");
const playerRouter = require("./routes/gameRoutes/playerRoutes");
const enemyRouter = require("./routes/gameRoutes/enemyRoutes");
const residentRouter = require("./routes/gameRoutes/residentRoutes");
const marketRouter = require("./routes/gameRoutes/marketRoutes");
const buildingRouter = require("./routes/gameRoutes/buildingRoutes");
const toolRouter = require("./routes/gameRoutes/toolRoutes");
const questRouter = require("./routes/gameRoutes/questRoutes");
const swaggerFile = require("./swagger_output.json")
const swaggerUi = require("swagger-ui-express")

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile)
);


app.use(cookie());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  next();
});

app.use("/user", userRouter);
app.use("/:player_id/player", playerRouter);
app.use("/:player_id/enemies", enemyRouter);
app.use("/:player_id/residents", residentRouter);
app.use("/:player_id/buildings", buildingRouter);
app.use("/:player_id/tool", toolRouter);
app.use("/:player_id/quest", questRouter);
app.use("/market", marketRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server started at port " + process.env.PORT);
});