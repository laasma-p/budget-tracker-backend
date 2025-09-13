const express = require("express");
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const budgetRoutes = require("./routes/budget-routes");
const transactionRoutes = require("./routes/transaction-routes");
const categoryRoutes = require("./routes/category-routes");

const app = express();

const PORT = 3000;

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/budget", budgetRoutes);
app.use("/transaction", transactionRoutes);
app.use("/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
