
package com.example;

import com.example.model.Employee;
import com.example.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class JpaHibernateDemoApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(JpaHibernateDemoApplication.class, args);
        EmployeeService employeeService = context.getBean(EmployeeService.class);

        Employee emp = new Employee("Jane Smith");
        employeeService.addEmployee(emp);
        System.out.println("Employee saved: " + emp);
    }
}
