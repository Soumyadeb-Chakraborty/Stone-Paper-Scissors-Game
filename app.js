let userScore=0;
let compScore=0;

// 3 te option/choice er moddhe kontake click kora ho66e
const choices= document.querySelectorAll(".choice") //er dara amra sokol choice ke access kor6i...ortath je elements er ka6e "choice" name er class thakbe, tarai access hobe..ortath amader ka6e 3 te div/choice asbe.


//msg ke access korlam
const msg = document.querySelector("#msg");


//userScore ke access kor6i
const userScorePara = document.querySelector("#user-score");

//compScore ke access kor6i
const compScorePara = document.querySelector("#comp-score");


// protek div er upor, karon div or img r size almost same; tai protek div er upor amra akta EventListener ke add kor6i; je amader click event ke track korbe.
//sokol choices er jonno amra indivitually choice ke select korbo.
choices.forEach((choice) => { //er fole protek indivitual div amader ka6e asbe.
    
    //console.log(choice); //indivitual div ke amra print kora66i; ortath print all the choice div.

    //protek indivitual choice/ div er jonno amra add korbo EventListener, je click event ke track korbe.
    choice.addEventListener("click", () => { //click event er track er basis e; ei ArrowFunction run hobe. ortath jokhon e protek ta choice er upor click kora hobe, tokhon e console.log statement e thaka message run hobe.


        //computer er choice ke generate korarnor jonno amra "genCompChoice" name er function baniye6i
        const genCompChoice = ()=>{

            //stone, paper, scissors ei 3 te choices/options er moddhe theke amader je computer a6e se randomly 1 ta generate korbe. randomly generate korar age amra choices/options ke akta ARRAY te store korlam.
            //jokhon amra random number generate kori, take basically ARRAY r jonno index er moto treat korbo...to sting ramdomly generate kora possible noi but number generate kora possible...ar ARRAY er moddhe number index hote pare, tai we have stored are options("stone", "paper", "scissors") in the form of an ARRAY. 
            const options = ["stone", "paper", "scissors"]; //0,1,2 er moddhe jekono random number generate hobe...ar ei number generate hoye6e, take treat korte pari as are random index; jar fole choice/option ke select korte help hobe. 


            //as such JavaScript er moddhe straight forward poddhoti nei, je onek string theke random string ber korbe...but JS er moddhe frequently function thake which is called "random" function.
            //JS e 'Math' name er class thake, jar ka6e 'random()' name er method thake...ei method er kaj holo 0 to 1 er majhe jekono random value generate korbe.
            //amader ke 0 to 2 er range e generate korate hobe. tar jonno jokhon e amra Math.random() likhbo; ja number asbe tar sathe 3 ke multiply kore debo...er fole 0.something/1.something/2.something; ei range ei amader number generate hobe; ortath je number theke 'Math.random()' ke multiply korbo, tar theke 1 ta number aage porjonto 0 to oi range porjonto numbers ke generate korte pari. 
            const randIdx = Math.floor(Math.random() * 3); //random number e thaka je sob decimal value a6e tader ke as such kono proyojon nei; tai eder ke remove korar jonno 'Math' er moddhe akta function thake which is 'Math.floor()'.


            //return comp choice
            return options[randIdx]; //ekhan theke retun hoye jabe computer er choice which is basically options er vetore ja basically [randIdx] index e value asbe...to eta amder comp er choice hobe; jeta return kore amra amader 'playGame' name er function e pathabo
        };


        //jokhon Game Draw hobe
        const drawGame=() =>{
            //console.log("game was draw 🤝...");
            
            // msg.innerText="Game was Draw. Play again.";

            // msg.innerText="Game was Draw";

            msg.innerText= "🤝";
            setTimeout(() => {
                // msg.innerHTML += "🤝"

                msg.innerText="Game was Draw 🫥";
            },1000);
            setTimeout(() => {
                msg.innerHTML = "Play again...";
            },2000);
            msg.style.backgroundColor = "purple";
        }

        const showWinner=(userWin, userChoice, compChoice) =>{ //ekhane userWin variable ke pass korano hoye6e.

            if(userWin){
                //console.log("You Win 🏆"+"🎉...");

                //user jokhon e win hobe tarpor userScore 1 kore barte thakbe
                userScore++;

                //userScore ke update korar jonno:-
                userScorePara.innerText=userScore;

                // msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;

                msg.innerText= "🏆";
                setTimeout(() => {
                    //+= use korar karon holoager valur sathe new value ke add kor6i
                    // msg.innerHTML += "🏆"; //innerText print hobar 1 sec por innerText er sathe trophy emoji add hoye show korbe.

                    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;

                    //msg.innerText = "🏆"; //innerText print hobar 1 sec por kebol trophy emoji show hobe. 
                },1000);

                    //msg.innerHTML="🏆"; //ekhetre innerText er moddhe thaka lekha remove hoye kebol emoji show hobe.

                msg.style.backgroundColor = "green";
            }else{
                //console.log("You lose 😞...");

                //user jokhon e lose hobe tarpor compScore 1 kore barte thakbe
                compScore++;

                //compScore ke update korar jonno:-
                compScorePara.innerText=compScore;

                // msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;

                msg.innerText= "😞";
                setTimeout(() => {
                    // msg.innerHTML += "😞";

                    //msg.innerText = "😞";

                    msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
                },1000);
                msg.style.backgroundColor = "red";
            }
        };


        //ekhane basically; sobar 1st e computer theke random choice generate korbo, tarpor compare korbo user jitbe na ki computer jitbe; tar hisabe amra score ke update korbo
        const playGame=(userChoice)=>{ //playGame function er jana thakbe user er choice ki.

            //console.log("user choice = ", userChoice);

            //Generate computer choice
            const compChoice = genCompChoice(); //compChoice di66e 'genComChoice()' name er function

            //console.log("comp choice = ", compChoice);

            //user & comp er fight hobe, sekhetre actually ke jitbe
            if(userChoice===compChoice){
                //Draw Game
                drawGame(); //call drawGame function
                
            } else{
                //userWin ke starting e rakhbo true...true bolar mane amra assume kor6i jeamra jite ge6i
                let userWin=true; //userWin track korbe amder user win ho66e na ki ho66ena

                //erpor amra condition ke check kora start kor6i
                //1st condition
                if(userChoice === "stone"){ //ekhetre user er choice jodi "stone" hoy tobe computer er choice to "stone" hobena, karon computer er choice jodi "stone" hoy; tobe agei Game Draw hoye jabe.
                    
                    //to computer er choice hote pare :- scissors, paper; ortath hole 'scissors" generate korbe, ar na hole "paper" generate korbe.
                    //userWin variable er dara amra track kor6i je 'user' win hobe, na ki 'comp' win hobe.
                    userWin = compChoice === "paper" ? false : true; //jodi comp er choice "paper" hoy tobe who is going to Win?; sekhetre comp jitbe & user harbe...to ei case e 'userWin' variable a6e, tar value set kora holo 'false'..ar jodi comp choose kore "scissors"; tobe sei case e "stone" er against "scissors" here jabe; ortath comp here jabe & user jite jabe; tai sei case e amra 'userWin' er value set kore6i 'true'...tai amra likhe6i false : true

                    //2nd condition
                } else if (userChoice === "paper"){ //ei case e userChoice holo "paper"
                    //to computer er choice hote pare :- stone, scissors
                    userWin = compChoice === "scissors" ? false : true;

                    //3rd condition
                } else {
                    //ei case e userChoice "scissors"
                    //to computer er choice hote pare :- stone, paper
                    userWin = compChoice === "stone" ? false : true;
                }

                //jokhon e amader userWin decide hoye jabe, tokhon e amra amader winner ke show korte pari...winner ke show koranor jonno amra 'userWin' variable ke pass korbo
                showWinner(userWin, userChoice, compChoice); //er fole amra bhujte parbo je amader user win holo, na ki hoyni.
            }
        };
        
        //userChoice
        //protekta div er id ke access korte korar jonno
        const userChoice=choice.getAttribute("id");
        //erfole amra jante parbo kon specific choice ke amra select kore6i
        //console.log("choice was clicked", userChoice); //choiceId keo print korabo

        //playGame function ke call korbo
        //erpor amra GAme ke play kora start korbo
        playGame(userChoice); //userChoice ke pass korlam
    });
});