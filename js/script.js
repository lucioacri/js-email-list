const emailsArray = [];
const generateButton = document.getElementById("generate-button");
const emailsForm = document.getElementById("emails-form");
const emailsList = document.getElementById("emails-list");
// functions
const getRandomEmail = () => {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      emailsArray.push(email);
      let htmlmails = ``;
      for (const mail of emailsArray) {
        htmlmails += `<li class="list-group-item">${mail}</li>`;
      }
      emailsList.innerHTML = htmlmails;
    });
};

const generateEmail = (number) => {
  emailsArray.length = 0;
  emailsList.innerHTML = ``;
  for (let i = 0; i < number; i++) {
    getRandomEmail();
  }
};

// html update
emailsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  generateEmail(10);
  console.log(emailsArray);
});
