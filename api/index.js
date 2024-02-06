import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import projectRoutes from "./routes/projects.js";
import facultyRoutes from "./routes/faculties.js";
import dashboardRoutes from "./routes/dashboards.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/faculties", facultyRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
