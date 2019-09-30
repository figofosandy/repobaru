package cobastatic;

public class PanggilStatic {
    public static void main(String args[]) {
        CobaStatic.tulisan();
        System.out.println("Panjang = "+CobaStatic.panjang);
        System.out.println("Lebar = "+CobaStatic.lebar);
        System.out.println(CobaStatic.tambah(7, 9));
        System.out.println(CobaStatic.tambah());
    }
}