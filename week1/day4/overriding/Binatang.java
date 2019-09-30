package overriding;

public class Binatang {
    String nama,gerak,kembang;

    public void gerakBinatang() {
        nama="";
        gerak="";
    }
    
    public void kembangBinatang() {
        nama="";
        kembang="";
    }

    public void outputGerak() {
        System.out.println(nama + " bergerak dengan "+gerak);
    }

    
    public void outputKembang() {
        System.out.println(nama + " berkembang biak dengan "+kembang);
    }
}

