const birthDate = document.querySelector("#birthDate");
const luckyNumber = document.querySelector("#luckyNumber");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");
const calculateSum = (dob) => {
  const num = dob.replaceAll("-", "");
  var add = 0;
  for (let i = 0; i < num.length; i++) {
    add = add + Number(num.charAt(i));
  }
  return add;
};

const compare = (sum, luckyNum) => {
  if (sum % luckyNum === 0) {
    output.innerText = "Your birthday is lucky 😊";
  } else {
    output.innerText = "Your birthday is unLucky 😢";
  }
};

checkBtn.addEventListener("click", () => {
  console.log("clicked");
  const sum = calculateSum(birthDate.value);
  const luckyNum = luckyNumber.value;
  if (sum && luckyNum) {
    compare(sum, luckyNum);
  } else {
    output.innerText = "Enter both inputs please";
  }
});
