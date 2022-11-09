import promptSync from 'prompt-sync';
const prompt = promptSync();

let score=0;

let quiz = [
 {
   question: "who is the current prime minister of pakistan?",
   options: ["a-imran khan","b-shahbaz shareef"],
   ans: "b"
 },
 {
   question: "Which is the national animal of Pakistan?",
   options: ["a-markhor","b-tiger"],
   ans: "a"
 },
 {
   question: "Which is the national bird of Pakistan?",
   options: ["a-chakor","b-peacock"],
   ans: "a"
 },
 {
   question: "who is the current president of pakistan?",
   options: ["a-mamnoon hussain", "b-arif alvi"],
   ans: "b"
 },
 {
   question: "which is the capital of pakistan?",
   options: ["a-karachi", "b-islamabad"],
   ans: "b"
 }
];

quiz.map((i)=>{
 let q=prompt(`${i.question} \n ${i.options} :`);
 let a= q == i.ans ? "correct" : "wrong";
 if( a== "correct"){
  score++
 }
 console.log(a);
})

console.log(`your score is ${score} out of ${quiz.length}`);
