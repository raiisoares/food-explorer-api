require("express-async-errors");
require("dotenv/config");
const AppError = require("./utils/AppError");
const { request, response, json } = require("express");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const uploadConfig = require("./configs/upload")

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", "https://foodexpweb.netlify.app"],
    credentials: true,
  })
);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use((error, request, response, next) => {
  if (error instanceof AppError)
    return response
      .status(error.statusCode)
      .json({ status: "Error", message: error.message });
  else
    return response
      .status(500)
      .json({ status: "Error", message: "Internal server error!" });
});
