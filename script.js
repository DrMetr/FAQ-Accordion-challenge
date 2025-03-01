const original = `What is Frontend Mentor, and how will it help me?

Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.

Is Frontend Mentor free?

Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.

Can I use Frontend Mentor projects in my portfolio?

Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!

How can I get help if I'm stuck on a Frontend Mentor challenge?

The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`;

function breakOriginal(str){
let text = str.split(/\n\n/);
let array =[];
for (let i = 0; i<text.length-1; i++){
    if (i%2 == 0){
      let textObj = {};
      textObj[text[i]] = text[i+1];
      array.push(textObj);
    }};
return array
};

let maindiv = document.getElementById("qsAndAs");
let arr = breakOriginal(original);
for (item of arr){
  for (let [key, value] of Object.entries(item)){

    let question = document.createElement("div");
    question.className = "question";
    maindiv.appendChild(question);
    let questDiv = document.createElement("div");
    question.appendChild(questDiv);
    let questPara = document.createElement("p");
    questPara.appendChild(document.createTextNode(key));
    questDiv.appendChild(questPara);

    let image = document.createElement("img");
    image.src = 'assets/images/icon-plus.svg';
    questDiv.appendChild(image);

    let answer = document.createElement("p");
    answer.className = "answer";
    answer.style.display = "none";
    answer.appendChild(document.createTextNode(value));
    question.appendChild(answer);

    question.appendChild(document.createElement("hr"));

    question.addEventListener("click", () => {
      let itsAnswer = question.querySelector(".answer");
      if (itsAnswer.style.display == ""){
        itsAnswer.style.display = "none";
        image.src = 'assets/images/icon-plus.svg';
      } else {
        itsAnswer.style.display = "";
        image.src = 'assets/images/icon-minus.svg';
      }
    });
  }};