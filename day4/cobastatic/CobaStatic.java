package cobastatic;
class CobaStatic {
    static int panjang = 10;
    static int lebar = 9;

    static void tulisan() {
        System.out.println("Ini method diskses langsung");
    }

    static int tambah(int inputA, int inputB) {
        return inputA+inputB;
    }

    static int tambah() {
        return panjang+lebar;
    }
}