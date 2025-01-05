import javax.swing.*;

public class Example1 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("defaultClose");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}
