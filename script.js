// Sample data for projects
const projectsData = [
    { name: 'Project 1', githubLink: '#', newLink: '#', description: 'Short description of the project. Just a couple of sentences will do' },
    { name: 'Project 2', githubLink: '#', newLink: '#', description: 'Short description of the project. Just a couple of sentences will do' },
    { name: 'Project 3', githubLink: '#', newLink: '#', description: 'Short description of the project. Just a couple of sentences will do' },
    { name: 'Project 4', githubLink: '#', newLink: '#', description: 'Short description of the project. Just a couple of sentences will do' },
    { name: 'Project 5', githubLink: '#', newLink: '#', description: 'Short description of the project. Just a couple of sentences will do' },
    { name: 'Project 6', githubLink: '#', newLink: '#', description: 'Short description of the project. Just a couple of sentences will do' }
  ];

const container = document.querySelector(".projects_container");

projectsData.forEach(project => {
    const projectItem = createProjectItem(project);
    container.appendChild(projectItem);
});
  
// Function to create a project item
function createProjectItem(project) {
    const projectItem = document.createElement('div');
    projectItem.className = 'project_item';

    const projectImg = document.createElement('div');
    projectImg.className = 'project_img';
    projectItem.appendChild(projectImg);

    const projectDetails = document.createElement('div');
    projectDetails.className = 'project_details';

    const projectName = document.createElement('h3');
    projectName.textContent = project.name;
    projectDetails.appendChild(projectName);

    const githubLink = document.createElement('a');
    githubLink.href = project.githubLink;
    const githubIcon = document.createElement('i');
    githubIcon.className = 'devicon-github-original colored icon';
    githubLink.appendChild(githubIcon);
    projectDetails.appendChild(githubLink);

    const newLink = document.createElement('a');
    newLink.href = project.newLink;
    const newImg = document.createElement('img');
    newImg.className = 'icon';
    newImg.src = './assets/open-in-new.svg';
    newImg.alt = '';
    newLink.appendChild(newImg);
    projectDetails.appendChild(newLink);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectDetails.appendChild(projectDescription);

    projectItem.appendChild(projectDetails);

    return projectItem;
}