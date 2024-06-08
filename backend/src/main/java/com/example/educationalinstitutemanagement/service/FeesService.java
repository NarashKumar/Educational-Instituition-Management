package com.example.educationalinstitutemanagement.service;

import com.example.educationalinstitutemanagement.entity.FeesEntity;

public interface FeesService {
    FeesEntity addOrUpdateFees(Long id,FeesEntity feesEntity);
//    FeesEntity getFeesById(Long id);

    FeesEntity getFeesByStudentId(Long studentId);
}
