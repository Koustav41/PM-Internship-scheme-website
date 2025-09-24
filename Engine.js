
const GEMINI_API_KEY = "AIzaSyCpOv56hWlaEb7nkQMFzWaZvYSTHcCHl20";

const internships = [
  { title:"Web Development Internship", sector:"it", education:"btech", location:"delhi", details:"Build real-world web apps for govt projects." },
  { title:"Healthcare Outreach Internship", sector:"healthcare", education:"ba", location:"rural", details:"Assist in rural health awareness programs." },
  { title:"Digital Marketing Internship", sector:"management", education:"mba", location:"remote", details:"Promote campaigns for youth employment." },
  { title:"Teaching Assistant Internship", sector:"education", education:"ba", location:"tribal", details:"Support digital education in tribal areas." },
  { title:"Data Analyst Internship", sector:"it", education:"diploma", location:"delhi", details:"Analyze datasets for government policy insights." }
];

const translations = {
  en:{
    header:"PM Internship Recommendation Engine",
    formTitle:"Find Your Internship",
    education:"Education",
    skills:"Skills",
    sector:"Preferred Sector",
    location:"Preferred Location",
    submit:"Get Recommendations",
    noResults:"No internships found. Try different inputs.",
    recTitle:"Recommended Internships"
  },
  hi:{
    header:"पीएम इंटर्नशिप सिफारिश इंजन",
    formTitle:"अपना इंटर्नशिप खोजें",
    education:"शिक्षा",
    skills:"कौशल",
    sector:"पसंदीदा क्षेत्र",
    location:"पसंदीदा स्थान",
    submit:"सिफारिशें प्राप्त करें",
    noResults:"कोई इंटर्नशिप नहीं मिली। अन्य विकल्प आज़माएँ।",
    recTitle:"अनुशंसित इंटर्नशिप"
  }
};

let currentLang="en";

function setLanguage(lang){
  currentLang = lang;
  document.getElementById("headerTitle").innerText = translations[lang].header;
  document.getElementById("formTitle").innerText = translations[lang].formTitle;
  document.getElementById("labelEducation").innerText = translations[lang].education;
  document.getElementById("labelSkills").innerText = translations[lang].skills;
  document.getElementById("labelSector").innerText = translations[lang].sector;
  document.getElementById("labelLocation").innerText = translations[lang].location;
  document.getElementById("submitBtn").innerText = translations[lang].submit;
  document.getElementById("toggleLang").innerText = (lang==="en"?"हिन्दी":"English");
}

document.getElementById("toggleLang").addEventListener("click",()=> {
  setLanguage(currentLang==="en"?"hi":"en");
});

document.getElementById("internshipForm").addEventListener("submit",function(e){
  e.preventDefault();
  const education = document.getElementById("education").value.toLowerCase();
  const skills = document.getElementById("skills").value.toLowerCase();
  const sector = document.getElementById("sector").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();

  // Call Gemini API for recommendations
  getGeminiRecommendations(education, skills, sector, location);
});

async function getGeminiRecommendations(education, skills, sector, location) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<h2>${translations[currentLang].recTitle}</h2>`;

  // Simulate API call with a delay
  setTimeout(() => {
    const filtered = internships.filter(intern =>
      (intern.education===education || education==="") &&
      (intern.sector===sector || sector==="") &&
      (intern.location.includes(location) || location==="")
    ).slice(0,3);

    if(filtered.length===0){
      resultsDiv.innerHTML += `<p>${translations[currentLang].noResults}</p>`;
    } else {
      filtered.forEach(intern=>{
        resultsDiv.innerHTML += `
          <div class="card">
            <div class="icon-box">${getSectorIcon(intern.sector)}</div>
            <div class="card-content">
              <h3>${intern.title}</h3>
              <p><i class="fa-solid fa-tags"></i> ${translations[currentLang].sector}: ${intern.sector}</p>
              <p><i class="fa-solid fa-location-dot"></i> ${translations[currentLang].location}: ${intern.location}</p>
              <p>${intern.details}</p>
            </div>
          </div>`;
      });
    }
  }, 1000); // Simulate network latency
}

function getSectorIcon(sector){
  switch(sector){
    case "it": return '<i class="fa-solid fa-laptop-code"></i>';
    case "management": return '<i class="fa-solid fa-briefcase"></i>';
    case "education": return '<i class="fa-solid fa-chalkboard-user"></i>';
    case "healthcare": return '<i class="fa-solid fa-notes-medical"></i>';
    default: return '<i class="fa-solid fa-briefcase"></i>';
  }
}

// init
setLanguage("en");
