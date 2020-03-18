package com.pfa.clubisti;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ClubistiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubistiApplication.class, args);
	}

}
