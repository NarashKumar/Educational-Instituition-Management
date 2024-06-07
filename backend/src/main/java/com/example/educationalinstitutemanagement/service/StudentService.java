package com.example.educationalinstitutemanagement.service;

import com.example.educationalinstitutemanagement.entity.StudentEntity;

import java.util.List;

public interface StudentService {
    List<StudentEntity> getAllStudents();

   StudentEntity getStudentById(Long id);

    StudentEntity addStudent(StudentEntity studentEntity);

    StudentEntity updateStudent(Long id, StudentEntity studentEntity);

    void deleteStudent(Long id);
}
