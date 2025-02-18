import { body, validationResult } from "express-validator";

const formValidation = async (req, res, next) => {
    console.log(req.body);

    const rules = [
        body("name").isEmpty().withMessage("Name is requierd"),
        body("email").isEmail().withMessage("Enter a valid Email"),
        body("contact").isNumeric().withMessage("Enter a valid Phone Number"),
        body("filename").custom((value, {req})=> {
            if(!req.file) {
                throw new Error("Resume is required");
            }else{
                return true;
            }
        }),
    ];

    await Promise.all(rules.map((rule)=> rule.run(req)));

    var validationError = validationResult(req);
    console.log(validationError);

    if(!validationError.isEmpty()){
        return res.render("404Page", {errorMeessage: validationError.array()[0].msg, user: null});
    }
    
}