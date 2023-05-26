// DeleteAccountServlet.java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DeleteAccountServlet extends HttpServlet {

protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String id = request.getParameter("id");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstack", "workbench", "ninguna");

            String query = "DELETE FROM users WHERE id = ?";
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setString(1, id);

            int i = stmt.executeUpdate();
            System.out.println(i + " records deleted");

            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}