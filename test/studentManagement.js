class studentManagement {
    arrStudent;

    constructor() {
        this.arrStudent = [];

    }
    add(student) {
        this.arrStudent.push(student);
    }
    totalStudent() {
        return this.arrStudent.length;
    }
    delete(name) {
        let index = this.findStudentByName(name);
        if (index !== -1) {
        this.arrStudent.splice(index, 1);
        }
    }
    findStudentByName(name) {
        for (let i = 0; i < this.totalStudent(); i++) {
            if (this.arrStudent[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }
}