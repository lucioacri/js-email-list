const generateButton = document.getElementById("generate-button");
const emailsForm = document.getElementById("emails-form");
const emailsList = document.getElementById("emails-list");
// functions
const getRandomEmail = () => {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      emailsList.innerHTML += `
        <li>${email}</li>
      `;
    });
};

const generateEmail = (number) => {
  emailsList.innerHTML = ``;
  for (let i = 0; i < number; i++) {
    getRandomEmail();
  }
};

// html update
emailsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  generateEmail(10);
});
