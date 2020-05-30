package com.accounting.model.account;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Account
 */
@Data
@NoArgsConstructor
@Entity
public class Account {

    @Id
    private String id;
    private String name;
}