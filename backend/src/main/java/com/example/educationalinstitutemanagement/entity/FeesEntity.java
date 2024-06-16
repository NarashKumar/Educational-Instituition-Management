package com.example.educationalinstitutemanagement.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "fees")
public class FeesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String alottedFees;
    private String paidFees;
    private String balanceFees;
    private String description;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    @JsonBackReference
    private StudentEntity student;


    @JsonProperty("student_id")
    public Long getStudentEntityId() {
        return student != null ? student.getId() : null;
    }


}
