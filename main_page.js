user = localStorage.getItem("user");

document.getElementById("heading").innerHTML = "Welcome "+user+"!";

var questions = [
    "Not easy (The answer is NOT 'hard'); requiring great physical or mental effort to accomplish or comprehend or endure",
    "Something that treats or prevents or alleviates the symptoms of disease",
    "A regulator for controlling the flow of a liquid from a reservoir",
    "Cause fear in",
    "Easily diffused or spread as from one person to another"
]

var real_answers = [
    "difficult",
    "medicine",
    "faucet",
    "frighten",
    "contagious"
]

question_number = 1;

player_score = 0;

number = 1;

answer_num = 0;

document.getElementById("output").innerHTML = questions[0];

document.getElementById("question_number").innerHTML = question_number + "/5";

input = document.getElementById("answer").value;

player_answer = input.toLowerCase();



function submit() {
    if (player_answer == " ") {
        console.log("Type in the word");
        document.getElementById()
    }
    else {
        if(question_number<5) {
            question_number = question_number + 1;
        }
        document.getElementById("question_number").innerHTML = question_number + "/5";

        if (number<5) {
            document.getElementById("output").innerHTML = questions[number];
            number = number + 1;
        }
        if(player_answer == real_answers[answer_num]) {
            player_score = player_score +1;
            console.log(player_score);
            answer_num = answer_num + 1;
        }
    }
}

//for (i = 1; i<=5; i++) {}