

var words = ['the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'I', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'word', 'but', 'what', 'some', 'we', 'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then', 'them', 'write', 'would', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'number', 'sound', 'no', 'most', 'people', 'my', 'over', 'know', 'water', 'than', 'call', 'first', 'who', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great', 'think', 'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before', 'move', 'right', 'boy', 'old', 'too', 'same', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'between', 'state', 'keep', 'eye', 'never', 'last', 'let', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', 'don\'t', 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top', 'whole', 'king', 'space', 'heard', 'best', 'hour', 'better', 'true .', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fly', 'fall', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'ocean', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'equate', 'hot', 'miss', 'brought', 'heat', 'snow', 'tire', 'bring', 'yes', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand', 'ball', 'yet', 'wave', 'drop', 'heart', 'am', 'present', 'heavy', 'dance', 'engine', 'position', 'arm', 'wide', 'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight', 'general', 'ice', 'matter', 'circle', 'pair', 'include', 'divide', 'syllable', 'felt', 'perhaps', 'pick', 'sudden', 'count', 'square', 'reason', 'length', 'represent', 'art', 'subject', 'region', 'energy', 'hunt', 'probable', 'bed', 'brother', 'egg', 'ride', 'cell', 'believe', 'fraction', 'forest', 'sit', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone', 'leg', 'exercise', 'wall', 'catch', 'mount', 'wish', 'sky', 'board', 'joy', 'winter', 'sat', 'written', 'wild', 'instrument', 'kept', 'glass', 'grass', 'cow', 'job', 'edge', 'sign', 'visit', 'past', 'soft', 'fun', 'bright', 'gas', 'weather', 'month', 'million', 'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 'gone', 'jump', 'baby', 'eight', 'village', 'meet', 'root', 'buy', 'raise', 'solve', 'metal', 'whether', 'push', 'seven', 'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either', 'result', 'burn', 'hill', 'safe', 'cat', 'century', 'consider', 'type', 'law', 'bit', 'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 'soil', 'roll', 'temperature', 'finger', 'industry', 'value', 'fight', 'lie', 'beat', 'excite', 'natural', 'view', 'sense', 'ear', 'else', 'quite', 'broke', 'case', 'middle', 'kill', 'son', 'lake', 'moment', 'scale', 'loud', 'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed', 'method', 'organ', 'pay', 'age', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone', 'tiny', 'climb', 'cool', 'design', 'poor', 'lot', 'experiment', 'bottom', 'key', 'iron', 'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 'trade', 'melody', 'trip', 'office', 'receive', 'row', 'mouth', 'exact', 'symbol', 'die', 'least', 'trouble', 'shout', 'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady', 'yard', 'rise', 'bad', 'blow', 'oil', 'blood', 'touch', 'grew', 'cent', 'mix', 'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 'choose', 'fell', 'fit', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle', 'woman', 'captain', 'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose', 'locate', 'ring', 'character', 'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom', 'human', 'history', 'effect', 'electric', 'expect', 'crop', 'modern', 'element', 'hit', 'student', 'corner', 'party', 'supply', 'bone', 'rail', 'imagine', 'provide', 'agree', 'thus', 'capital', 'wont', 'chair', 'danger', 'fruit', 'rich', 'thick', 'soldier', 'process', 'operate', 'guess', 'necessary', 'sharp', 'wing', 'create', 'neighbor', 'wash', 'bat', 'rather', 'crowd', 'corn', 'compare', 'poem', 'string', 'bell', 'depend', 'meat', 'rub', 'tube', 'famous', 'dollar', 'stream', 'fear', 'sight', 'thin', 'triangle', 'planet', 'hurry', 'chief', 'colony', 'clock', 'mine', 'tie', 'enter', 'major', 'fresh', 'search', 'send', 'yellow', 'gun', 'allow', 'dead', 'spot', 'desert', 'suit', 'current', 'lift', 'rose', 'continue', 'block', 'chart', 'hat', 'sell', 'success', 'company', 'subtract', 'event', 'particular', 'deal', 'swim', 'term', 'opposite', 'wife', 'shoe', 'shoulder', 'spread', 'arrange', 'camp', 'invent', 'cotton', 'born', 'determine', 'quart', 'nine', 'truck', 'noise', 'level', 'chance', 'gather', 'shop', 'stretch', 'throw', 'shine', 'property', 'column', 'molecule', 'select', 'wrong', 'gray', 'repeat', 'require', 'broad', 'prepare', 'salt', 'nose', 'plural', 'anger', 'claim', 'continent', 'oxygen', 'sugar', 'death', 'pretty', 'skill', 'women', 'season', 'solution', 'magnet', 'silver', 'thank', 'branch', 'match', 'suffix', 'especially', 'fig', 'afraid', 'huge', 'sister', 'steel', 'discuss', 'forward', 'similar', 'guide', 'experience', 'score', 'apple', 'bought', 'led', 'pitch', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'win', 'dream', 'evening', 'condition', 'feed', 'tool', 'total', 'basic', 'smell', 'valley', 'nor', 'double', 'seat', 'arrive', 'master', 'track', 'parent', 'shore', 'division', 'sheet', 'substance', 'favor', 'connect', 'post', 'spend', 'chord', 'fat', 'glad', 'original', 'share', 'station', 'dad', 'bread', 'charge', 'proper', 'bar', 'offer', 'segment', 'slave', 'duck', 'instant', 'market', 'degree', 'populate', 'chick', 'dear', 'enemy', 'reply', 'drink', 'occur', 'support', 'speech', 'nature', 'range', 'steam', 'motion', 'path', 'liquid', 'log', 'meant', 'quotient', 'teeth', 'shell', 'neck']

