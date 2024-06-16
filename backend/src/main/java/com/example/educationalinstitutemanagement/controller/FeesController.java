package com.example.educationalinstitutemanagement.controller;

import com.example.educationalinstitutemanagement.entity.FeesEntity;
import com.example.educationalinstitutemanagement.service.FeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
@RestController
@Controller
@RequestMapping("/api/v1/fees")
public class FeesController {
    @Autowired
    private FeesService feesService;

    @PostMapping("/student/{studentId}/addfees")
    public FeesEntity addFees(@PathVariable Long studentId, @RequestBody FeesEntity feesEntity) {
        return feesService.addFees(studentId, feesEntity);
    }


    @GetMapping("/student/{studentId}/getfees")
    public FeesEntity getFeesByStudentId(@PathVariable Long studentId) {
        return feesService.getFeesByStudentId(studentId);
    }

    @PutMapping("/student/{studentId}/updatefees")
    public FeesEntity updateFees(@PathVariable Long studentId, @RequestBody FeesEntity feesEntity) {
        return feesService.updateFees(studentId, feesEntity);
    }
}
