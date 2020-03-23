package com.pfa.clubisti.repository;

import com.pfa.clubisti.model.Category;
import com.pfa.clubisti.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
