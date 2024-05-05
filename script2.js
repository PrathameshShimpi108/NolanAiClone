// script.js

const endpointUrl = '/generate-script'; // Ensure this matches your server endpoint
const apiKey = 'sk-proj-JeAhuojs8U1wZ4uPgAEQT3BlbkFJjPCu2oBt3HEdjD6kIWBc'; // Your OpenAI API key
const formData = { title: 'Your Title', synopsis: 'Your Synopsis', genre: 'Your Genre' };
console.log(formData);
fetch(endpointUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    console.log('Response data:', data);
})
.catch(error => {
    console.error('Error:', error);
});
