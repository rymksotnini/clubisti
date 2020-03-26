package com.pfa.clubisti.repository;

import com.pfa.clubisti.model.Project;
import com.pfa.clubisti.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
