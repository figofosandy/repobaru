package cobainterfaces;

public class MainLaporan implements InterfacesLaporan {
    public void cetakA3() {
        System.out.println("Mencetak Laporan A3");
    }
    public void cetakA4() {
        System.out.println("Mencetak Laporan A4");
    }
    public void cetakA5() {
        System.out.println("Mencetak Laporan A5");
    }
    public static void main(String args[]) {
        MainLaporan newLaporan = new MainLaporan();
        newLaporan.cetakA3();
        newLaporan.cetakA4();
        newLaporan.cetakA5();
    }
}