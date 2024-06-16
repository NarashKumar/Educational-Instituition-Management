package com.example.educationalinstitutemanagement.controller;

import com.example.educationalinstitutemanagement.entity.StudentEntity;
import com.example.educationalinstitutemanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RestController
@Controller
@RequestMapping("/api/v1/student")
public class StudentController {
   @Autowired
    private StudentService studentService;

//summary
    @GetMapping("/allstudents")
    public List<StudentEntity> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/student/{id}")
    public StudentEntity getStudentById(@PathVariable("id") Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("/addstudent")
    public StudentEntity addStudent(@RequestBody StudentEntity studentEntity) {
        return studentService.addStudent(studentEntity);
    }

    @PutMapping("/updatestudent/{id}")
    public StudentEntity updateStudent(@PathVariable("id") Long id, @RequestBody StudentEntity studentEntity) {
        return studentService.updateStudent(id, studentEntity);
    }

    @DeleteMapping("/deletestudent/{id}")
    public void deleteStudent(@PathVariable("id") Long id) {
        studentService.deleteStudent(id);
    }



}
