//Give navbar nav_active
function active_top_nav(the_section) {
	var nav_link = document.getElementById(the_section + "_nav_link");
	var sections = ["home_nav_link","about_nav_link","experience_nav_link","projects_nav_link","contact_nav_link"];
	
	for (i = 0; i < sections.length; i++) {
	
	// If the list section matches with the current section, give it the active class
	  if (sections[i] === the_section + "_nav_link"){
		  nav_link.classList.add("nav_active");
	  }
	  else {
		 // Tries to remove the nav_active class from the element, but it will cause an error if it doesn't have that class
		try {document.getElementById(sections[i]).classList.remove("nav_active");}
		catch (e) {} 
	  }
	}
}

$(document).on('scroll', function() {
	var scrolltop = $(this).scrollTop();
	var scrollbottom = $(window).scrollTop() + $(window).height();
	// Bottom section to top section 
	if (scrollbottom >= $('#contact').position().top + 2 * $('#top_nav_bar').height() ) {
		active_top_nav('contact');
	}  
	else if (scrolltop >= $('#projects').position().top - 2 * $('#top_nav_bar').height()) {
		active_top_nav('projects');
	}  
	else if (scrolltop >= $('#experience').position().top - 2 * $('#top_nav_bar').height()) {
		active_top_nav('experience');
	}
	else if (scrolltop >= $('#about').position().top - 2 * $('#top_nav_bar').height()) {
		active_top_nav('about');
	}
	else if (scrolltop >= $('#home').position().top - $('#top_nav_bar').height()) {
		active_top_nav('home');
	}
})

//Give navbar nav_active ^ ^ ^



//Give ham navbar nav_active
function active_ham_nav(the_section) {
	var ham_link = document.getElementById(the_section + "_ham_link");
	var ham_sections = ["home_ham_link","about_ham_link","experience_ham_link","projects_ham_link","contact_ham_link"];
	
	for (i = 0; i < ham_sections.length; i++) {
	
	// If the list section matches with the current section, give it the active class
	  if (ham_sections[i] === the_section + "_ham_link"){
		  ham_link.classList.add("ham_nav_active");
	  }
	  else {
		 // Tries to remove the nav_active class from the element, but it will cause an error if it doesn't have that class
		try {document.getElementById(ham_sections[i]).classList.remove("ham_nav_active");}
		catch (e) {} 
	  }
	}
}

$(document).on('scroll', function() {
	var scrolltop = $(this).scrollTop();
	var scrollbottom = $(window).scrollTop() + $(window).height();
	// Bottom section to top section 
	if (scrollbottom >= $('#contact').position().top + 2 * $('#top_nav_bar').height() ) {
		active_ham_nav('contact');
	}  
	else if (scrolltop >= $('#projects').position().top - 2 * $('#top_nav_bar').height()) {
		active_ham_nav('projects');
	}  
	else if (scrolltop >= $('#experience').position().top - 2 * $('#top_nav_bar').height()) {
		active_ham_nav('experience');
	}
	else if (scrolltop >= $('#about').position().top - 2 * $('#top_nav_bar').height()) {
		active_ham_nav('about');
	}
	else if (scrolltop >= $('#home').position().top - $('#top_nav_bar').height()) {
		active_ham_nav('home');
	}
})

//Give ham navbar nav_active ^ ^ ^

function show_responsive_bar() {
	var vnb = document.getElementById("vertical_nav_bar");
	var vnb_blur = document.getElementById("vnb_blur");
	if (vnb.style.display === "block") {
		vnb.style.right = "-500px";
		
		setTimeout(() => {
			vnb.style.display = "none";
		}, 100);
	}
	else {
		vnb.style.right = "0px";
		vnb.style.display = "block";
		vnb_blur.style.display = "block";
		
	}
}
function animate_ham_menu() {
	var e_h_m = document.getElementById("entire_ham_menu");
	var hammenu_line_one = document.getElementById("hammenu_line_one");
	var hammenu_line_two = document.getElementById("hammenu_line_two");
	var hammenu_line_three = document.getElementById("hammenu_line_three");
  
  if (e_h_m.classList.contains("mobilenavbarison")) { //Closes nav bar
	vnb_blur.style.display = "none";	  
	e_h_m.classList.remove("mobilenavbarison"); // Removes the class
	
	hammenu_line_three.style.animation = "move_then_reappear 0.3s;";	
	hammenu_line_three.classList.remove("line_three_ani");

	  // Runs after the default accordion is clicked
	  setTimeout(() => {
		hammenu_line_two.classList.remove("line_two_ani");
		// Runs after the default accordion is clicked
		setTimeout(() => {
		  hammenu_line_one.classList.remove("line_one_ani");
		  setTimeout(() => {
			e_h_m.classList.remove("ham_menu_spin");		
			  setTimeout(() => {
				show_responsive_bar()
			  }, 100); //Opens the navigation bar
		  }, 100); //Spins the entire menu
		}, 100); //Animates top line
	  }, 100); //Animates middle line

  } //End of if statement
  
  else { //Opens nav bar
	  e_h_m.classList.add("mobilenavbarison");
	  hammenu_line_three.classList.add("line_three_ani"); // Adds the class

	  // Runs after the default accordion is clicked
	  setTimeout(() => {
		hammenu_line_two.classList.add("line_two_ani");
		// Runs after the default accordion is clicked
		setTimeout(() => {
		  hammenu_line_one.classList.add("line_one_ani");
		  setTimeout(() => {
			e_h_m.classList.add("ham_menu_spin");		
			  setTimeout(() => {
				show_responsive_bar()
			  }, 100); //Opens the navigation bar
		  }, 100); //Spins the entire menu
		}, 100); //Animates top line
	  }, 100); //Animates middle line
  }
  
  
} //End of function