import java.net.InetAddress;

public class Main {
	public static void main(String[] args) {

		try {

			InetAddress ia2 = InetAddress.getByName("www.noi-study.com");
			System.out.println(ia2.toString());
			System.out.println(ia2.getHostName());// 域名 127
			System.out.println(ia2.getHostAddress());// ip地址
		} catch (Exception ex) {

		}

	}

}
