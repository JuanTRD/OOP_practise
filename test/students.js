class Student {
    //thuoc tinh
    name;
    age;
    gender;
    address;
    phone;
    constructor(name, age, gender, address, phone) {
        //gan gia tri tham so cho thuoc tinh
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
    }

    //phuong thuc
    getInfo() {
        return " name: " + this.name +
                " age: " + this.age +
                " gender: " + this.gender +
                " address: " + this.address +
                " phone: " + this.phone;

    }
    setName(newName) {
        this.name = newName;
    }

    getName() {
        return this.name;
    }
}