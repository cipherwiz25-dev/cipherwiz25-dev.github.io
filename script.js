function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}


function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "233XXXXXXXXX";

    const whatsappMessage =
        `Hello, my name is ${Obed}.%0A%0A` +
        `Email: ${email}%0A` +
        `Subject: ${subject}%0A%0A` +
        `Project details:%0A${message}`;

    window.open(
        `https://wa.me/${+233556335045}?text=${whatsappMessage}`,
        "_blank"
    );
}