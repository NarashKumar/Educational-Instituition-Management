package com.example.educationalinstitutemanagement.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "student")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    @JsonManagedReference
    private FeesEntity fees;

//    @Column(name = "fees_id")
//    private Long feesId;

}
