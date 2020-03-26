package com.pfa.clubisti.controller;

import com.pfa.clubisti.exception.NotAllowException;
import com.pfa.clubisti.exception.ResourceNotFoundException;
import com.pfa.clubisti.model.Project;
import com.pfa.clubisti.model.ProjectStatus;
import com.pfa.clubisti.model.requests.CreateProjectReq;
import com.pfa.clubisti.repository.CategoryRepository;
import com.pfa.clubisti.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/projects")
    public Page<Project> getAllProjects(Pageable pageable) {
        return projectRepository.findAll(pageable);
    }

    @PostMapping("/projects")
    public Project createProject(@Valid @RequestBody CreateProjectReq projectReq) {
        Project newProject = new Project();
        newProject.setName(projectReq.getName());
        newProject.setAmount(projectReq.getAmount());
        newProject.setLastUpdatedSum(0);
        newProject.setMinDonationAmount(projectReq.getMinDonationAmount());
        newProject.setMaxDonationAmount(projectReq.getMaxDonationAmount());
        newProject.setStatus(ProjectStatus.PAUSED);
        newProject.setShortDescription(projectReq.getShortDescription());
        if (projectReq.getCategoriesIds() != null){

            for(Long categoryId : projectReq.getCategoriesIds()){
                System.out.println(categoryId);
                categoryRepository.findById(categoryId).map(category -> {
                newProject.getCategories().add(category);
               return category;
                }).orElseThrow(() -> new ResourceNotFoundException("CategoryId " + categoryId + " not found"));
            }
        }
        return projectRepository.save(newProject);
    }

    @PutMapping("/projects/{projectId}")
    public Project updateProject(@PathVariable Long projectId, @Valid @RequestBody Project projectRequest) {
        return projectRepository.findById(projectId).map(project -> {
            project.setName(projectRequest.getName());

            return projectRepository.save(project);
        }).orElseThrow(() -> new ResourceNotFoundException("ProjectId " + projectId + " not found"));
    }

    @CrossOrigin
    @PutMapping("/projects/activate/{projectId}")
    public Project activateProject(@PathVariable Long projectId, @Valid @RequestBody Project projectRequest) {
        return projectRepository.findById(projectId).map(project -> {

            if (project.getStatus() == ProjectStatus.TERMINATED ||project.getStatus() == ProjectStatus.DELETED ){
                throw new NotAllowException("Project is already " + project.getStatus() );
            }
            project.setStatus(ProjectStatus.ACTIVE);

            return projectRepository.save(project);
        }).orElseThrow(() -> new ResourceNotFoundException("ProjectId " + projectId + " not found"));
    }

    @CrossOrigin
    @PutMapping("/projects/pause/{projectId}")
    public Project pauseProject(@PathVariable Long projectId, @Valid @RequestBody Project projectRequest) {
        return projectRepository.findById(projectId).map(project -> {

            if (project.getStatus() == ProjectStatus.TERMINATED ||project.getStatus() == ProjectStatus.DELETED ){
                throw new NotAllowException("Project is already " + project.getStatus() );
            }
            project.setStatus(ProjectStatus.PAUSED);

            return projectRepository.save(project);
        }).orElseThrow(() -> new ResourceNotFoundException("ProjectId " + projectId + " not found"));
    }

    @CrossOrigin
    @PutMapping("/projects/end/{projectId}")
    public Project endProject(@PathVariable Long projectId, @Valid @RequestBody Project projectRequest) {
        return projectRepository.findById(projectId).map(project -> {

            if (project.getStatus() == ProjectStatus.DELETED ){
                throw new NotAllowException("Project is already " + project.getStatus() );
            }
            project.setStatus(ProjectStatus.TERMINATED);

            return projectRepository.save(project);
        }).orElseThrow(() -> new ResourceNotFoundException("ProjectId " + projectId + " not found"));
    }



    @DeleteMapping("/projects/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable Long projectId) {
        return projectRepository.findById(projectId).map(project -> {
            projectRepository.delete(project);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("ProjectId " + projectId + " not found"));
    }
}
