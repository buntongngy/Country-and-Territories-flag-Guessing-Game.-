const flags = [
    { country: "Afghanistan", imageUrl: "flag/Afghanistan.png" },
    { country: "Albania", imageUrl: "flag/Albania.png" },
    { country: "Algeria", imageUrl: "flag/Algeria.png" },
    { country: "American Samoa", imageUrl: "flag/American_Samoa.png"},
    { country: "Andorra", imageUrl: "flag/Andorra.png"},
    { country: "Angola", imageUrl: "flag/Angola.png" },
    { country: "Anguilla", imageUrl: "flag/Anguilla.png"},
    { country: "Antigua and Barbuda", imageUrl: "flag/Antigua_and_Barbuda.png"},
    { country: "Argentina", imageUrl: "flag/Argentina.png" },
    { country: "Armenia", imageUrl: "flag/Armenia.png" },
    { country: "Aruba", imageUrl: "flag/Aruba.png"},
    { country: "Australia", imageUrl: "flag/Australia.png" },
    { country: "Austria", imageUrl: "flag/Austria.png" },
    { country: "Azerbaijan", imageUrl: "flag/Azerbaijan.png" },
    { country: "Bahamas", imageUrl: "flag/Bahamas.png"},
    { country: "Bahrain", imageUrl: "flag/Bahrain.png"},
    { country: "Bangladesh", imageUrl: "flag/Bangladesh.png" },
    { country: "Barbados", imageUrl: "flag/Barbados.png"},
    { country: "Belarus", imageUrl: "flag/Belarus.png" },
    { country: "Belgium", imageUrl: "flag/Belgium.png" },
    { country: "Belize", imageUrl: "flag/Belize.png"},
    { country: "Benin", imageUrl: "flag/Benin.png" },
    { country: "Bermuda", imageUrl: "flag/Bermuda.png"},
    { country: "Bhutan", imageUrl: "flag/Bhutan.png" },
    { country: "Bolivia", imageUrl: "flag/Bolivia.png" },
    { country: "Bosnia", imageUrl: "flag/Bosnia.png"},
    { country: "Botswana", imageUrl: "flag/Botswana.png" },
    { country: "Brazil", imageUrl: "flag/Brazil.png" },
    { country: "British Virgin Islands", imageUrl: "flag/British_Virgin_Islands.png"},
    { country: "Brunei", imageUrl: "flag/Brunei.png" },
    { country: "Bulgaria", imageUrl: "flag/Bulgaria.png" },
    { country: "Burkina Faso", imageUrl: "flag/Burkina_Faso.png" },
    { country: "Burundi", imageUrl: "flag/Burundi.png" },
    { country: "Cambodia", imageUrl: "flag/Cambodia.png" },
    { country: "Cameroon", imageUrl: "flag/Cameroon.png" },
    { country: "Canada", imageUrl: "flag/Canada.png" },
    { country: "Cape Verde", imageUrl: "flag/Cape_Verde.png"},
    { country: "Cayman Islands", imageUrl: "flag/Cayman_Islands.png"},
    { country: "Central African Republic", imageUrl: "flag/Central_African_Republic.png"},
    { country: "Chad", imageUrl: "flag/Chad.png"},
    { country: "Chile", imageUrl: "flag/Chile.png" },
    { country: "China", imageUrl: "flag/China.png" },
    { country: "Christmas Island", imageUrl: "flag/Christmas_Island.png"},
    { country: "Colombia", imageUrl: "flag/Colombia.png" },
    { country: "Comoros", imageUrl: "flag/Comoros.png" },
    { country: "Cook Islands", imageUrl: "flag/Cook_Islands.png"},
    { country: "Costa Rica", imageUrl: "flag/Costa_Rica.png" },
    { country: "Ivory Coast", imageUrl: "flag/Ivory_Coast.png"},
    { country: "Croatia", imageUrl: "flag/Croatia.png" },
    { country: "Cuba", imageUrl: "flag/Cuba.png" },
    { country: "Cyprus", imageUrl: "flag/Cyprus.png" },
    { country: "Cyprus Northern", imageUrl: "flag/Cyprus_Northern.png"},
    { country: "Czech Republic", imageUrl: "flag/Czech_Republic.png" },
    { country: "Democratic Republic of the Congo", imageUrl: "flag/Democratic_Republic_of_the_Congo.png"},
    { country: "Denmark", imageUrl: "flag/Denmark.png" },
    { country: "Djibouti", imageUrl: "flag/Djibouti.png"},
    { country: "Dominica", imageUrl: "flag/Dominica.png" },
    { country: "Dominican Republic", imageUrl: "flag/Dominican_Republic.png"},
    { country: "Ecuador", imageUrl: "flag/Ecuador.png" },
    { country: "Egypt", imageUrl: "flag/Egypt.png" },
    { country: "El Salvador", imageUrl: "flag/El_Salvador.png" },
    { country: "Equatorial Guinea", imageUrl: "flag/Equatorial_Guinea.png" },
    { country: "Eritrea", imageUrl: "flag/Eritrea.png" },
    { country: "Estonia", imageUrl: "flag/Estonia.png" },
    { country: "Eswatini", imageUrl: "flag/Swaziland.png" },
    { country: "Ethiopia", imageUrl: "flag/Ethiopia.png" },
    { country: "Falkland Islands", imageUrl: "flag/Falkland_Islands.png"},
    { country: "Faroe Island", imageUrl: "flag/Faroe_Islands.png"},
    { country: "Fiji", imageUrl: "flag/Fiji.png" },
    { country: "Finland", imageUrl: "flag/Finland.png" },
    { country: "France", imageUrl: "flag/France.png" },
    { country: "France Polynesia", imageUrl: "flag/French_Polynesia.png"},
    { country: "Gabon", imageUrl: "flag/Gabon.png" },
    { country: "Gambia", imageUrl: "flag/Gambia.png" },
    { country: "Georgia", imageUrl: "flag/Georgia.png" },
    { country: "Germany", imageUrl: "flag/Germany.png" },
    { country: "Ghana", imageUrl: "flag/Ghana.png" },
    { country: "Giberaltar", imageUrl: "flag/Gibraltar.png"},
    { country: "Greece", imageUrl: "flag/Greece.png" },
    { country: "Greenland", imageUrl: "flag/Greenland.png"},
    { country: "Grenada", imageUrl: "flag/Grenada.png"},
    { country: "Guam", imageUrl: "flag/Guam.png"},
    { country: "Guatemala", imageUrl: "flag/Guatemala.png" },
    { country: "Guinea", imageUrl: "flag/Guinea.png" },
    { country: "Guinea-Bissau", imageUrl: "flag/Guinea_Bissau.png" },
    { country: "Guyana", imageUrl: "flag/Guyana.png" },
    { country: "Haiti", imageUrl: "flag/Haiti.png" },
    { country: "Honduras", imageUrl: "flag/Honduras.png" },
    { country: "Hong Kong", imageUrl: "flag/Hong_Kong.png"},
    { country: "Hungary", imageUrl: "flag/Hungary.png" },
    { country: "Iceland", imageUrl: "flag/Iceland.png" },
    { country: "India", imageUrl: "flag/India.png" },
    { country: "Indonesia", imageUrl: "flag/Indonesia.png" },
    { country: "Iran", imageUrl: "flag/Iran.png" },
    { country: "Iraq", imageUrl: "flag/Iraq.png" },
    { country: "Ireland", imageUrl: "flag/Ireland.png" },
    { country: "Israel", imageUrl: "flag/Israel.png" },
    { country: "Italy", imageUrl: "flag/Italy.png" },
    { country: "Jamaica", imageUrl: "flag/Jamaica.png" },
    { country: "Japan", imageUrl: "flag/Japan.png" },
    { country: "Jordan", imageUrl: "flag/Jordan.png" },
    { country: "Kazakhstan", imageUrl: "flag/Kazakhstan.png" },
    { country: "Kenya", imageUrl: "flag/Kenya.png" },
    { country: "Kiribati", imageUrl: "flag/Kiribati.png" },
    { country: "Kuwait", imageUrl: "flag/Kuwait.png" },
    { country: "Kyrgyzstan", imageUrl: "flag/Kyrgyzstan.png" },
    { country: "Laos", imageUrl: "flag/Laos.png" },
    { country: "Latvia", imageUrl: "flag/Latvia.png" },
    { country: "Lebanon", imageUrl: "flag/Lebanon.png" },
    { country: "Lesotho", imageUrl: "flag/Lesotho.png" },
    { country: "Liberia", imageUrl: "flag/Liberia.png" },
    { country: "Libya", imageUrl: "flag/Libya.png" },
    { country: "Liechtenstein", imageUrl: "flag/Liechtenstein.png" },
    { country: "Lithuania", imageUrl: "flag/Lithuania.png" },
    { country: "Luxembourg", imageUrl: "flag/Luxembourg.png" },
    { country: "Macao", imageUrl: "flag/Macao.png"},
    { country: "Madagascar", imageUrl: "flag/Madagascar.png" },
    { country: "Malawi", imageUrl: "flag/Malawi.png" },
    { country: "Malaysia", imageUrl: "flag/Malaysia.png" },
    { country: "Maldives", imageUrl: "flag/Maldives.png" },
    { country: "Mali", imageUrl: "flag/Mali.png" },
    { country: "Malta", imageUrl: "flag/Malta.png" },
    { country: "Marshall Islands", imageUrl: "flag/Marshall_Islands.png" },
    { country: "Martinique", imageUrl: "flag/Martinique.png"},
    { country: "Mauritania", imageUrl: "flag/Mauritania.png" },
    { country: "Mauritius", imageUrl: "flag/Mauritius.png" },
    { country: "Mexico", imageUrl: "flag/Mexico.png" },
    { country: "Micronesia", imageUrl: "flag/Micronesia.png" },
    { country: "Moldova", imageUrl: "flag/Moldova.png" },
    { country: "Monaco", imageUrl: "flag/Monaco.png" },
    { country: "Mongolia", imageUrl: "flag/Mongolia.png" },
    { country: "Montenegro", imageUrl: "flag/Montenegro.png" },
    { country: "Montserrat", imageUrl: "flag/Montserrat.png"},
    { country: "Morocco", imageUrl: "flag/Morocco.png" },
    { country: "Mozambique", imageUrl: "flag/Mozambique.png" },
    { country: "Myanmar", imageUrl: "flag/Myanmar.png" },
    { country: "Namibia", imageUrl: "flag/Namibia.png" },
    { country: "Nauru", imageUrl: "flag/Nauru.png" },
    { country: "Nepal", imageUrl: "flag/Nepal.png" },
    { country: "Netherlands", imageUrl: "flag/Netherlands.png" },
    { country: "Netherland Antilles", imageUrl: "flag/Netherlands_Antilles.png"},
    { country: "New Zealand", imageUrl: "flag/New_Zealand.png" },
    { country: "Nicaragua", imageUrl: "flag/Nicaragua.png" },
    { country: "Niger", imageUrl: "flag/Niger.png" },
    { country: "Nigeria", imageUrl: "flag/Nigeria.png" },
    { country: "Niue", imageUrl: "flag/Niue.png"},
    { country: "Norfolk Island", imageUrl: "flag/Norfolk_Island.png"},
    { country: "North Korea", imageUrl: "flag/North_Korea.png" },
    { country: "North Macedonia", imageUrl: "flag/Macedonia.png" },
    { country: "Norway", imageUrl: "flag/Norway.png" },
    { country: "Oman", imageUrl: "flag/Oman.png" },
    { country: "Pakistan", imageUrl: "flag/Pakistan.png" },
    { country: "Palau", imageUrl: "flag/Palau.png" },
    { country: "Palestine", imageUrl: "flag/Palestine.jpg" },
    { country: "Panama", imageUrl: "flag/Panama.png" },
    { country: "Papua New Guinea", imageUrl: "flag/Papua_New_Guinea.png" },
    { country: "Paraguay", imageUrl: "flag/Paraguay.png" },
    { country: "Peru", imageUrl: "flag/Peru.png" },
    { country: "Philippines", imageUrl: "flag/Philippines.png" },
    { country: "Pitcairin Island", imageUrl: "flag/Pitcairn_Islands.png"},
    { country: "Poland", imageUrl: "flag/Poland.png" },
    { country: "Portugal", imageUrl: "flag/Portugal.png" },
    { country: "Puerto Rico", imageUrl: "flag/Puerto_Rico.png"},
    { country: "Qatar", imageUrl: "flag/Qatar.png" },
    { country: "Republic of the Congo", imageUrl: "flag/Republic_of_the_Congo.png"},
    { country: "Romania", imageUrl: "flag/Romania.png" },
    { country: "Russia", imageUrl: "flag/Russian_Federation.png" },
    { country: "Rwanda", imageUrl: "flag/Rwanda.png" },
    { country: "Saint Kitts and Nevis", imageUrl: "flag/Saint_Kitts_and_Nevis.png" },
    { country: "Saint Lucia", imageUrl: "flag/Saint_Lucia.png" },
    { country: "Saint Pierre", imageUrl: "flag/Saint_Pierre.png"},
    { country: "Saint Vincent and the Grenadines", imageUrl: "flag/Saint_Vicent_and_the_Grenadines.png" },
    { country: "Samoa", imageUrl: "flag/Samoa.png" },
    { country: "San Marino", imageUrl: "flag/San_Marino.png" },
    { country: "Sao Tome and Principe", imageUrl: "flag/Sao_Tome_and_Principe.png" },
    { country: "Saudi Arabia", imageUrl: "flag/Saudi_Arabia.png" },
    { country: "Senegal", imageUrl: "flag/Senegal.png" },
    { country: "Serbia", imageUrl: "flag/Serbia.png" },
    { country: "Seychelles", imageUrl: "flag/Seychelles.png" },
    { country: "Sierra Leone", imageUrl: "flag/Sierra_Leone.png" },
    { country: "Singapore", imageUrl: "flag/Singapore.png" },
    { country: "Slovakia", imageUrl: "flag/Slovakia.png" },
    { country: "Slovenia", imageUrl: "flag/Slovenia.png" },
    { country: "Solomon Islands", imageUrl: "flag/Soloman_Islands.png" },
    { country: "Somalia", imageUrl: "flag/Somalia.png" },
    { country: "South Africa", imageUrl: "flag/South_Africa.png" },
    { country: "South Georgia", imageUrl: "flag/South_Georgia.png"},
    { country: "South Korea", imageUrl: "flag/South_Korea.png" },
    { country: "South Sudan", imageUrl: "flag/South_Sudan.png" },
    { country: "Soviet Union", imageUrl: "flag/Soviet_Union.png"},
    { country: "Spain", imageUrl: "flag/Spain.png" },
    { country: "Sri Lanka", imageUrl: "flag/Sri_Lanka.png" },
    { country: "Sudan", imageUrl: "flag/Sudan.png" },
    { country: "Suriname", imageUrl: "flag/Suriname.png" },
    { country: "Sweden", imageUrl: "flag/Sweden.png" },
    { country: "Switzerland", imageUrl: "flag/Switzerland.png" },
    { country: "Syria", imageUrl: "flag/Syria.png" },
    { country: "Taiwan", imageUrl: "flag/Taiwan.png" },
    { country: "Tajikistan", imageUrl: "flag/Tajikistan.png" },
    { country: "Tanzania", imageUrl: "flag/Tanzania.png" },
    { country: "Thailand", imageUrl: "flag/Thailand.png" },
    { country: "Tibet", imageUrl: "flag/Tibet.png"},
    { country: "Timor-Leste", imageUrl: "flag/Timor-Leste.png" },
    { country: "Togo", imageUrl: "flag/Togo.png" },
    { country: "Tonga", imageUrl: "flag/Tonga.png" },
    { country: "Trinidad and Tobago", imageUrl: "flag/Trinidad_and_Tobago.png" },
    { country: "Tunisia", imageUrl: "flag/Tunisia.png" },
    { country: "Turkey", imageUrl: "flag/Turkey.png" },
    { country: "Turkmenistan", imageUrl: "flag/Turkmenistan.png" },
    { country: "Turks and Caicos Island", imageUrl: "flag/Turks_and_Caicos_Islands.png"},
    { country: "Tuvalu", imageUrl: "flag/Tuvalu.png" },
    { country: "Uganda", imageUrl: "flag/Uganda.png" },
    { country: "Ukraine", imageUrl: "flag/Ukraine.png" },
    { country: "United Arab Emirates", imageUrl: "flag/UAE.png" },
    { country: "United Kingdom", imageUrl: "flag/United_Kingdom.png" },
    { country: "United States", imageUrl: "flag/United_States_of_America.png" },
    { country: "Uruguay", imageUrl: "flag/Uruguay.png" },
    { country: "US Virgin Island", imageUrl: "flag/US_Virgin_Islands.png"},
    { country: "Uzbekistan", imageUrl: "flag/Uzbekistan.png" },
    { country: "Vanuatu", imageUrl: "flag/Vanuatu.png" },
    { country: "Vatican City", imageUrl: "flag/Vatican_City.png" },
    { country: "Venezuela", imageUrl: "flag/Venezuela.png" },
    { country: "Vietnam", imageUrl: "flag/Vietnam.png" },
    { country: "Wallis and Futuna", imageUrl: "flag/Wallis_and_Futuna.png"},
    { country: "Yemen", imageUrl: "flag/Yemen.png" },
    { country: "Zambia", imageUrl: "flag/Zambia.png" },
    { country: "Zimbabwe", imageUrl: "flag/Zimbabwe.png" }
];


