package com.example.educationalinstitutemanagement.controller;

import com.example.educationalinstitutemanagement.entity.FeesEntity;
import com.example.educationalinstitutemanagement.service.FeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/fees")
public class FeesController {
    @Autowired
    private FeesService feesService;

    @PostMapping("/student/{studentId}/save")
    public FeesEntity addOrUpdateFees(@PathVariable Long studentId, @RequestBody FeesEntity feesEntity) {
        return feesService.addOrUpdateFees(studentId, feesEntity);
    }

    @GetMapping("/student/{feesId}/getfees")
    public FeesEntity getFeesById(@PathVariable Long feesId) {
        return feesService.getFeesById(feesId);
    }
}
