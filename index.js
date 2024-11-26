// Toggle the navigation menu on smaller screens
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-toggle");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Dynamic time display
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  timeElement.innerText = now.toLocaleTimeString();
}

// Update time every second
setInterval(updateTime, 1000);

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const whasappMessage = `Hello%20I%20am%20${encodeURIComponent(
      name
    )}.%20My%20email%20is%20${encodeURIComponent(email)}.%20Here%20is%20my%20message:%20${encodeURIComponent(message)}`;


    const phoneNumberURL = '2348155113559'



    const whasappURL = `https://wa.me/${phoneNumberURL}?text=${whasappMessage}` ;

    window.open(whasappURL, '_blank')







  }

)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ${encodeURIComponent(email)}`;
  });
