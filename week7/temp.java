class user{
    private String name;
    private int age;
    private String address;


public void setName(String newName){
    this.name = "hi" + newName;
}

public void  setAge(int newAge){
    if(age>18 && age<80)
    age = newAge;
    else system.out.printIn("hello");
}
}