package com.example.educationalinstitutemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class EducationalInstituteManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(EducationalInstituteManagementApplication.class, args);
    }

}
