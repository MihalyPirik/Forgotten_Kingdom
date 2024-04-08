require("dotenv").config();
const cookie = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
require("./services/dbService");
require("./models/relations");
const { errorHandler } = require("./Controllers/errorController");
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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(cookie());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
    user: "misipirik@gmail.com", 
    pass: "Pmisip2001#", 
  },
});

app.post("/send-email", (req, res) => {
  const { from, subject, text } = req.body;

  const mailOptions = {
    from,
    to: "misipirik@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error: Email sending failed");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
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

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server started at port " + process.env.PORT || 3000);
});
