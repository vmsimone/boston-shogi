function loadPage() {
    decrypt();
}

function decrypt() {
    const contactElem = document.getElementsByClassName('contact')[0];
    const decryptedEmail = atob(contactElem.id);

    const emailAnchor = contactElem.children[0];

    emailAnchor.setAttribute("href", `mailto:${decryptedEmail}`);
    emailAnchor.textContent=decryptedEmail;
}

$(loadPage);