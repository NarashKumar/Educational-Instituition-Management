package com.example.educationalinstitutemanagement.service.impl;

import com.example.educationalinstitutemanagement.entity.FeesEntity;
import com.example.educationalinstitutemanagement.entity.StudentEntity;
import com.example.educationalinstitutemanagement.repository.FeesRepository;
import com.example.educationalinstitutemanagement.repository.StudentRepository;
import com.example.educationalinstitutemanagement.service.FeesService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeesServiceImpl implements FeesService {

    @Autowired
    private FeesRepository feesRepository;

    @Autowired
    private StudentRepository studentRepository;


    @Transactional
    @Override
    public FeesEntity addOrUpdateFees(Long id, FeesEntity feesEntity) {
        StudentEntity student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));




        feesEntity.setStudent(student);
        student.setFees(feesEntity);
//        student.setFeesId(feesEntity.getId());

        studentRepository.save(student);

        return feesRepository.save(feesEntity);
    }

    @Override
    public FeesEntity getFeesById(Long id) {
        return feesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fees not found for the student"));
    }
    }

