package br.com.sgb.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class ViewCustomerDto implements Serializable {

    private Long id;

    private String name;

    private String email;

    private LocalDate birthDate;

}
