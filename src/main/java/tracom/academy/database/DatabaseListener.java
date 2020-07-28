
package tracom.academy.database;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;


@WebListener
public class CreateTablesServelet implements ServletContextListener {

    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext ctx = servletContextEvent.getServletContext();

        Database database = new Database("jdbc:mysql://192.168.254.189:3306/", "shule_yetu","tracom", "password");
        database.createTables();
    }

    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        System.out.println("Database connection closed for Application.");

    }
}


