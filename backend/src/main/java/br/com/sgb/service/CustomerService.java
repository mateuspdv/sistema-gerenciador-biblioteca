package br.com.sgb.service;

import br.com.sgb.repository.CustomerRepository;
import br.com.sgb.service.dto.CustomerDto;
import br.com.sgb.service.dto.ViewCustomerDto;
import br.com.sgb.service.exception.EntityNotFoundException;
import br.com.sgb.service.mapper.CustomerMapper;
import br.com.sgb.service.mapper.ViewCustomerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    private final CustomerMapper customerMapper;

    private final ViewCustomerMapper viewCustomerMapper;

    public Page<ViewCustomerDto> findAll(Pageable pageable) {
        return customerRepository.findByDeletedFalse(pageable).map(viewCustomerMapper::toDto);
    }

    private void existsById(Long idCustomer) {
        if (!customerRepository.existsByIdAndDeletedFalse(idCustomer)) {
            throw new EntityNotFoundException("Cliente não encontrado");
        }
    }

    public CustomerDto findById(Long idCustomer) {
        existsById(idCustomer);
        return customerMapper.toDto(customerRepository.findByIdAndDeletedFalse(idCustomer));
    }

    public CustomerDto create(CustomerDto customerDto) {
        customerDto.setDeleted(Boolean.FALSE);
        return customerMapper.toDto(customerRepository.save(customerMapper.toEntity(customerDto)));
    }

    public CustomerDto update(CustomerDto customerDto) {
        existsById(customerDto.getId());
        customerDto.setDeleted(Boolean.FALSE);
        return customerMapper.toDto(customerRepository.save(customerMapper.toEntity(customerDto)));
    }

    public void deleteById(Long idClient) {
        existsById(idClient);
        customerRepository.deleteById(idClient);
    }

}
