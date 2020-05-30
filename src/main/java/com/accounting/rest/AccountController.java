package com.accounting.rest;

import com.accounting.model.account.*;
import com.accounting.repository.account.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AccountController
 */
@RestController
@RequestMapping("/account11")
public class AccountController {

    @Autowired
    AccountRepository ar;

    @GetMapping
    Iterable<Account> accounts(){
        return ar.findAll(); 
    }
    
}