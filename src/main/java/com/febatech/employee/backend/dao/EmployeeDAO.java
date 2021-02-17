package com.febatech.employee.backend.dao;

import java.util.List;

import com.febatech.employee.backend.model.Employee;

public interface EmployeeDAO {
	
	List<Employee> get();
	
	Employee get(int id);
	
	void save(Employee employee);
	
	void delete(int id);
	

}
