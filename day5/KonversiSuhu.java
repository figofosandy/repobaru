import java.util.Scanner;

public class KonversiSuhu {
    private String suhuAwal, suhuAkhir;
    private double nilaiAwal, nilaiAkhir;
    public KonversiSuhu(String suhuAwal, String suhuAkhir, double nilaiAwal) {
        this.suhuAwal=suhuAwal;
        this.suhuAkhir=suhuAkhir;
        this.nilaiAwal=nilaiAwal;
        konversi();
        output();
    }
    public double konversi() {
        if(suhuAwal.equalsIgnoreCase("celcius")) {
            if(suhuAkhir.equalsIgnoreCase("celcius")) {
                return nilaiAkhir=nilaiAwal;
            }
            else if(suhuAkhir.equalsIgnoreCase("reamur")) {
                return nilaiAkhir=nilaiAwal*4/5;
            }
            else if(suhuAkhir.equalsIgnoreCase("farenheit")) {
                return nilaiAkhir=(nilaiAwal*9/5)+32;    
            }
            else {
                return nilaiAkhir=0;
            }
        }
        else if(suhuAwal.equalsIgnoreCase("reamur")) {
            if(suhuAkhir.equalsIgnoreCase("celcius")) {
                return nilaiAkhir=nilaiAwal*5/4;    
            }
            else if(suhuAkhir.equalsIgnoreCase("reamur")) {
                return nilaiAkhir=nilaiAwal;
            }
            else if(suhuAkhir.equalsIgnoreCase("farenheit")) {
                return nilaiAkhir=(nilaiAwal*9/4)+32;    
            }
            else {
                return nilaiAkhir=0;
            }
        }
        else if(suhuAwal.equalsIgnoreCase("farenheit")) {
            if(suhuAkhir.equalsIgnoreCase("celcius")) {
                return nilaiAkhir=(nilaiAwal-32)*5/9;    
            }
            else if(suhuAkhir.equalsIgnoreCase("reamur")) {
                return nilaiAkhir=(nilaiAwal-32)*4/9;
            }
            else if(suhuAkhir.equalsIgnoreCase("farenheit")) {
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
        System.out.println("Hasil Konversi : "+nilaiAkhir+" "+suhuAkhir);
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