var punctuation = '!"+,-./:;?\'';

//variables
var hiddentext = document.querySelector(".hiddenText")
var pageText = document.querySelector(".textContainer")

let value = 0
let letpunctuation = false;

//index used to keep track of what letter is being typed next
let index = 0
let totalKeysPressed = 0;
let correctKeysPressed = 0;
let wrongKeysPressed = function () {
    let counter = 0;
    let allCharacters = document.querySelectorAll(".Element")

    for (let i = 0; i < allCharacters.length; i++) {
        if (allCharacters[i].style.backgroundColor == "rgb(218, 51, 51)" || allCharacters[i].style.color == "rgb(218, 51, 51)") {
            counter++;
        }
    }

    return counter;
}

//vars to keep track of which options are selected
let optionSelected = null;
let custOptionSelected = null;

var timedTestinterval

//manages the timer
let time = 0;
function timer() {
    let text = document.querySelectorAll(".Element");
    let timer = document.querySelector(".timer")

    if (index != 0 && index != text.length) {
        time++;
        timer.innerHTML = Math.abs(time);
    }
}

function restartButton()
{
    switch(optionSelected)
    {
        case "words":
            createSentence(value)
            break;

        case "time":
            timedTest(value)
            break;

        case "quote":
            generateQuote()
            break;
    }
}


function formatting(sentence) {
    //deleting the previous text in the div
    pageText.children[2].innerHTML = ""



    //creates a span element of each letter of the quote
    for (let i = 0; i < sentence.length; i++) {
        let newElement = document.createElement("span")
        newElement.className = "Element"
        newElement.innerHTML = sentence[i]
        pageText.children[2].appendChild(newElement)
    }
    pageText.children[2].insertBefore(newCursor(), pageText.children[2].children[0])
}

//function that detects and manages keystrokes
function typeDetection(event) {
    //the keystrokes wont be recorded unless the body element is focused
    if (document.activeElement === document.body && document.querySelector(".text").childNodes.length >= 2) {

        

        let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'
            , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', " ", ',', '.', "'", '"', ':', ';', '?', '!', "+"]

        //list of every letter in the test
        let text = document.querySelectorAll(".Element");
        if(keys.includes(event.key)){
            console.log("yes")
        }
        //backspace functionality
        if (event.key == "Backspace" && index > 0 && checkWords() == false) {
            index--

            moveCursor()
            checkWords()

            text[index].style.color = "#4e5155"
            text[index].style.backgroundColor = "#181818"
        }


        //if the letter is typed correctly
        if (text[index].innerHTML == event.key && keys.includes(event.key)) {
            text[index].style.color = "#e5f4f4"

            correctKeysPressed++;
            totalKeysPressed++;
            index++

            moveCursor()

            //checking if the test is done
            if (index == text.length) {
                window.location.href = "results.html"
                sessionStorage.setItem("values", time + "/" + totalKeysPressed + "/" + correctKeysPressed + "/" + optionSelected + "/" + wrongKeysPressed());
                time = 0;
            }


        }

        //if the letter is typed incorrectly
        else if (text[index].innerHTML != event.key && keys.includes(event.key)) {
            text[index].style.color = "#da3333"
            if (text[index].innerHTML == " ") {
                text[index].style.backgroundColor = "#da3333"
            }
            correctKeysPressed--;
            totalKeysPressed++;
            index++

            moveCursor()

            // checking if the test is done
            if (index == text.length) {
                window.location.href = "results.html"
                sessionStorage.setItem("values", time + "/" + totalKeysPressed + "/" + correctKeysPressed + "/" + optionSelected + "/" + wrongKeysPressed());



                time = 0;
            }
        }
    }
}

