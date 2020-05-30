package com.accounting.repository.account;

import com.accounting.model.account.Account;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * AccountRepository
 */
@RepositoryRestResource(collectionResourceRel = "accounts", path = "account")
public interface AccountRepository extends PagingAndSortingRepository<Account, String> {

    
}