const remediesData = {
    "headache": ["Suggested Remedy:", "Drink water", "Take a rest", "Use a cold compress"],
    "nausea": ["Suggested Remedy:", "Ginger tea", "Peppermint", "Eat light and bland foods"],
    "fatigue": ["Suggested Remedy:", "Get enough sleep", "Take short naps", "Stay physically active"],
    "muscle pain": ["Suggested Remedy:", "Apply a hot or cold compress", "Take over-the-counter pain relievers", "Stretch"],
    "fever": ["Suggested Remedy:", "Stay hydrated", "Take fever-reducing medication", "Rest"],
    "cough": ["Suggested Remedy:", "Drink warm fluids", "Use honey and lemon", "Take cough drops"],
    "dizziness": ["Suggested Remedy:", "Sit or lie down", "Hydrate", "Avoid sudden movements"],
    "shortness of breath": ["Suggested Remedy:", "Practice deep breathing", "Sit up straight", "Use a fan"],
    "insomnia": ["Suggested Remedy:", "Establish a bedtime routine", "Limit screen time before bed", "Create a comfortable sleep environment"],
    "diarrhea": ["Suggested Remedy:", "Stay hydrated", "Eat bland foods", "Avoid dairy and caffeine"],
    "abdominal pain": ["Suggested Remedy:", "Apply a hot water bottle", "Take over-the-counter pain relievers", "Rest"],
    "irritability": ["Suggested Remedy:", "Practice relaxation techniques", "Take breaks", "Talk to someone"],
    "joint pain": ["Suggested Remedy:", "Apply hot or cold packs", "Take over-the-counter anti-inflammatory drugs", "Do gentle exercises"],
    "rash": ["Suggested Remedy:", "Keep the area clean", "Apply a soothing lotion", "Avoid scratching"],
    "head congestion": ["Suggested Remedy:", "Use a saline nasal spray", "Drink warm fluids", "Take over-the-counter decongestants"],
    "sweating": ["Suggested Remedy:", "Wear breathable clothing", "Use antiperspirant", "Keep cool"],
    "weight gain": ["Suggested Remedy:", "Maintain a healthy diet", "Exercise regularly", "Get enough sleep"],
    "bloating": ["Suggested Remedy:", "Eat smaller meals", "Avoid gas-producing foods", "Stay physically active"],
    "mood swings": ["Suggested Remedy:", "Practice stress management", "Get regular exercise", "Talk to a therapist"],
    "memory loss": ["Suggested Remedy:", "Stay mentally active", "Get enough sleep", "Eat a healthy diet"],
    "difficulty concentrating": ["Suggested Remedy:", "Take regular breaks", "Create a focused work environment", "Stay hydrated"],
};

let suggestions = [
    "headache", "nausea", "fever"
];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            searchRemedies()
        }
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
        const remediesContainer = document.getElementById('remediesContainer');
        remediesContainer.style.display = 'none';
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        searchRemedies()
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function searchRemedies() {
    const symptomInput = document.getElementById('symptomInput').value.toLowerCase();
    const remediesContainer = document.getElementById('remediesContainer');
    remediesContainer.innerHTML = '';

    if (symptomInput.trim() === '') {
        alert('Please enter a symptom.');
        return;
    }

    if (remediesData.hasOwnProperty(symptomInput)) {
        const remedies = remediesData[symptomInput];
        const remediesList = document.createElement('ul');

        remedies.forEach(remedy => {
            const remedyItem = document.createElement('li');
            remedyItem.textContent = remedy;
            remediesList.appendChild(remedyItem);
        });

        remediesContainer.appendChild(remediesList);
        remediesContainer.style.display = 'block';
    } else {
        remediesContainer.textContent = 'No remedies found for this symptom.';
        remediesContainer.style.display = 'block';
    }
}



