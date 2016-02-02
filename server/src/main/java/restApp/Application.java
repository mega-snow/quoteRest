package restApp;

import java.util.Arrays;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@ImportResource("classpath:/META-INF/application-context.xml")
public class Application {
    public static void main(String[] args) {        
        ApplicationContext ctx = SpringApplication.run(Application.class, args);        
    }

}