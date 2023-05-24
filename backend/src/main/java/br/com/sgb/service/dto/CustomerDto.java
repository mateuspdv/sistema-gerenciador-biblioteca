package br.com.sgb.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class CustomerDto implements Serializable {

    private Long id;

    private String name;

    private String cpf;

    private String email;

    private Character gender;

    private LocalDate birthDate;

    private Boolean deleted;

}
