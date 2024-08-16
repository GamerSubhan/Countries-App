import '../index.css';

const Header = () => {
  localStorage.setItem('theme', 'light');
  
  const handleLighting = () => {       
    let isLight = localStorage.getItem('theme');
    const header = document.querySelector(".header");
    const details = document.querySelectorAll('.country-name');
    const borders = document.querySelectorAll('.borders');
    const savedTheme = localStorage.getItem('theme');
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('select');
    const moonIcon = document.querySelector('.moon-icon');
    const learnMoreButtons = document.querySelectorAll('.btn');

    if (isLight === 'light') {
      localStorage.setItem('theme', 'dark');
    } else if (isLight === 'dark') {
      localStorage.setItem('theme', 'light');
    }

    document.body.classList.toggle("light-theme");
    header.classList.toggle("light-theme");

    if (savedTheme === 'dark') { 
      borders.forEach((border) => {
        const borderList = border.querySelector('li');
        borderList.style.backgroundColor = 'hsl(207, 26%, 17%)';
        borderList.style.color = 'white';
      });
      details.forEach((detail) => {
        detail.style.backgroundColor = 'hsl(0, 0%, 100%)';
        detail.style.color = 'black';
      });
      if(searchInput !== null)
      {
        searchInput.style.backgroundColor = 'hsl(0, 0%, 100%)';
        searchInput.style.color = 'black';
        searchInput.classList.remove('customerPlaceholder');
        dropdown.style.backgroundColor = 'hsl(0, 0%, 100%)';
        dropdown.style.color = 'black';
        moonIcon.style.color = 'black';
        learnMoreButtons.forEach(learnMoreButton => {
          learnMoreButton.style.color = 'black';
        });
      }
    }
    else
    {
      borders.forEach((border) => {
        const borderList = border.querySelector('li');
        borderList.style.backgroundColor = 'hsl(0, 0%, 100%)';
        borderList.style.color = 'black';
      });
      details.forEach((detail) => {
        detail.style.backgroundColor = 'hsl(209, 23%, 22%)';
        detail.style.color = 'white';
      });
      if(searchInput !== null)
      {
        searchInput.style.backgroundColor = 'hsl(209, 23%, 22%)';
        searchInput.style.color = 'white';
        searchInput.classList.add('customerPlaceholder');
        dropdown.style.backgroundColor = 'hsl(209, 23%, 22%)';
        dropdown.style.color = 'hsl(0, 0%, 100%)';
        moonIcon.style.color = 'white';
        learnMoreButtons.forEach(learnMoreButton => {
          learnMoreButton.style.color = 'white';
        })
      }
    }
  };

  return (
    <div className='header'>
      <h3 id='title'>Where in the world?</h3>
      <div id='Lighting' onClick={handleLighting}>
        <p>Dark Mode</p>
        <i className="fas fa-moon moon-icon"></i>
      </div>
    </div>
  );
};

export default Header;