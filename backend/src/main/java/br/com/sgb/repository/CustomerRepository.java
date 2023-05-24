package br.com.sgb.repository;

import br.com.sgb.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Page<Customer> findByDeletedFalse(Pageable pageable);

    Customer findByIdAndDeletedFalse(Long idCustomer);

    Boolean existsByIdAndDeletedFalse(Long idCustomer);

    @Modifying
    @Query("UPDATE Customer C " +
            " SET " +
            "   C.deleted = true " +
            " WHERE " +
            "   C.id = :idClient ")
    void deleteById(@Param("idClient") Long idClient);

}
