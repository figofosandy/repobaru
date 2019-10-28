// pembuatan parent class
class Binatang {
    // definisi attribut
    String name;
    // definisi mettod
    void canEat(){    
        System.out.println(name+" can eat");
    }
}

// pembuatan child class
class Ikan extends Binatang {
    // constructor
    public Ikan(String name) {
        super.name=this.name;
        super.canEat();
        this.canDo();
    }
    // definisi method
    void canDo(){
        System.out.println(name+" can swimming");   
    }
};

// pembuatan child class
class Kucing extends Binatang {
    // constructor
    public Kucing(String name) {
        super.name=name;
        super.canEat();
        this.canDo();
    }
    //definisi method
    void canDo(){
        System.out.println(name+" can walking");   
    }
};



// pembuatan main class
public class App {
   public static void main(String[] args) {
       // instasiasi objek
       new Ikan("Ikan Koi");
       new Kucing("Tom");
   }
}


