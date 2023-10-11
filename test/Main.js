let hoan = new Student("hoan", 20, "male", "Ha Noi", "9000000");
let huong = new Student("huong", 19, "female", "Ha Noi", "8000000");
//doi ten
//hoan.name = "long";//cach 1
//hoan.setName("Long");//cach 2



let luan = new studentManagement();
luan.add(hoan);
luan.add(huong);
document.write(luan.totalStudent());
luan.delete("hoan");
document.write(luan.totalStudent());




