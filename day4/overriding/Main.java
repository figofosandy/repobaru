package overriding;
public class Main {
    public static void main(String args[]) {
        Mamalia newMamalia= new Mamalia();
        newMamalia.gerakBinatang();
        newMamalia.kembangBinatang();
        newMamalia.outputGerak();
        newMamalia.outputKembang();
        Reptilia newReptilia = new Reptilia();
        newReptilia.gerakBinatang();
        newReptilia.kembangBinatang();
        newReptilia.outputGerak();
        newReptilia.outputKembang();
    }
}