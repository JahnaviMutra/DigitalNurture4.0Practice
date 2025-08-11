package com.example.hibernate;

import com.example.model.Employee;
import org.junit.jupiter.api.Test;

class EmployeeHibernateDaoTest {

    @Test
    void testAddEmployee() {
        EmployeeHibernateDao dao = new EmployeeHibernateDao();
        Employee emp = new Employee("Hibernate Test");
        Integer id = dao.addEmployee(emp);
        assert id != null;
    }
}
