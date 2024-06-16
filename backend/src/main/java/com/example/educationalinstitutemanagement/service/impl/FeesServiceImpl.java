package com.example.educationalinstitutemanagement.service.impl;

import com.example.educationalinstitutemanagement.entity.FeesEntity;
import com.example.educationalinstitutemanagement.entity.StudentEntity;
import com.example.educationalinstitutemanagement.repository.FeesRepository;
import com.example.educationalinstitutemanagement.repository.StudentRepository;
import com.example.educationalinstitutemanagement.service.FeesService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FeesServiceImpl implements FeesService {

    @Autowired
    private FeesRepository feesRepository;

    @Autowired
    private StudentRepository studentRepository;


    @Transactional
    @Override
    public FeesEntity addFees(Long id, FeesEntity feesEntity) {
        StudentEntity student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

// Set the bidirectional relationship
        feesEntity.setStudent(student);
        student.setFees(feesEntity);

        // Update the student with the fees entity and save the student entity
        FeesEntity savedFees = feesRepository.save(feesEntity);

        // Update the student with the fees ID
        student.setFeesId(savedFees.getId());

        studentRepository.save(student);

        return savedFees;
    }

    @Override
    public FeesEntity getFeesByStudentId(Long studentId) {
        FeesEntity fees = feesRepository.findByStudentId(studentId);
        if (fees == null) {
            throw new RuntimeException("Fees not found for the student");
        }
        return feesRepository.findByStudentId(studentId);
    }

    public FeesEntity updateFees(Long id, FeesEntity feesEntity) {
        if(feesRepository.findById(id).isPresent()) {
            return feesRepository.save(feesEntity);
        }
        return new ResponseEntity<FeesEntity>(HttpStatus.NOT_FOUND).getBody();
    }
}

