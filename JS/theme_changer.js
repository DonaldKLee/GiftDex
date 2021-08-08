// this one is just to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
	var moon = document.getElementById("theme_moon");
	var sun = document.getElementById("theme_sun");
	
    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => { //Sets to dark mode
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'CSS/dark_mode_colours.css';
			
			moon.style.display = "none";
			sun.style.display = "block";
			
            //themeToggle.innerText = 'Switch to light mode';
        } else { //Sets to light mode
            // if it's dark -> go light
            themeStylesheet.href = 'CSS/light_mode_colours.css';
			
			moon.style.display = "block";
			sun.style.display = "none";
			
            //themeToggle.innerText = 'Switch to dark mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})

