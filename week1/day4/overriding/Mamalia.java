package overriding;
public class Mamalia extends Binatang {
    @Override
    public void gerakBinatang() {
        nama="Mamalia";
        gerak="berjalan";
    }
    @Override
    public void kembangBinatang() {
        nama="Mamalia";
        kembang="melahirkan";
    }
}