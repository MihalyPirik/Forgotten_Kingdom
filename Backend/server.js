require("dotenv").config();
const cookie = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
require("./services/dbService");
require("./models/relations");
const { errorHandler } = require("./controllers/errorController");
const swaggerFile = require("./swagger_output.json");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const userRouter = require("./routes/userRoutes");
const playerRouter = require("./routes/gameRoutes/playerRoutes");
const enemyRouter = require("./routes/gameRoutes/enemyRoutes");
const residentRouter = require("./routes/gameRoutes/residentRoutes");
const marketRouter = require("./routes/gameRoutes/marketRoutes");
const toolRouter = require("./routes/gameRoutes/toolRoutes");
const questRouter = require("./routes/gameRoutes/questRoutes");
const enemyTypeRouter = require('./routes/gameRoutes/enemyTypeRoutes')

// const https = require('https');
// const fs = require('fs');

// const certDir = `/etc/letsencrypt/live`;
// const domain = `bgs.jedlik.eu`;
// const options = { key: fs.readFileSync(`${certDir}/${domain}/privkey.pem`), cert: fs.readFileSync(`${certDir}/${domain}/fullchain.pem`) };

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(cookie());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "", // email
    pass: "", // kulcs
  },
  secure: true,
});

app.post("/send-email", (req, res) => {
  const { from, subject, text } = req.body;

  const mailOptions = {
    from: from,
    to: "", // email
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("A report nem került elküldésre!");
    }
    res.status(200).send("Sikeres report küldése!");
  });
});

app.use(
  "/user",
  userRouter
  // #swagger.tags = ['User']
);
app.use(
  "/player",
  playerRouter
  // #swagger.tags = ['Player']
  /* #swagger.security = [{
            "bearerAuth": []
    }] */
);
app.use(
  "/enemies",
  enemyRouter
  // #swagger.tags = ['Enemy']
);
app.use(
  "/residents",
  residentRouter
  // #swagger.tags = ['Resident']
);
app.use(
  "/tool",
  toolRouter
  // #swagger.tags = ['Tool']
);
app.use(
  "/quest",
  questRouter
  // #swagger.tags = ['Quest']
);
app.use(
  "/market",
  marketRouter
  // #swagger.tags = ['Market']
);
app.use(
  "/enemyType",
  enemyTypeRouter
  // #swagger.tags = ['EnemyType']
)
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server started at port " + process.env.PORT || 3000);
});

// https.createServer(options, app).listen(8100)