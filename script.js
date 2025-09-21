const langEN = document.getElementById('lang-en');
const langHI = document.getElementById('lang-hi');
const introHeading = document.getElementById('intro-heading');
const introDesc = document.getElementById('intro-desc');
const startBtn = document.getElementById('startBtn');

// Add all other elements you want to translate
const feature1 = document.getElementById('feature1');
const feature2 = document.getElementById('feature2');
const feature3 = document.getElementById('feature3');
const feature4 = document.getElementById('feature4');
const howItWorksTitle = document.getElementById('howItWorksTitle');
const howItWorksDesc = document.getElementById('howItWorksDesc');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const stat1 = document.getElementById('stat1');
const stat2 = document.getElementById('stat2');
const stat3 = document.getElementById('stat3');
const readyTitle = document.getElementById('readyTitle');
const readyDesc = document.getElementById('readyDesc');
const loginBtn = document.getElementById('loginBtn');
const footerText = document.getElementById('footerText');

const translations = {
  en: {
    introHeading: "Find Your Perfect Internship Match",
    introDesc: "Get personalized internship recommendations based on your education, skills, and preferences. Simple, fast, and designed for everyone.",
    startBtn: "Start Finding Internships",
    feature1: "Personalized Matches",
    feature2: "Verified Companies",
    feature3: "Easy Application",
    feature4: "Track Progress",
    howItWorksTitle: "How It Works",
    howItWorksDesc: "Follow these simple steps to get started.",
    step1: "Create your profile",
    step2: "Get recommendations",
    step3: "Apply & track",
    stat1: "10,000+ Internships",
    stat2: "5,000+ Companies",
    stat3: "20,000+ Students",
    readyTitle: "Ready to Start Your Internship Journey?",
    readyDesc: "Sign up now and unlock your future.",
    loginBtn: "Login",
    footerText: "© 2025 PM Internship Scheme. All rights reserved."
  },
  hi: {
    introHeading: "अपना परफेक्ट इंटर्नशिप मैच खोजें",
    introDesc: "अपनी शिक्षा, कौशल और प्राथमिकताओं के आधार पर व्यक्तिगत इंटर्नशिप सिफारिशें प्राप्त करें। सरल, तेज़, और सभी के लिए डिज़ाइन किया गया।",
    startBtn: "इंटर्नशिप खोजना शुरू करें",
    feature1: "व्यक्तिगत मिलान",
    feature2: "सत्यापित कंपनियाँ",
    feature3: "आसान आवेदन",
    feature4: "प्रगति ट्रैक करें",
    howItWorksTitle: "यह कैसे काम करता है",
    howItWorksDesc: "शुरू करने के लिए इन सरल चरणों का पालन करें।",
    step1: "अपनी प्रोफ़ाइल बनाएं",
    step2: "सिफारिशें प्राप्त करें",
    step3: "आवेदन करें और ट्रैक करें",
    stat1: "10,000+ इंटर्नशिप्स",
    stat2: "5,000+ कंपनियाँ",
    stat3: "20,000+ छात्र",
    readyTitle: "क्या आप अपनी इंटर्नशिप यात्रा शुरू करने के लिए तैयार हैं?",
    readyDesc: "अभी साइन अप करें और अपना भविष्य अनलॉक करें।",
    loginBtn: "लॉगिन",
    footerText: "© 2025 पीएम इंटर्नशिप योजना. सर्वाधिकार सुरक्षित।"
  }
};

function switchLanguage(lang) {
  introHeading.textContent = translations[lang].introHeading;
  introDesc.textContent = translations[lang].introDesc;
  startBtn.textContent = translations[lang].startBtn;
  feature1.textContent = translations[lang].feature1;
  feature2.textContent = translations[lang].feature2;
  feature3.textContent = translations[lang].feature3;
  feature4.textContent = translations[lang].feature4;
  howItWorksTitle.textContent = translations[lang].howItWorksTitle;
  howItWorksDesc.textContent = translations[lang].howItWorksDesc;
  step1.textContent = translations[lang].step1;
  step2.textContent = translations[lang].step2;
  step3.textContent = translations[lang].step3;
  stat1.textContent = translations[lang].stat1;
  stat2.textContent = translations[lang].stat2;
  stat3.textContent = translations[lang].stat3;
  readyTitle.textContent = translations[lang].readyTitle;
  readyDesc.textContent = translations[lang].readyDesc;
  loginBtn.textContent = translations[lang].loginBtn;
  footerText.textContent = translations[lang].footerText;

  if (lang === 'hi') {
    langHI.classList.add('active');
    langEN.classList.remove('active');
  } else {
    langEN.classList.add('active');
    langHI.classList.remove('active');
  }
}

langEN.addEventListener('click', () => {
  langEN.classList.add('active');
  langHI.classList.remove('active');
  switchLanguage('en');
});

langHI.addEventListener('click', () => {
  langHI.classList.add('active');
  langEN.classList.remove('active');
  switchLanguage('hi');
});

switchLanguage('en');


