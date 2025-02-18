import applicantModel from "../model/applicant.model.js";

export default class ApplicantController {

    registerApplicant(req, res) {
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file);
        const jobId = req.body.jobId;
        console.log(jobId);
        const {name, email, contact} = req.body;
        const resume = "resume/" + req.filename;
        
        applicantModel.add(name, email, contact, resume);
        res.redirect("/jobList");
    }

    applicants(req, res) {
        const applicantsList = applicantModel.get();
        res.render("applicantsListPage", { applicantsList });
    }

}
