export const questions = [
    {
        question: "What is your name?",
        answer: "Nitesh",
        next: 1,
        prev: undefined,
        inputType:"text",
        allOptions:[]
    },
    {
        question: "Are you experienced on any technology?",
        answer: "JavaScript",
        next: 2,
        prev: 1,
        inputType:"dropdown",
        allOptions: ["JavaScript", "ReactJS", "HTML", "CSS"]
    },
    {
        question: "How many certifications you have?",
        answer: "One",
        next: 3,
        prev: 2,
        inputType:"radio",
        allOptions:["One", "Two", "Three", "Four"]
    },
    {
        question: "Your organization name?",
        answer: "Incedo",
        next: 4,
        prev: 3,
        inputType:"text",
        allOptions:[]
    },
    {
        question: "How experienced you are?",
        answer: "2 Years",
        next: undefined,
        prev: 4,
        inputType:"dropdown",
        allOptions: ["1 Year", "2 Years", "3 Years", "4 Years"]
    }
]