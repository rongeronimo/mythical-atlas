const words = document.querySelectorAll(".word");
const descriptionEl = document.querySelector(".description-rotator");

const descriptions = [
    "Explore legendary creatures, folklores, and urban legends from around the world.",
    "世界中の伝説の生き物、民間伝承、都市伝説を探検しよう",
    "Terokai makhluk legenda, cerita rakyat, dan legenda bandar dari seluruh dunia.",
    "Explora criaturas legendarias, folklore y leyendas urbanas de todo el mundo.",
    "Explorez les créatures légendaires, le folklore et les légendes urbaines du monde entier.",
    "Entdecke legendäre Kreaturen, Folklore und urbane Legenden aus aller Welt.",
    "Utforsk legendariske skapninger, folketro og urbane legender fra hele verden.",
    "استكشف المخلوقات الأسطورية والفولكلور والأساطير الحضرية من جميع أنحاء العالم."
];

const wordArray = [];

let currentIndex = 0;

const TITLE_LETTER_DELAY = 80;
const CHANGE_DELAY = 6000;

// -------------------------
// Initialize
// -------------------------

words.forEach(splitLetters);

words[0].style.opacity = 1;
descriptionEl.textContent = descriptions[0];

setInterval(changeContent, CHANGE_DELAY);

// -------------------------
// Split title into letters
// -------------------------

function splitLetters(word) {

    const letters = [];
    const chars = Array.from(word.textContent);

    word.textContent = "";

    chars.forEach(char => {

        const span = document.createElement("span");

        span.className = "letter";
        span.innerHTML = char === " " ? "&nbsp;" : char;

        word.appendChild(span);

        letters.push(span);

    });

    wordArray.push(letters);

}

// -------------------------
// Change both title & description
// -------------------------

function changeContent(){

    const nextIndex =
        currentIndex === wordArray.length - 1
            ? 0
            : currentIndex + 1;

    animateTitle(
        wordArray[currentIndex],
        wordArray[nextIndex]
    );

    // Description follows shortly after title
    gsap.delayedCall(0.25, () => {
        animateDescription(nextIndex);
    });

    currentIndex = nextIndex;

}

// -------------------------
// Title animation
// -------------------------

function animateTitle(current, next){

    current.forEach((letter, i)=>{

        setTimeout(()=>{
            letter.className = "letter out";
        }, i * TITLE_LETTER_DELAY);

    });

    next.forEach(letter=>{
        letter.className = "letter behind";
    });

    next[0].parentElement.style.opacity = 1;

    next.forEach((letter,i)=>{

        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * TITLE_LETTER_DELAY);

    });

    setTimeout(()=>{

        current[0].parentElement.style.opacity = 0;

    },340 + next.length * TITLE_LETTER_DELAY);

}

// -------------------------
// Description animation
// -------------------------

function animateDescription(index){

    gsap.timeline()

    .to(descriptionEl,{
        duration:0.25,
        rotateX:90,
        opacity:0,
        ease:"power2.in"
    })

    .add(()=>{

        descriptionEl.textContent = descriptions[index];

    })

    .set(descriptionEl,{
        rotateX:-90
    })

    .to(descriptionEl,{
        duration:0.35,
        rotateX:0,
        opacity:1,
        ease:"back.out(1.7)"
    });

}