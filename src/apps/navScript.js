const showNav = async function () {
  const altNav = document.querySelector('div#drop-nav-links');
  
  if (altNav.hasAttribute('class') && altNav.getAttribute('class').includes('open')) {

    altNav.classList.remove('open');

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(altNav.style.display = 'none');
      }, 200);
    })

  } else {

    altNav.style.display = 'flex';
    
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(altNav.classList.add('open'));
      }, 0);
    })
  }
}

const addShowNavEvent = function () {
  const navBtn = document.querySelector('button#nav-button');
  navBtn.addEventListener('click', showNav);
}

export default addShowNavEvent;