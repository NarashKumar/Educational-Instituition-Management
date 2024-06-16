package com.example.educationalinstitutemanagement.service;

import com.example.educationalinstitutemanagement.entity.FeesEntity;

public interface FeesService {
    FeesEntity addFees(Long id,FeesEntity feesEntity);

    FeesEntity getFeesByStudentId(Long studentId);

    FeesEntity updateFees(Long id,FeesEntity feesEntity);
}
