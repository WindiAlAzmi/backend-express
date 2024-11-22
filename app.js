require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

const allRoutes = require("./routes");
const db = require("./db");

db.then(() => {
  console.info("Berhasil connect ke database");
}).catch((error) => {
  console.error("Gagal connect ke database", { error: error.message });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRoutes);

app.listen(PORT, () => {
 console.info(`Server running on PORT ${PORT}`);
});
