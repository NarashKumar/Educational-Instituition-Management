package com.example.educationalinstitutemanagement.repository;

import com.example.educationalinstitutemanagement.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<StudentEntity, Long> {

}
