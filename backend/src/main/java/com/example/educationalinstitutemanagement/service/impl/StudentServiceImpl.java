package com.example.educationalinstitutemanagement.service.impl;

import com.example.educationalinstitutemanagement.entity.StudentEntity;
import com.example.educationalinstitutemanagement.repository.StudentRepository;
import com.example.educationalinstitutemanagement.service.StudentService;
import com.example.educationalinstitutemanagement.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<StudentEntity> getAllStudents() {

       return studentRepository.findAll();
    }

    @Override
    public StudentEntity getStudentById(Long id) {
        StudentEntity studentEntity =studentRepository.findById(id).get();
        if (studentRepository.findById(id).isPresent()) {
            return studentEntity;
        }
        return new ResponseEntity<StudentEntity>(HttpStatus.NOT_FOUND).getBody();

    }

    @Override
    public StudentEntity addStudent(StudentEntity studentEntity) {
        String formattedDateOfBirth = DateUtils.convertDateFormat(studentEntity.getDob());
        studentEntity.setDob(formattedDateOfBirth);

        return studentRepository.save(studentEntity);
    }

    @Override
    public StudentEntity updateStudent(Long id, StudentEntity studentEntity ) {

        if (studentRepository.findById(id).isPresent()) {
            studentEntity.setId(id);
            return studentRepository.save(studentEntity);
        }
        return new ResponseEntity<StudentEntity>(HttpStatus.NOT_FOUND).getBody();
    }

    @Override
    public void deleteStudent(Long id) {

        studentRepository.deleteById(id);
    }


}
