document.addEventListener('DOMContentLoaded', function() {
    const scriptDataJSON = localStorage.getItem('scriptData');
    console.log(scriptDataJSON);
    const scriptData = JSON.parse(scriptDataJSON);
    const scriptTitle = scriptData.title;
    const scriptSynopsis = scriptData.synopsis || "No synopsis specified";
    const scriptGenre = scriptData.genre || "No genre specified";
    console.log('Script Title:', scriptTitle);
    console.log('Script Synopsis:', scriptSynopsis);
    console.log('Script Genre:', scriptGenre);

    const genreDisplay = document.getElementById('genreDisplay');
    genreDisplay.textContent = scriptGenre;
    
    const prompt = `Title: ${scriptTitle}\nSynopsis: ${scriptSynopsis}\nGenre: ${scriptGenre}\n\nGenerate a detailed script based on the above details:`;

    const formData = new FormData();
    formData.append('title', scriptTitle);
    formData.append('synopsis', scriptSynopsis);
    formData.append('genre', scriptGenre);
    console.log('Form Data:', formData);

    fetch('/generate-script', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('generatedScript').textContent = data.script;
    })
    .catch(error => {
        console.error('Error fetching the script:', error);
        document.getElementById('generatedScript').textContent = 'Failed to load the screenplay script.';
    });
});
