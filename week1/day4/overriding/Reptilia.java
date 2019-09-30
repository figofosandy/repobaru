package overriding;
public class Reptilia extends Binatang {
    @Override
    public void gerakBinatang() {
        nama="Reptilia";
        gerak="merayap";
    }
    @Override
    public void kembangBinatang() {
        nama="Reptilia";
        kembang="bertelur";
    }
}