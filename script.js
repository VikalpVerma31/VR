const questions = [
    {
        question:"भारत में समाजशास्त्र के विस्तार का वास्तविक दौर किस वर्ष से प्रारम्भ हुआ ?",
        answers: [
            { text: "1919", correct: false},
            { text: "1939", correct: false},
            { text: "1952", correct: true},
            { text: "1970", correct: false},
        ] 
    },

    {
        question:"अवलोकन में तथ्य संकलन का मुख्य साधन क्या है ?",
        answers: [
            { text: "नाक", correct: false},
            { text: "आँखें", correct: true},
            { text: "कान", correct: false},
            { text: "जीभ", correct: false},
        ] 
    },

    {
        question:"उत्तर प्राप्त न होना किस पद्धति की मुख्य समस्या है ?",
        answers: [
            { text: "प्रश्नावली", correct: true},
            { text: "साक्षात्कार", correct: false},
            { text: "अनुसूची", correct: false},
            { text: "सहभागी", correct: false},
        ] 
    },

    {
        question:"निम्न में से सामाजिक वस्तु कौन-सा है ? सर्वेक्षण का क्षेत्र एवं विषय",
        answers: [
            { text: "विचार या मनोवृत्ति", correct: false},
            { text: "जनसंख्यात्मक विशेषताएँ", correct: false},
            { text: "सामाजिक पर्यावरण", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"किस विधा के लिए बहुत अधिक दक्षता एवं कौशल की आवश्यकता होती है ?C",
        answers: [
            { text: "प्रतिवेदन लेखक", correct: true},
            { text: "विश्लेषण", correct: false},
            { text: "सर्वेक्षण", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"किसने कहा कि 'एक निदर्शन सम्पूर्ण समूह का न्यूनतम प्रतिनिधि है' ?",
        answers: [
            { text: "सिम्पसन", correct: false},
            { text: "गुडे एवं हट", correct: true},
            { text: "चाइल्ड", correct: false},
            { text: "जहोदा", correct: false},
        ] 
    },

    {
        question:"प्रोजेक्ट प्रणाली आधारित है -",
        answers: [
            { text: "चयन के सिद्धांत पर", correct: false},
            { text: "नियमीकरण के सिद्धांत पर", correct: false},
            { text: "प्रेरणा के सिद्धांत पर", correct: false},
            { text: "करके सीखने के सिद्धांत पर", correct: true},
        ] 
    },

    {
        question:" बीरस्टीड के अनुसार समाजशास्त्र एक विज्ञान है-",
        answers: [
            { text: "आत्मनिर्भर", correct: false},
            { text: "विशुद्ध", correct: true},
            { text: "विश्लेषण पद्धति", correct: false},
            { text: "संश्लेषण पद्धति", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किनको हम डाटा के उदाहरण के रूप मे वर्णित करते हैं ?",
        answers: [
            { text: "विद्यार्थियों के नाम", correct: false},
            { text: "व्यक्तियों के वेतन", correct: false},
            { text: "व्यक्तियों के नाम", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:" आत्मसात की प्रक्रिया दशा कौन-सी है ? को हतोत्साहित करने वाली",
        answers: [
            { text: "सहिष्णुता", correct: false},
            { text: "प्रभुत्व", correct: true},
            { text: "संस्कृति", correct: false},
            { text: "सामाजिक", correct: false},
        ] 
    },

    {
        question:"भौतिक घटनाएँ परिणात्मक होती हैं जबकि सामाजिक घटनाएँ -",
        answers: [
            { text: "गुणात्मक", correct: true},
            { text: "मात्रात्मक", correct: false},
            { text: "प्रेरणात्मक", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन सी प्रदत्त परिस्थिति नहीं है ?",
        answers: [
            { text: "विद्यार्थी", correct: true},
            { text: "महिला", correct: false},
            { text: "शूद्र", correct: false},
            { text: "ब्राह्मण", correct: false},
        ] 
    },

    {
        question:"किसी वस्तु, प्रघटना अथवा तथ्य के बारे में किया गया अमूर्त निरीक्षण क्या है ?",
        answers: [
            { text: "तथ्य", correct: false},
            { text: "शब्द", correct: false},
            { text: "जाल", correct: false},
            { text: "अवधारणा", correct: true},
        ] 
    },

    {
        question:"समाजशास्त्र को व्यवस्थित रूप किसने प्रदान किया?",
        answers: [
            { text: "मैक्स वेबर", correct: false},
            { text: "हरबर्ट स्पेंसर            ", correct: false},
            { text: "मार्क्स", correct: false},
            { text: "इमाईल दुर्खीम", correct: true},
        ] 
    },

    {
        question:"निम्न में से कौन-सी शोध सम्बन्धित प्रश्न से है ?",
        answers: [
            { text: "सैल्टिज", correct: false},
            { text: "जहोदा", correct: false},
            { text: "एकोफ", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"किस विद्वान ने विज्ञान की परिभाषा की छः मुख्य प्रक्रियाओं के रूप में की है ?",
        answers: [
            { text: "लैण्डिस", correct: false},
            { text: "बर्नाड", correct: true},
            { text: "चाइल्ड", correct: false},
            { text: "चेविन", correct: false},
        ] 
    },

    {
        question:"हाइमैन ने सामाजिक सर्वेक्षण के कितने प्रकार बताये हैं ?",
        answers: [
            { text: "एक", correct: false},
            { text: "दो", correct: true},
            { text: "तीन", correct: false},
            { text: "चार", correct: false},
        ] 
    },

    {
        question:"केन्द्रीय प्रकृति का सर्वोत्तम एवं आदर्श माप है -",
        answers: [
            { text: "बहुलक", correct: false},
            { text: "चल-माध्य", correct: false},
            { text: "समान्तार माध्य", correct: true},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"केन्द्रीय धर्मशास्त्र के अनुसार पुरूषार्थों की संख्या कितनी है ?",
        answers: [
            { text: "एक", correct: false},
            { text: "दो", correct: false},
            { text: "तीन", correct: false},
            { text: "चार", correct: true},
        ] 
    },

    {
        question:"गाँधीजी की आत्मकथा निम्नलिखित में से कौन-सी है ?",
        answers: [
            { text: "यंग इण्डिया", correct: false},
            { text: "सत्य के साथ मेरे प्रयोग", correct: true},
            { text: "हिन्द स्वराज", correct: false},
            { text: "ग्राम स्वराज", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से 'सत्यशोधक समाज' की स्थापना किसने की ?",
        answers: [
            { text: "डॉ. अम्बेडकर", correct: false},
            { text: "ऐनी बेसेंट", correct: false},
            { text: "ज्योति राव फुले", correct: true},
            { text: "महात्मा गाँधी", correct: false},
        ] 
    },

    {
        question:"'पूर्ण स्वराज' की माँग किसने की थी ?",
        answers: [
            { text: "विपिन चन्द्र पाल", correct: false},
            { text: "अरविन्द घोष", correct: false},
            { text: "बाल गंगाधर तिलक", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"समाजशास्त्र का सबसे निकट संबंध है -",
        answers: [
            { text: "मनोविज्ञान", correct: true},
            { text: "इतिहास", correct: false},
            { text: "राजनीति", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:" सारी दुनिया में कौन सा सबसे बड़ा धार्मिक समूह है ?",
        answers: [
            { text: "इस्लाम", correct: false},
            { text: "हिन्दु धर्म", correct: false},
            { text: "ईसाई धर्म", correct: true},
            { text: "बौद्ध धर्म", correct: false},
        ] 
    },

    {
        question:"भारत का पहला स्नातक स्तर का समाजशास्त्र विभाग कब खुला ?",
        answers: [
            { text: "1911", correct: false},
            { text: "1912", correct: false},
            { text: "1914", correct: false},
            { text: "1917", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में से आप किसे भारतीय संस्कृति का आधार मानते हैं ?",
        answers: [
            { text: "अंग्रेजी भाषा", correct: false},
            { text: "आध्यात्मवाद", correct: true},
            { text: "व्यवस्था", correct: false},
            { text: "प्रेस", correct: false},
        ] 
    },

    {
        question:"सांस्कृतिकरण आंशिक रूप से किसकी गतिशीलता को समझने में सहायक है ?",
        answers: [
            { text: "जातीयता का", correct: true},
            { text: "समाज का", correct: false},
            { text: "व्यक्ति का", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"लखनऊ विश्वविद्यालय के समाजशास्त्र और अर्थशास्त्र के संयुक्त विभाग कब खुला ?",
        answers: [
            { text: "1920", correct: false},
            { text: "1921", correct: true},
            { text: "1911", correct: false},
            { text: "1923", correct: false},
        ] 
    },

    {
        question:"किस विद्वान के अनुसार हिन्दू आश्रम व्यवस्था पुरूषार्थ के सिद्धान्त की अभिव्यक्ति है ?",
        answers: [
            { text: "केतकर", correct: true},
            { text: "कपाड़िया", correct: false},
            { text: "कार्ब", correct: false},
            { text: "ब्रजनाम सिंह", correct: false},
        ] 
    },

    {
        question:"सड़क के बायें ओर चलना या दाएँ हाथ से भोजन करना निम्नलिखित में से किसके उदाहरण हैं ?",
        answers: [
            { text: "नैतिकता", correct: false},
            { text: "परिपाटी", correct: true},
            { text: "प्रथा 6", correct: false},
            { text: "अधिकार", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन-सा विचारक सामाजिक समझौते के सिद्धांत से जुड़ा हुआ नहीं है ?",
        answers: [
            { text: "लॉक", correct: false},
            { text: "हॉब्स", correct: false},
            { text: "रूसो", correct: false},
            { text: "चाणक्य", correct: true},
        ] 
    },

    {
        question:"ए. एम. शाह को जीवनकाल उपलब्धि का अवार्ड कब प्राप्त हुआ ?",
        answers: [
            { text: "2003", correct: false},
            { text: "2005", correct: false},
            { text: "1996", correct: false},
            { text: "2009", correct: true},
        ] 
    },

    {
        question:"आत्म के प्रकार्यों का उल्लेख किसने किया है ?",
        answers: [
            { text: "स्पेन्सर", correct: false},
            { text: "ब्लूमर", correct: false},
            { text: "मीड", correct: true},
            { text: "कोहन", correct: false},
        ] 
    },

    {
        question:"मैक्स वेबर के अनुसार 'निर्वचनात्मक समझ' किसके साथ जुड़ा होता है ?",
        answers: [
            { text: "प्रकार्य", correct: false},
            { text: "कार्य कारण", correct: true},
            { text: "अकार्य", correct: false},
            { text: "परिणाम", correct: false},
        ] 
    },

    {
        question:"सामाजिक परिवर्तन निम्न में से किसमें नहीं आता है ?",
        answers: [
            { text: "कानून", correct: false},
            { text: "परम्परा", correct: true},
            { text: "शिक्षा", correct: false},
            { text: "धर्म", correct: false},
        ] 
    },

    {
        question:"स्व का जब समाजीकरण होता है तो क्या बनता है ?",
        answers: [
            { text: "मेरा", correct: true},
            { text: "आत्मा", correct: false},
            { text: "सत्य", correct: false},
            { text: "राष्ट्रवाद", correct: false},
        ] 
    },

    {
        question:"सन्तुलनवादी संघर्ष को किस प्रकार की शक्ति मानते हैं ?",
        answers: [
            { text: "सकारात्मक", correct: false},
            { text: "नकारात्मक", correct: true},
            { text: "प्रकार्यात्मक", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"किसने संघर्ष की दो विशेषताओं तीव्रता व हिंसा का उल्लेख किया है -",
        answers: [
            { text: "हिटलर", correct: false},
            { text: "वेबलिन", correct: false},
            { text: "डेहरनडोर्फ", correct: true},
            { text: "मार्क्स", correct: false},
        ] 
    },

    {
        question:"'द फिनॉमिनालॉजी ऑफ द सोशल वर्ल्ड' पुस्तक के लेखक कौन हैं ?",
        answers: [
            { text: "अल्फ्रेड शूट्ज", correct: true},
            { text: "स्पेन्सर", correct: false},
            { text: "दुर्खीम", correct: false},
           
        ] 
    },

    {
        question:"गॉफमैन ने 'द प्रेजेण्टेशन ऑफ सेल्फ इन एवरी डे लाइफ' में किसकी विवेचना की है ?",
        answers: [
            { text: "स्व", correct: false},
            { text: "मेरा", correct: false},
            { text: "दिन-प्रतिदिन कार्य", correct: true},
            { text: "सामाजिक संरचना", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्रीय अवधारणा में 'सामान्य भाषा दर्शन का उपयोग सर्वप्रथम किसने किया था ?",
        answers: [
            { text: "गिलबर्ट राइल", correct: true},
            { text: "शूज", correct: false},
            { text: "मीड", correct: false},
            { text: "स्पेन्सर", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी रचना गीर्ट्ज की नहीं ?",
        answers: [
            { text: "स्टडीज इन एथनोमैथडोलॉजी", correct: true},
            { text: "आफ्टर द फैक्ट", correct: false},
            { text: "लोकल नॉलेज", correct: false},
            { text: "वर्क्स एण्ड लाइव", correct: false},
        ] 
    },

    {
        question:"किस समाजशास्त्री ने सामाजिक संरचना को एक विशिष्ट क्रमबद्धता के रूप में देखा है ?",
        answers: [
            { text: "मानहीम", correct: false},
            { text: "ऐरोन", correct: false},
            { text: "पारसन्स", correct: true},
            { text: "मौरिस", correct: false},
        ] 
    },

    {
        question:"गॉफमैन की कृति, 'प्रेजेण्टेशन ऑफ सेल्फ इन एवरीडे लाइफ' का केन्द्रीय परिप्रेक्ष्य क्या है ?",
        answers: [
            { text: "नाट्यकला", correct: true},
            { text: "नव-प्रकार्यवाद", correct: false},
            { text: "प्रतीकात्मक", correct: false},
            { text: "सामाजिक", correct: false},
        ] 
    },

    {
        question:"आत्मसात किसका पर्यायवाची है ?",
        answers: [
            { text: "सात्मीकरण", correct: true},
            { text: "प्रसार", correct: false},
            { text: "प्रतिष्ठा", correct: false},
            { text: "भीड़", correct: false},
        ] 
    },

    {
        question:" जो एक व्यवस्था से अनुकूलन सामंजस्य बनाए रखते हैं, वे कहलाते हैं- ",
        answers: [
            { text: "प्रकार्य", correct: true},
            { text: "अकार्य", correct: false},
            { text: "गुप्त कार्य", correct: false},
            { text: "समारोह", correct: false},
        ] 
    },

    {
        question:"प्रकार्य का सम्बन्ध का निर्माण करने वाली इकाइयों से है -",
        answers: [
            { text: "भाषा", correct: false},
            { text: "प्रकार्य", correct: false},
            { text: "सामाजिक संरचना", correct: true},
            { text: "निर्माण", correct: false},
        ] 
    },

    {
        question:"आवश्यकता है? सिद्धांत निम्न में से किसकी देन",
        answers: [
            { text: "दुर्बीम", correct: false},
            { text: "मैलिनोवस्की", correct: true},
            { text: "मीड", correct: false},
            { text: "मर्टन", correct: false},
        ] 
    },

    {
        question:"'द वे ऑफ द मास्क' प्रसिद्ध पुस्तक किसकी रचना है ?",
        answers: [
            { text: "पारसन्स", correct: false},
            { text: "लेवी स्ट्रास", correct: true},
            { text: "ब्राउन", correct: false},
            { text: "नाडेल", correct: false},
        ] 
    },

    {
        question:"मर्टन ने पैराटाइम के कितने चरण बताए हैं ?",
        answers: [
            { text: "11", correct: true},
            { text: "12", correct: false},
            { text: "13", correct: false},
            { text: "14", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 