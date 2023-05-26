// ProfileUpdateServlet.java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ProfileUpdateServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String id = request.getParameter("id");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstack", "workbench", "ninguna");

            String query = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.setString(3, password);
            stmt.setString(4, id);

            int i = stmt.executeUpdate();
            System.out.println(i + " records updated");

            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}