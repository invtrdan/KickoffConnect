document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('https://api.github.com/repos/invtrdan/KickoffConnect/dispatches', {
        method: 'POST',
        headers: {
            'Accept': 'application/vnd.github.everest-preview+json',
            'Authorization': 'token KICKOFF_SUBSCRIBE_PAT'
        },
        body: JSON.stringify({
            event_type: 'new_subscriber',
            client_payload: {
                name: name,
                email: email
            }
        })
    }).then(response => {
        if (response.ok) {
            alert('You have subscribed successfully!');
        } else {
            alert('Subscription failed.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
