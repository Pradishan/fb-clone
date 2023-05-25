// Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// select gender 
if (window.location.pathname === "/") {
    const radiobtn1 = document.querySelector("#flexRadioDefault1");
    const radiobtn2 = document.querySelector("#flexRadioDefault2");
    const radiobtn3 = document.querySelector("#flexRadioDefault3");
    const genderselect = document.querySelector("#selectGender");

    radiobtn1.addEventListener("change", () => {
        genderselect.classList.add("d-none");
    });
    radiobtn2.addEventListener("change", () => {
        genderselect.classList.add("d-none");
    });
    radiobtn3.addEventListener("change", () => {
        genderselect.classList.remove("d-none");
    });
}
