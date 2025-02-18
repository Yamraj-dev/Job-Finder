// import {indexId} from "./applicant.model.js";

export default class JobsModel {
    constructor(_id, _category, _designation, _location, _companyName, _salary, _openings, _skills, _dmy, _applicant) {
        this.id = _id;
        this.category = _category;
        this.designation = _designation;
        this.locat = _location;
        this.companyName = _companyName;
        this.salary = _salary;
        this.openings = _openings;
        this.skills = _skills;
        this.dmy = _dmy;
        this.applicant = _applicant; 
    }

    static add(category, designation, locat, companyName, salary, openings, skills, dmy) {
        let newJob = new JobsModel(
            Jobs.length + 1,
            category,
            designation,
            locat,
            companyName,
            salary,
            openings,
            skills,
            dmy,
            // indexId
        );
        Jobs.push(newJob);
    }

    static get() {
        return Jobs;
    }

    static getById(id) {
        return Jobs.find((j) => j.id == id);
    }
}

var Jobs = [
    new JobsModel(
        1, "Tech", "SDE", "Gurgaon HR IND Remote", "Coding Ninjas", "14-20lpa", 5, ["React", "NodeJs", "JS", "SQL", "Mongo DB", "Express", "AWS"], Date.UTC(2024, 8, 30), 1
    ),
    new JobsModel(
        2, "Non-Tech", "HR", "Mumbai Maharashtra andheri (E)", "Lodha Enterprises", "14lpa", 5, ["React", "NodeJs", "JS", "SQL", "Mongo DB", "Express", "AWS"], Date.UTC(2024, 6, 29), 1
    ),
    new JobsModel(
        3, "Tech", "DevOps", "Pune Maharashtra pimpri chincvad", "BMC Software", "25lpa", 5, ["React", "NodeJs", "JS", "SQL", "Mongo DB", "Express", "AWS"], Date.UTC(2024, 8, 3), 1
    ),
];
