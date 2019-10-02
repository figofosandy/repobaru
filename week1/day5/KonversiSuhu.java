import java.util.Arrays;
import java.util.Scanner;
import java.text.DecimalFormat;

public class KonversiSuhu {
    private String suhuAwal, suhuAkhir;
    private double nilaiAwal, nilaiAkhir;
    private String[] celcius = new String[] {"c","ce","cel","celc","celci","celciu","celcius"};
    private String[] reamur = new String[] {"r","re","rea","ream","reamu","reamur"};
    private String[] farenheit = new String[] {"f","fa","far","fare","faren","farenh","farenhe","farenhei","farenheit"};
    private boolean celciusBoolean=Arrays.asList(celcius).stream().anyMatch(x->x.equalsIgnoreCase(suhuAwal));
    private boolean reamurBoolean=Arrays.asList(reamur).stream().anyMatch(x->x.equalsIgnoreCase(suhuAwal));
    private boolean farenheitBoolean=Arrays.asList(farenheit).stream().anyMatch(x->x.equalsIgnoreCase(suhuAwal));
    public KonversiSuhu(String suhuAwal, String suhuAkhir, double nilaiAwal) {
        this.suhuAwal=suhuAwal;
        this.suhuAkhir=suhuAkhir;
        this.nilaiAwal=nilaiAwal;
        konversi();
        output();
    }
    public double konversi() {
        if(celciusBoolean) {
            if(celciusBoolean) {
                return nilaiAkhir=nilaiAwal;
            }
            else if(reamurBoolean) {
                return nilaiAkhir=nilaiAwal*4/5;
            }
            else if(farenheitBoolean) {
                return nilaiAkhir=(nilaiAwal*9/5)+32;
            }
            else {
                return nilaiAkhir=0;
            }
        }
        else if(reamurBoolean) {
            if(celciusBoolean) {
                return nilaiAkhir=nilaiAwal*5/4;
            }
            else if(reamurBoolean) {
                return nilaiAkhir=nilaiAwal;
            }
            else if(farenheitBoolean) {
                return nilaiAkhir=(nilaiAwal*9/4)+32;
            }
            else {
                return nilaiAkhir=0;
            }
        }
        else if(farenheitBoolean) {
            if(celciusBoolean) {
                return nilaiAkhir=(nilaiAwal-32)*5/9;
            }
            else if(reamurBoolean) {
                return nilaiAkhir=(nilaiAwal-32)*4/9;
            }
            else if(farenheitBoolean) {
                return nilaiAkhir=nilaiAwal;
            }
            else {
                return nilaiAkhir=0;
            }
        }
        else {
            return nilaiAkhir=0;
        }
    }
    public void output() {
        DecimalFormat df2=new DecimalFormat("#.##");
        System.out.println("Hasil Konversi : "+df2.format(nilaiAkhir)+" "+suhuAkhir);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Masukkan suhu awal(celcius/reamur/farenheit) : ");
        String shAwal=sc.nextLine();
        System.out.print("Masukkan suhu akhir(celcius/reamur/farenheit) : ");
        String shAkhir=sc.nextLine();
        System.out.print("Masukkan Nilai awal : ");
        Double nlAwal=sc.nextDouble();
        new KonversiSuhu(shAwal, shAkhir, nlAwal);
        sc.close();
    }
}