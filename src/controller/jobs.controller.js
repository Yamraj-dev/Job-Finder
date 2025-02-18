import JobsModel from "../model/jobs.model.js"

export default class JobsController {
    get(req, res) {
        let jobs = JobsModel.get();
        res.render("jobListingPage", {jobs, userEmail: req.session.userEmail, userName: req.session.userName});
    }

    details(req, res) {
        const id = req.params.id;
        const jobdetail = JobsModel.getById(id);
        if(jobdetail){
            return res.render("jobDetailsPage", {job: jobdetail, userEmail: req.session.userEmail, userName: req.session.userName});
        }else{
            return res.render("404Page", {errorMessage: "job not found"});
        }   
    }

    create(req, res) {
        res.render("newJobPage");
    }

    postCreate(req, res) {
        const { category, designation, locat, companyName, salary, openings, dmy } = req.body;
        const skills = Array.isArray(req.body.skills) ? req.body.skills : [req.body.skills];
        JobsModel.add(category, designation, locat, companyName, salary, openings, skills, dmy);
        const jobs = JobsModel.get();
        res.render("jobListingPage", { jobs, userEmail: req.session.userEmail, userName: req.session.userName });
    }
    

    update(req,res) {
        const id = req.params.id;
        const jobFound = JobsModel.getById(id);
        if(jobFound) {
            res.render("updateJobPage", {jobs : jobFound, userEmail: req.session.userEmail, userName: req.session.userName});
        }else {
            res.render("404Page", {errorMessage: "Job not found",  userEmail: req.session.userEmail, userName: req.session.userName});
        }
    }

    postUpdate(req, res) {
        const {category, designation, locat, companyName, salary, openings, skills, dmy} = req.body;
        JobsModel.add(category, designation, locat, companyName, salary, openings, skills, dmy);
        let jobs = JobsModel.get();
        res.render("jobListingPage", {jobs, userEmail: req.session.userEmail, userName: req.session.userName})
    }
}   