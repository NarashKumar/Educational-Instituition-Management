package com.example.educationalinstitutemanagement.model;

import lombok.Data;

@Data
public class Student {
    private Long id;
    private String name;
    private String address;
    private String email;
    private String phoneNumber;
    private String dob;
    private String age;
    private String gender;
    private String degree;
    private String course;
}
