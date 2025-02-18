// imports 
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session"; 
import dotenv from "dotenv";

dotenv.config();

// controllers  
import UserController from "./src/controller/user.controller.js";
import JobsController from "./src/controller/jobs.controller.js";
import { attachSessionData } from "./src/middlewares/sessionData.js";
import {upload} from "./src/middlewares/fileUpload.middleware.js";
import ApplicantController from "./src/controller/applicant.controller.js";

// server created
const app = express();
const userController = new UserController();
const jobController = new JobsController();
const applicantController = new ApplicantController();

// Middlewares for server
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
app.use(attachSessionData);

// root route
app.get("/", userController.interface);

// Auth routes
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);
app.post("/register", userController.postRegister);
app.get("/logout", userController.logout);

// job routes
app.get("/jobList", jobController.get);
app.get("/jobdetails/:id", jobController.details);
app.get("/createJob", jobController.create);
app.post("/createJob", jobController.postCreate);
app.get("/updateJob/:id");

// applicant routes
app.post("/registerApplicant", upload.single("resume"), applicantController.registerApplicant);
app.get("/applicants", applicantController.applicants);

const PORT = process.env.PORT || 3000;

// server listening 
app.listen(PORT, () => {
    console.log("Server is listening at 3000");
});