let currentFlagIndex = 0;
let answer = true;
let score = 0;
let mistake = 0;
let currentDiffculty = "normal";
const getScore = document.getElementById("get-score");
const getMistake = document.getElementById("get-mistake");
const flag_question = 1;
const easy_option = 2;
const normal_option = 4;
const hard_option = 99;


//Function to initalize the game
function initGame(difficulty) {
    currentDiffculty = difficulty;
    currentFlagIndex = Math.floor(Math.random() * flags.length);
    showFlag();
    switch (difficulty) {
        case "easy":
            showOptions(flag_question, easy_option);
            break;
        case "normal":
            showOptions(flag_question, normal_option);
            break;
        case "hard":
            showOptions(flag_question, hard_option);
            break;
    }

     // Retrieve the score and high score from localStorage
     score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
     const highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;
     // Update the score and high score display
     getScore.textContent = score;
     document.getElementById("high-score").textContent = highScore;
}



// Function to display the flag image
function showFlag() {
    const flagContainer = document.getElementById("flag-container");
    flagContainer.innerHTML = `<img src="${flags[currentFlagIndex].imageUrl}" alt="Flag">`;
}

// Function to keep score

function keepScore() {
    
    if (answer == true) {
        score += 1;
    } 
    getScore.textContent = score;
    if (score > parseInt(localStorage.getItem("highScore") || 0)) {
        localStorage.setItem("highScore", score);
        document.getElementById("high-score").textContent = score;
    }
}

