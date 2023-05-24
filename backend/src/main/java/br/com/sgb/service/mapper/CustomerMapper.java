package br.com.sgb.service.mapper;

import br.com.sgb.model.Customer;
import br.com.sgb.service.dto.CustomerDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CustomerMapper extends EntityMapper<CustomerDto, Customer> {
}
