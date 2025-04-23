const emailsArray = [];
const getRandomEmail = () => {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      emailsArray.push(email);
    });
};

for (let i = 0; i < 10; i++) {
  getRandomEmail();
}
console.log(emailsArray);
