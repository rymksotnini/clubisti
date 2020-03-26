package com.pfa.clubisti;

import com.pfa.clubisti.model.Role;
import com.pfa.clubisti.model.RoleName;
import com.pfa.clubisti.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ClubistiApplication {

	@Autowired
	RoleRepository roleRepository;
	public static void main(String[] args) {
		SpringApplication.run(ClubistiApplication.class, args);
	}

	@Bean
	void initializeRoles() {
		if(!roleRepository.existsByName(RoleName.ROLE_USER))
		{
			Role r1 = new Role();
			r1.setName(RoleName.ROLE_USER);
			roleRepository.save(r1);
		}

		if(!roleRepository.existsByName(RoleName.ROLE_ADMIN))
		{
			Role r1 = new Role();
			r1.setName(RoleName.ROLE_ADMIN);
			roleRepository.save(r1);
		}
	}

}
