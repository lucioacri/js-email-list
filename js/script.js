const emailsArray = [];
const generateButton = document.getElementById("generate-button");
const emailsForm = document.getElementById("emails-form");

const getRandomEmail = () => {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      emailsArray.push(email);
    });
};

const generateEmail = (number) => {
  emailsArray.length = 0;
  for (let i = 0; i < number; i++) {
    getRandomEmail();
  }
};
generateEmail(10);
console.log(emailsArray);
