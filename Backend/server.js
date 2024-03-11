require("dotenv").config();
const cookie = require("cookie-parser");
const express = require("express");
const cors = require('cors');
const app = express();
require("./services/dbService");
require("./models/relations");
const { errorHandler } = require("./controllers/errorController");
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

app.use(cors());
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

app.use("/user", userRouter
// #swagger.tags = ['User']
);
app.use("/player", playerRouter
// #swagger.tags = ['Player']
/* #swagger.security = [{
            "bearerAuth": []
    }] */
);
app.use("/enemies", enemyRouter
// #swagger.tags = ['Enemy']
);
app.use("/residents", residentRouter
// #swagger.tags = ['Resident']
);
app.use("/buildings", buildingRouter
// #swagger.tags = ['Building']
);
app.use("/tool", toolRouter
// #swagger.tags = ['Tool']
);
app.use("/quest", questRouter
// #swagger.tags = ['Quest']
);
app.use("/market", marketRouter
// #swagger.tags = ['Market']
);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server started at port " + process.env.PORT || 3000);
});