function addListenner(whatToDo) {
    if (whatToDo) {
        //if whatToDo = true the event listenner will be added
        document.addEventListener("keydown", function (event) { typeDetection(event) })
    }

    else {
        //else the index will be reset resulting in restarting the test
        index = 0
        totalKeysPressed = 0
        correctKeysPressed = 0;
        checkButtons()
    }
}

//checks if the client can backspace if the word is writen uncorrectly
function checkWords() {
    let characters = document.querySelectorAll(".Element");
    if (index != 0 && characters[index - 1].innerHTML == " " && characters[index - 1].style.backgroundColor != "rgb(218, 51, 51)") {
        try {
            for (let i = index - 2; i < index; i--) {
                if (characters[i].innerHTML != " ") {
                    if (characters[i].style.color == "rgb(218, 51, 51)") {
                        return false;
                    }
                }
                else {
                    break
                }
            }

            return true;

        }

        catch {
            return true;
        }
    }

    else {
        return false;
    }

}

//manages the buttons colors
function checkButtons() {

    let buttonsBar = document.querySelector(".buttonsBarContainer")
    let allButtons = [buttonsBar.querySelector(".time"), buttonsBar.querySelector(".quoteButton"), buttonsBar.querySelector(".wordsButton")]
    let allOptionButtons = [buttonsBar.querySelector(".fifteenbutton"), buttonsBar.querySelector(".thirtybutton"), buttonsBar.querySelector(".settings")]
    let turnButtonsOff = function () {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("activated");
        }
    }

    let turnOptionButtonsOff = function () {
        for (let i = 0; i < allOptionButtons.length; i++) {
            allOptionButtons[i].classList.remove("activated");
        }
    }

    switch (optionSelected) {
        case "words":
            turnButtonsOff()
            allButtons[2].classList.add("activated")
            allOptionButtons.forEach(function (el) { el.style.display = "block" })
            break;

        case "quote":
            turnButtonsOff()
            allButtons[1].classList.add("activated");
            allOptionButtons.forEach(function (el) { el.style.display = "none" })
            break;

        case "time":
            turnButtonsOff()
            allButtons[0].classList.add("activated")
            allOptionButtons.forEach(function (el) { el.style.display = "block" })
            break;
    }

    switch (custOptionSelected) {
        case "15":
            turnOptionButtonsOff();
            allOptionButtons[0].classList.add("activated")
            break;

        case "30":
            turnOptionButtonsOff();
            allOptionButtons[1].classList.add("activated")
            break;

        case "custom":
            turnOptionButtonsOff();
            allOptionButtons[2].classList.add("activated")
            break;
    }
}

//cursor
//creates the cursor
let newCursor = function () {
    let newCursorr = document.createElement("span")
    newCursorr.className = "cursor"
    newCursorr.innerHTML = "|"
    return newCursorr
}

function moveCursor() {
    let cursor = document.querySelector(".cursor")
    cursor.parentNode.removeChild(cursor)
    pageText.children[2].insertBefore(newCursor(), pageText.children[2].children[index])
}

function optionButtonsManager(x) {
    switch (optionSelected) {
        case "words":
            createSentence(x)
            break;

        case "time":
            timedTest(x);
            break;
    }
}

//customization functionality
//gets called by the customization button
function customization() {
    let window = document.querySelector(".customization")
    window.style.visibility = "visible"
}

//manages customization pannel
function customizePannel() {
    let title = document.querySelector(".custheader")
    let discription = document.querySelector(".description")
    switch (optionSelected) {
        case "words":
            title.children[0].innerHTML = "Word customization"
            discription.innerHTML = "Input the total number of words you want in the test. (max words that could be generated is 80)"
            break;

        case "time":
            title.children[0].innerHTML = "Time customization"
            discription.innerHTML = "Input the duration of the test in seconds. (max time that could be entered is 60)"
            break;
    }
}

