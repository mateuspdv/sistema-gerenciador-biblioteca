package br.com.sgb.service.mapper;

import br.com.sgb.model.Customer;
import br.com.sgb.service.dto.ViewCustomerDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ViewCustomerMapper extends EntityMapper<ViewCustomerDto, Customer> {
}
