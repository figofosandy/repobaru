package latihanoop;

import java.util.Scanner;

public class Konversi {
    String mataUang;
    int nilaiUang,hasilKonversi;
    static final int USD=14000;

    Konversi(String mu, int n) {
        mataUang=mu;
        nilaiUang=n;
        konversiUang();
        output();
    }

    int konversiUang() {
        if (mataUang.equalsIgnoreCase("usd")) {
            return hasilKonversi=nilaiUang*USD;
        }
        else if(mataUang.equalsIgnoreCase("idr")) {
            return hasilKonversi=nilaiUang/USD;
        }
        else {
            return 0;
        }

    }
    
    
    public void output() {
        if (mataUang.equalsIgnoreCase("usd")) {
            System.out.println("IDR : "+hasilKonversi);
        }
        else if (mataUang.equalsIgnoreCase("idr")) {
            System.out.println("USD : "+hasilKonversi);
        }
        else {
            System.out.println("Nilainya tidak ditemukan");
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Masukkan mata uang dan nilainya");
        new Konversi(sc.nextLine(), sc.nextInt());
        //newKonversi.konversiUang();
        //newKonversi.output();
        sc.close();
    }
}