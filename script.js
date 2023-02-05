const questionandanswer = [
  {
    No: 1,
    question: "What is the rem unit based on?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",
    d: "Computer Style Sheets",
    correctanswer: "c"
  },
  {
    No: 2,
    question: "In CSS, h1 can be called as?",
    a: "Selector",
    b: "Value",
    c: "Attribute",
    d: "Tag",
    correctanswer: "d"
  }, {
    No: 3,
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "text/style ",
    b: "CSS",
    c: "style",
    d: "script",
    correctanswer: "c"
  }, {
    No: 4,
    question: "____ has introduced text, list, box, margin, border, color, and background properties.",
    a: "CSS ",
    b: "Ajax",
    c: "HTML",
    d: "PHP",
    correctanswer: "a"
  }, {
    No: 5,
    question: " CSS padding property is used for?",
    a: "Border",
    b: "Space",
    c: "Margin",
    d: "Color",
    correctanswer: "b"
  }, {
    No: 6,
    question: " Which is the correct CSS syntax?",
    a: "body {color: black}",
    b: "{body;color:black}",
    c: "{body:color=black(body}",
    d: "body:color=black",
    correctanswer: "a"
  }, {
    No: 7,
    question: " To define the space between the element’s border and content, you use the padding property, but are you allowed to use negative values?",
    a: "YES ", b: "NO", c: "unknown", d: "not true nor false",
    correctanswer: "b"
  }, {
    No: 8,
    question: "What are the three methods for using style sheets with a web page",
    a: "Dreamweaver, GoLive or FrontPage ",
    b: "Handcoded, Generated or WYSIWYG",
    c: "Inline, embedded or document level and external",
    d: "text-decoration",
    correctanswer: "c"
  },
  {
    No: 9,
    question: " In CSS, “font-size” can be called as?",
    a: "Selector",
    b: "Rule",
    c: "Property",
    d: "Property-Name",
    correctanswer: "d"
  },
  {
    No: 10,
    question: " How do you insert a comment in a CSS file?",
    a: " // this is a comment", b: "// this is a comment //", c: "‘ this is a comment", d: "/* this is a comment */",
    correctanswer: "d"
  },
  {
    No: 11,
    question: " How do you change the left margin of an element?",
    a: "left-margin:",
    b: "margin-left:",
    c: "margin:",
    d: "text-indent:",
    correctanswer: "b"
  },
  {
    No: 12,
    question: "Which CSS property controls the text size?",
    a: " font-size",
    b: "font-style",
    c: "text-style",
    d: "text-size",
    correctanswer: "a"
  },
  {
    No: 13,
    question: "____ selectors are used to specify a group of elements.",
    a: "id ",
    b: "class",
    c: "tag",
    d: "both class and tag",
    correctanswer: "b"
  },
  {
    No: 14,
    question: "How do you change the font of an element?",
    a: "font-family:",
    b: "f:",
    c: "font=",
    d: "font-style:",
    correctanswer: "a"
  },
  {
    No: 15,
    question: "How do you make each word in a text start with a capital letter?",
    a: "text-transform:capitalize",
    b: "text-transform:uppercase",
    c: "text-transform:cptl",
    d: "You can’t do that with CSS",
    correctanswer: "a"
  }
]
let currentquestion = 0
let score = 0
const quiz = document.getElementById("quiz");
const quizheader = document.getElementById("quizheader");
const question = document.getElementById("question");

const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const answer = document.querySelectorAll(".answer");
const button = document.getElementById("button");
const audio = new Audio("audio/congratssound.mp3")
const audio2=new Audio("audio/failureaudio.mp3")
const audio3=new Audio("audio/optionselectsound.mp3")

// console.log(options);
// options.forEach(item=>(item.checked?item.style.color="red":item.style.color="black"))
// result=document.getElementById("result")
// console.log(answer);
let targettime = 00
let currenttime = 20
const seconds = document.getElementById("seconds")

displayitem()
countdown()

function displayitem() {
  deselectoption();
  const qa = questionandanswer[currentquestion];
  question.innerHTML = qa.question;

  console.log(question.innerHTML);
  a_text.innerText = qa.a;
  b_text.innerText = qa.b;
  c_text.innerText = qa.c;
  d_text.innerText = qa.d;

}

function deselectoption(){
  answer.forEach(item => item.checked = false)
}
function countdown() {
  // currenttime=10

  currenttime--
if(currenttime<10){
  seconds.innerHTML = `<i class="fa-solid fa-hourglass-end"></i>&nbsp;0${currenttime}s`
}else{
  seconds.innerHTML = `<i class="fa-solid fa-hourglass-end"></i>&nbsp;${currenttime}s`

}

  if (currenttime==targettime) {
    //  quiz.innerHTML=`you ran out of time
    //  <button id="timebutton" onclick="nextquestion()">OK</button>`
    currenttime = 20
    currentquestion++
    displayitem()
  }

}
setInterval(countdown, 1000);
function selectedanswer() {

  let submittedanswer

  answer.forEach(item => {
    if (item.checked) {
      submittedanswer = item.id

      // console.log( submittedanswer);
    }
  })
  return submittedanswer
}
button.addEventListener('click', () => {
  audio3.play()
  const finalanswer = selectedanswer()
  // console.log(submittedanswer);
  // selectedanswer()

  // if(submittedanswer){
  if (finalanswer===questionandanswer[currentquestion].correctanswer) {

    score++
  }

  currentquestion++
  currenttime = 20
  if (currentquestion < questionandanswer.length) {
    displayitem();
    countdown();
  }
  else{
    if(score==0){
      quiz.innerHTML = `<i><p class="resultforscore0">You scored:${score} out of ${questionandanswer.length}<p></i>
      <img class="gif-failure"src="http://averagenobodies.com/wp-content/uploads/2014/06/andy-bernard-saying-congratulations-on-your-epic-fail.gif">
      <button class="reloadbutton" onclick="location.reload()">Reload</button> 

     `
     audio2.play()

    }
    if (score>0 &&score < 12){
      quiz.innerHTML = `<p class="resultforscore1">You scored:${score} out of ${questionandanswer.length}<p>
      <img class="gif-study-hard"src="https://media.tenor.com/cu2Gonk18tEAAAAM/nerd-sponge-bob.gif"> 
      <button class="reloadbutton1" onclick="location.reload()">Reload</button> 
       `       
    }

     if(score>=12){
      quiz.innerHTML = `<i><p class="resultforscore2">You scored:${score} out of ${questionandanswer.length}<p></i>
      <img class="gif-success"src="https://www.gifs.cc/congratulation/congrats-animation-smiley-2018.gif">
     <button class="reloadbutton2" onclick="location.reload()">Reload</button> 

    `
    audio.play()
    }
  }
}

  // }
)




