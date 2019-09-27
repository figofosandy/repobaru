public class Nomor6 {
    public static void main(String args[]) {
        for (int i=1; i<=12; i++) {
            if(i%4==0) {
                if(i==12) {
                    System.out.print("oke");
                }
                else {
                System.out.print("oke, ");
                }
            }
            else {
                System.out.print(i+", ");
            }
        }
    }
}