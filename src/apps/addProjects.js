import previewSources from "./imageImports";

const projectsFile = {};
class Project {
  constructor (title, previewImg, description, repoLink, liveLink) {
    this.title = title;
    this.previewImg = previewImg;
    this.description = description;
    this.repoLink = repoLink;
    this.liveLink = liveLink;

    // Save created project to filer
    projectsFile[`${title.split(' ').join('-')}`] = this;
  }

  renderNode () {
    const projectCont = document.createElement('div');
    projectCont.classList.add('project-cont');
    
    const previewImg = new Image();
    previewImg.classList.add('project-preview')
    previewImg.src = this.previewImg;
    previewImg.setAttribute('alt', `${this.title} preview`);

    const title = document.createElement('h2');
    title.classList.add('project-title');
    title.textContent = this.title;

    const linksCont = document.createElement('div');
    linksCont.classList.add('project-links');

    const createLink = function (link, classAssign) {
      const newLink = document.createElement('a');
      newLink.setAttribute('href', link);
      newLink.setAttribute('target','_blank');
      newLink.classList.add(`${classAssign}-link`);
      return newLink
    }

    const repoLink = createLink(this.repoLink, 'repo');
    repoLink.setAttribute('aria-label', `${this.title} repository`);
    
    const liveLink = createLink(this.liveLink, 'live');
    liveLink.setAttribute('aria-label', `${this.title} live view`);

    [repoLink, liveLink].forEach(link => linksCont.appendChild(link));

    const description = document.createElement('p');
    description.classList.add('project-desc');
    description.textContent = this.description;

    [previewImg, title, linksCont, description].forEach(node => projectCont.appendChild(node));

    // Append/ render project node to the page
    const projectsMain = document.querySelector('div#projects-main');
    projectsMain.appendChild(projectCont);
  }

}

const battleship = new Project (
  'Battleship',
  previewSources.battleShip,
  'Play against a computer in a Battleship game. Follows Test Driven Development requirement',
  'https://github.com/makieldeviso/battleship',
  'https://makieldeviso.github.io/battleship/'
)

const weatherApp = new Project (
  'Weather App',
  previewSources.weatherApp,
  'Weather App using free tier WeatherAPI',
  'https://github.com/makieldeviso/weather-app',
  'https://makieldeviso.github.io/weather-app/'
)

const toDoList = new Project (
  'Todo List',
  previewSources.todoList,
  'Todo List Web App',
  'https://github.com/makieldeviso/todo-list',
  'https://makieldeviso.github.io/todo-list/'
)

const restaurant = new Project (
  'Restaurant',
  previewSources.restaurant,
  'Restaurant Webpage, featuring Filipino Cuisine',
  'https://github.com/makieldeviso/restaurant',
  'https://makieldeviso.github.io/restaurant/'
)

const library = new Project (
  'Library',
  previewSources.library,
  'Library web Application that saves book details and logs user reading goals',
  'https://github.com/makieldeviso/library',
  'https://makieldeviso.github.io/library/'
)

const tictactoe = new Project (
  'Tic-tac-toe',
  previewSources.tictactoe,
  'Tic-tac-toe web application',
  'https://github.com/makieldeviso/tic-tac-toe',
  'https://makieldeviso.github.io/tic-tac-toe/'
) 

const renderProjects = function () {
  // ProjectsFile is an object filled with projects created by the class Project 
  for (let project in projectsFile) {
    projectsFile[project].renderNode();
  }
}

export default renderProjects;