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

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "fees")
//    @JoinColumn(name = "student_id", referencedColumnName = "id")
    @JsonProperty("student")
    private StudentEntity student;
}