// Function to keep the mistake

function keepMistake() {
   
    if (answer == false) {
        mistake += 1;
    }
    getMistake.textContent = mistake;
}

// Function to reset the score
function resetScore() {
    // Reset the score variable
    score = 0;
    // Update the score display
    getScore.textContent = score;
    // Clear the stored score in localStorage
    localStorage.removeItem("score");
}

// Function to display options for guessing on easy
const optionsContainer = document.getElementById("options-container");
function showOptions(flag_question, numOptions) {
    optionsContainer.innerHTML = "";
    const options = getRandomOptions(flag_question, numOptions);
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
   
}




function getRandomOptions(flag_question, numOptions) {
    const options = [];
    
    while (options.length < numOptions - 1) {
        const randomIndex = Math.floor(Math.random() * flags.length);
        const randomCountry = flags[randomIndex].country;
        if (!options.includes(randomCountry) && randomCountry !== flags[currentFlagIndex].country) {
            options.push(randomCountry);
        }
    }
    options.push(flags[currentFlagIndex].country);
    return shuffleArray(options);
}



// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shownFlags = []; // Initialize an array to keep track of shown flags
let wrongFlags = [];

// FUnction to check the answer
function checkAnswer(guess) {
    if (guess === flags[currentFlagIndex].country) {
        answer = true;
        keepScore();
        shownFlags.push(currentFlagIndex); // Add the current flag to the array of shown flags
        do {
            currentFlagIndex = Math.floor(Math.random() * flags.length);
        } while (shownFlags.includes(currentFlagIndex)); // Ensure a different flag is selected
        showFlag(); // Show the next flag
        showOptions(flag_question, currentDiffculty === "easy" ? easy_option : currentDiffculty === "normal" ? normal_option : hard_option);
    } else {
        answer = false;
        keepMistake();
        wrongFlags.push(currentFlagIndex);
        do {
            currentFlagIndex = Math.floor(Math.random() * flags.length);
      } while (shownFlags.includes(currentFlagIndex) || wrongFlags.includes(currentFlagIndex)); // Ensure a different flag is selected
        showFlag(); // Show another flag
        showOptions(flag_question, currentDiffculty === "easy" ? easy_option : currentDiffculty === "normal" ? normal_option : hard_option);
        
    }
}

document.getElementById("restart").addEventListener("click", () => {
    score = 0;
    mistake = 0;
    getMistake.textContent = mistake;
    getScore.textContent = score;
   
    initGame(currentDiffculty);
});

document.getElementById("easy").addEventListener("click", () => {
    initGame("easy");
    alert("The game is now on easy mode");
});

document.getElementById("normal").addEventListener("click", () => {
    initGame("normal");
    alert("The game is now on normal mode");
});

document.getElementById("hard").addEventListener("click", () => {
    initGame("hard");
    alert("The game is now on Where my glasses mode");
});

initGame("normal"); // Default difficulty level