//gets called by the submit button of the customization pannel
function customizationSubmit() {
    let numbInput = document.querySelector(".numberInput")
    let window = document.querySelector(".customization")
    switch (optionSelected) {
        case "words":
            if (numbInput.value > 80) { numbInput.value = 80 }
            createSentence(numbInput.value)
            value = numbInput.value
            numbInput.value = ""
            window.style.visibility = "hidden"
            break;

        case "time":
            if (numbInput.value > 60) { numbInput.value = 60 }
            timedTest(numbInput.value)
            value = numbInput.value
            numbInput.value = ""
            window.style.visibility = "hidden"
            break;
    }
}

function punctuationButton()
{
    if(letpunctuation)
    {
        letpunctuation = false;
        punctuationManager()
    }

    else
    {
        letpunctuation = true;
        punctuationManager()
    }
}

function punctuationManager() {
    let punctuationButton = document.querySelector(".punctuation")                      
    let defaultText = document.querySelector(".text")
    let generatedText = ""
    if (letpunctuation) {
        let skipped = true;

        punctuationButton.classList.add("activated")
        
        for(let i = 1; i < defaultText.childNodes.length; i++)
        {
            if(skipped != true && defaultText.childNodes[i].innerHTML == " ")
            {
                generatedText += punctuation[Math.floor(Math.random() * 11)] + " ";
                skipped = true;
            }

            else if(skipped == true && defaultText.childNodes[i].innerHTML == " ")
            {
                generatedText += defaultText.childNodes[i].innerHTML
                skipped = false;
            }

            else
            {
                generatedText += defaultText.childNodes[i].innerHTML
            }
        }

        index =0
        formatting(generatedText)
    }

    else
    {
        punctuationButton.classList.remove("activated")
        for(let i =1 ; i < defaultText.childNodes.length; i++)
        {
            if(punctuation.includes(defaultText.childNodes[i].innerHTML) != true && defaultText.childNodes[i].innerHTML != "&amp;" && defaultText.childNodes[i].innerHTML != "|")
            {
                generatedText += defaultText.childNodes[i].innerHTML
            }
        }

        index =0
        formatting(generatedText)
    }
}

//modes

//generates a quote and triggered by a button
async function generateQuote() {
    optionSelected = "quote"

    //resets the listenner
    time = 0;
    addListenner(false)

    //getting random quote from API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c91473bea0msh579407be10377a1p1d25a1jsn0bf72c294234',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    const res = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)

    await res.json()
        //pasting the quote retreved to a hidden div
        .then(function (data) { hiddentext.innerHTML = data.content })

    //pasting the quote to the main div
    formatting(hiddentext.innerHTML)
    checkWords()
    punctuationManager()


}

//test ends after certain time
function checkTimer(x) {
    if (time == 0 && index != 0 && optionSelected == "time") {
        sessionStorage.setItem("values", x + "/" + index + "/" + correctKeysPressed + "/" + optionSelected + "/" + wrongKeysPressed());
        window.location.href = "results.html"
    }

    if (optionSelected != "time") {
        clearInterval(timedTestinterval)
    }
}
function timedTest(howManySeconds) {
    optionSelected = "time"
    time = 0;
    switch (howManySeconds) {
        case 15:
            custOptionSelected = "15"
            time = -15
            value = 15
            break;

        case 30:
            custOptionSelected = "30"
            time = -30
            value = 30
            break;

        default:
            custOptionSelected = "custom"
            time = -howManySeconds
            break;
    }

    addListenner(false)

    let sentence = ""
    for (let i = 0; i < 80; i++) {

        sentence += words[Math.floor((Math.random() * 10000) + 1)]
        sentence += " "

    }
    sentence = sentence.slice(0, -1)

    formatting(sentence);
    timedTestinterval = setInterval(() => { checkTimer(howManySeconds) }, 1000)
    punctuationManager()

}

//word mode
//generates random words triggered by a button
function generateWords() {
    optionSelected = "words"

    createSentence(15)
    punctuationManager()

}

//makes a sentence from random words
function createSentence(howManyWords) {
    time = 0;
    switch (howManyWords) {
        case 15:
            custOptionSelected = "15"
            value = 15
            break;

        case 30:
            custOptionSelected = "30"
            value = 30
            break;

        default:
            custOptionSelected = "custom"
            break;
    }

    addListenner(false)
    let sentence = ""
    for (let i = 0; i < howManyWords; i++) {

        sentence += words[Math.floor((Math.random() * 998) + 1)]
        sentence += " "

    }
    sentence = sentence.slice(0, -1)

    formatting(sentence);
    punctuationManager()

}



setInterval(() => {
    timer()
}, 1000);
window.addEventListener('click', (event) => {
    console.log(event.button)
})
addListenner(true)
document.querySelector(".restart").style.display = "block"
generateWords()
