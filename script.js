const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#222429';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

const navbarVisible = document.querySelector("#navbar-visible");

function toggleMenu(){
    navbarVisible.classList.toggle('hidden');
}

const selectedGenres = new Set();

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('hidden');
}

function selectGenre(genre) {
    selectedGenres.add(genre);
    updateGenresDisplay();
    checkForError();
}

function deselectGenre(genre) {
    selectedGenres.delete(genre);
    updateGenresDisplay();
    checkForError();
}

function updateGenresDisplay() {
    const container = document.getElementById('selected-genres');
    container.innerHTML = ''; // Clear previous entries
    if (selectedGenres.size === 0) {
        container.innerHTML = '<input type="text" placeholder="Genre" class="w-full p-3 text-lg text-gray-500 focus:outline-none" readonly/>'; // Placeholder mimicking empty input field
    } else {
        selectedGenres.forEach(genre => {
            const genreSpan = document.createElement('span');
            genreSpan.textContent = genre;
            genreSpan.className = 'bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ';
            genreSpan.style.marginRight = '5px';
            genreSpan.style.marginBottom = '5px';
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.className = 'text-blue-800 hover:text-blue-900';
            removeBtn.style.border = 'none';  // Ensures no border
            removeBtn.style.background = 'none';  // Ensures transparent background
            removeBtn.onclick = function() { deselectGenre(genre); };
            genreSpan.appendChild(removeBtn);
            container.appendChild(genreSpan);
        });
    }
}

function deselectGenre(genre) {
    selectedGenres.delete(genre);
    updateGenresDisplay();
}

document.getElementById('create_script_genre').addEventListener('input', function() {
    var genreInput = document.getElementById('create_script_genre');
    var errorMessage = document.getElementById('genre_error');

    if (genreInput.value.trim() === '') {
        errorMessage.style.display = 'block';  // Show the error message
    } else {
        errorMessage.style.display = 'none';  // Hide the error message
    }
});

function clearAllGenres() {
    selectedGenres.clear();
    updateGenresDisplay();
    checkForError();
}

function checkForError() {
    var errorMessage = document.getElementById('genre_error');
    if (selectedGenres.size === 0) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
}

window.selectGenre = function(genreName) {
    const genre = document.getElementById('create_script_genre');
    genre.value = genreName; // Update the input value
    console.log("Genre selected: ", genre.value); // Debug: Confirm the genre selection
    saveInputs(); // Save all inputs including the updated genre
}

function saveInputs() {
    const title = document.getElementById('create_script_title').value;
    const synopsis = document.getElementById('create_script_synopsis').value;
    const genre = document.getElementById('create_script_genre').value;

    const formData = {
        title: title,
        synopsis: synopsis,
        genre: genre
    };

    const formDataString = JSON.stringify(formData);

    console.log("Saving to local storage: ", formDataString); // Debug: Check what is being saved
    localStorage.setItem('scriptData', formDataString);
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', toggleDropdown);
    } else {
        console.error("Dropdown toggle button not found");
    }
});