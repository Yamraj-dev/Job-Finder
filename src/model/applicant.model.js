export default class applicantModel {
    constructor(_id, _name, _email, _contact, _resume) {
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.contact = _contact;
        this.resume = _resume;
    }

    static add(name, email, contact, resume) {
        let newApplicant = new applicantModel(applicants.length + 1, name, email, contact, resume);
        applicants.push(newApplicant);
    }

    static get() {
        return applicants;
    }

    static getById(id) {
        return applicants.find((a) => a.id == id);
    }
}

// export let indexId = applicants.length - 1;

export var applicants = [
    new applicantModel(
        1, "prathamesh", "prathamesh@gmail.com", 9112345678, "resume/resume.pdf"
    )
];
