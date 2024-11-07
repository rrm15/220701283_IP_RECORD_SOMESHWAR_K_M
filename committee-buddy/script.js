//frontend js to make api call to mongo db and work on dom

document.addEventListener('DOMContentLoaded', () => {
    // Form submission for Networking Page
    const networkForm = document.getElementById('networkForm');
    if (networkForm) {
        networkForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const university = document.getElementById('university').value;
            const experience = document.getElementById('experience').value;
            const message = document.getElementById('message').value;

            // Validate form fields
            if (!name || !email || !university || !experience || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Send data to backend
            try {
                const response = await fetch('http://localhost:5000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        university,
                        experience,
                        message,
                        type: 'networking' // Indicate type of form
                    }),
                });

                const data = await response.json();
                alert(data.message);
                networkForm.reset();
            } catch (error) {
                alert('Error submitting form.');
            }
        });
    }

    // Form submission for EB Recruitment Page
    const ebForm = document.getElementById('ebForm');
    if (ebForm) {
        ebForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const university = document.getElementById('university').value;
            const experience = document.getElementById('experience').value;
            const message = document.getElementById('message').value;

            // Validate form fields
            if (!name || !email || !university || !experience || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Send data to backend
            try {
                const response = await fetch('http://localhost:5000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        university,
                        experience,
                        message,
                        type: 'eb' // Indicate type of form
                    }),
                });

                const data = await response.json();
                alert(data.message);
                ebForm.reset();
            } catch (error) {
                alert('Error submitting form.');
            }
        });
    }

    // Add your animation logic here, if any
});
