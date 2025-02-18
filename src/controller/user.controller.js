import UserModle from "../model/user.model.js"
import { User } from "../model/user.model.js";

export default class UserController {
    interface(req, res) {
        res.render("landingPage")
    }

    getLogin(req, res) {
        res.render("loginPage");
    }

    postRegister(req, res) {
        const {name, email, password} = req.body;
        UserModle.add(name, email, password);
        console.log(User);
        res.render("loginPage");
    }
    
    postLogin(req,res) {
        const {email, password} = req.body;
        const user = UserModle.isValid(email, password);
        if(!user) {
            return res.render("404Page", {errorMessage: "Invalid Credentials"})
        }
        req.session.userEmail = email;
        req.session.userName = user.name;
        console.log("Session Data:", req.session.userEmail, req.session.userName);
        return res.render("landingPage", {userEmail: req.session.userEmail, userName: req.session.userName});
    }

    logout(req, res) {
        // Destroy the session
        req.session.destroy((err) => {
            if (err) {
                return res.render("404Page" , { errorMessage: err }); 
            }
            res.redirect("/");
        });
    }
}