// Application de révision
let currentSubject = 'nsi';
let currentMode = 'cours';
let currentChapter = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let testStartTime = null;
let timerInterval = null;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadContent();
});

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Navigation matières
    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubject = btn.dataset.subject;
            document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadContent();
        });
    });

    // Navigation modes
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMode = btn.dataset.mode;
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadContent();
        });
    });

    // Boutons retour
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadContent();
        });
    });
}

// Charger le contenu en fonction du mode
function loadContent() {
    hideAllSections();
    
    switch(currentMode) {
        case 'cours':
            showCoursSection();
            break;
        case 'questions':
            showQuestionsSection();
            break;
        case 'test':
            showTestSection();
            break;
    }
}

// Cacher toutes les sections
function hideAllSections() {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('chapter-content').style.display = 'none';
    document.getElementById('question-quiz').style.display = 'none';
    document.getElementById('test-quiz').style.display = 'none';
}

// Afficher la section cours
function showCoursSection() {
    const section = document.getElementById('cours-section');
    section.classList.add('active');
    
    const chaptersContainer = document.getElementById('chapters-list');
    chaptersContainer.style.display = 'grid'; // ⚠️ FIX: Réafficher la grille
    chaptersContainer.innerHTML = '';
    
    const subject = coursData[currentSubject];
    subject.chapters.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <h3>${chapter.title}</h3>
            <p>${chapter.description}</p>
        `;
        card.addEventListener('click', () => showChapter(chapter));
        chaptersContainer.appendChild(card);
    });
}

// Afficher un chapitre
function showChapter(chapter) {
    document.getElementById('chapters-list').style.display = 'none';
    const contentDiv = document.getElementById('chapter-content');
    contentDiv.style.display = 'block';
    
    document.getElementById('chapter-title').textContent = chapter.title;
    document.getElementById('chapter-text').innerHTML = chapter.content;
}

// Afficher la section questions
function showQuestionsSection() {
    const section = document.getElementById('questions-section');
    section.classList.add('active');
    
    const chaptersContainer = document.getElementById('chapters-questions');
    chaptersContainer.style.display = 'grid'; // ⚠️ FIX: Réafficher la grille
    chaptersContainer.innerHTML = '';
    
    const subject = coursData[currentSubject];
    subject.chapters.forEach(chapter => {
        const questions = questionsData[chapter.id];
        if (questions && questions.length > 0) {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `
                <h3>${chapter.title}</h3>
                <p>${questions.length} questions disponibles</p>
            `;
            card.addEventListener('click', () => startQuiz(chapter.id));
            chaptersContainer.appendChild(card);
        }
    });
}

// Démarrer un quiz
function startQuiz(chapterId) {
    currentQuestions = [...questionsData[chapterId]];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    document.getElementById('chapters-questions').style.display = 'none';
    document.getElementById('question-quiz').style.display = 'block';
    
    showQuestion();
}

// Afficher une question
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showQuizResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    
    document.querySelector('#question-quiz .progress-fill').style.width = progress + '%';
    document.querySelector('#question-quiz .question-counter').textContent = 
        `Question ${currentQuestionIndex + 1} sur ${currentQuestions.length}`;
    document.getElementById('question-text').innerHTML = question.question;
    
    const answersContainer = document.getElementById('answers-list');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        div.textContent = answer;
        div.dataset.index = index;
        div.addEventListener('click', () => selectAnswer(div, index));
        answersContainer.appendChild(div);
    });
    
    document.getElementById('validate-btn').style.display = 'block';
    document.getElementById('next-question-btn').style.display = 'none';
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('quiz-results').style.display = 'none';
    
    // Validation
    document.getElementById('validate-btn').onclick = validateAnswer;
    document.getElementById('next-question-btn').onclick = nextQuestion;
}

// Sélectionner une réponse
function selectAnswer(element, index) {
    document.querySelectorAll('#answers-list .answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

// Valider la réponse
function validateAnswer() {
    const selected = document.querySelector('#answers-list .answer-option.selected');
    if (!selected) {
        alert('Veuillez sélectionner une réponse');
        return;
    }
    
    const selectedIndex = parseInt(selected.dataset.index);
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        score++;
    }
    
    // Afficher le feedback
    document.querySelectorAll('#answers-list .answer-option').forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    const feedback = document.getElementById('feedback');
    feedback.classList.add('show');
    if (isCorrect) {
        feedback.classList.remove('incorrect');
        feedback.classList.add('correct');
        feedback.innerHTML = `<strong>✓ Correct !</strong><br>${question.explanation}`;
    } else {
        feedback.classList.remove('correct');
        feedback.classList.add('incorrect');
        feedback.innerHTML = `<strong>✗ Incorrect</strong><br>${question.explanation}`;
    }
    
    document.getElementById('validate-btn').style.display = 'none';
    document.getElementById('next-question-btn').style.display = 'block';
}

// Question suivante
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Afficher les résultats du quiz
function showQuizResults() {
    document.querySelector('#question-quiz .quiz-container').style.display = 'none';
    
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.style.display = 'block';
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = '🎉 Excellent travail !';
    } else if (percentage >= 60) {
        message = '👍 Bien joué !';
    } else if (percentage >= 40) {
        message = '📚 Continue à réviser !';
    } else {
        message = '💪 Courage, tu vas y arriver !';
    }
    
    resultsDiv.innerHTML = `
        <h3>Résultats du quiz</h3>
        <div class="score-display">${score} / ${currentQuestions.length}</div>
        <div class="score-message">${message}</div>
        <p>Score : ${percentage}%</p>
        <button class="btn-primary" onclick="loadContent()">Retour aux chapitres</button>
    `;
}

// Afficher la section test
function showTestSection() {
    const section = document.getElementById('test-section');
    section.classList.add('active');
    
    const selectionContainer = document.getElementById('test-selection');
    selectionContainer.style.display = 'grid'; // ⚠️ FIX: Réafficher la grille
    selectionContainer.innerHTML = '';
    
    const subject = coursData[currentSubject];
    subject.chapters.forEach(chapter => {
        const questions = questionsData[chapter.id];
        if (questions && questions.length > 0) {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `
                <h3>Test : ${chapter.title}</h3>
                <p>${questions.length} questions · Chronométré</p>
            `;
            card.addEventListener('click', () => startTest(chapter.id));
            selectionContainer.appendChild(card);
        }
    });
    
    // Option pour un test complet
    const allQuestions = getAllQuestions();
    if (allQuestions.length > 0) {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        card.style.color = 'white';
        card.innerHTML = `
            <h3>🎯 Test Blanc Complet</h3>
            <p>${allQuestions.length} questions · Toutes les matières</p>
        `;
        card.addEventListener('click', () => startTest('all'));
        selectionContainer.appendChild(card);
    }
}

// Récupérer toutes les questions de la matière
function getAllQuestions() {
    const subject = coursData[currentSubject];
    let allQuestions = [];
    
    subject.chapters.forEach(chapter => {
        const questions = questionsData[chapter.id];
        if (questions) {
            allQuestions = allQuestions.concat(questions);
        }
    });
    
    return allQuestions;
}

// Démarrer un test
function startTest(chapterId) {
    if (chapterId === 'all') {
        currentQuestions = shuffleArray(getAllQuestions());
    } else {
        currentQuestions = shuffleArray([...questionsData[chapterId]]);
    }
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    testStartTime = Date.now();
    
    document.getElementById('test-selection').style.display = 'none';
    document.getElementById('test-quiz').style.display = 'block';
    
    startTimer();
    showTestQuestion();
}

// Mélanger un tableau
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Démarrer le chronomètre
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - testStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer-display').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Arrêter le chronomètre
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Afficher une question du test
function showTestQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showTestResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    
    document.querySelector('#test-quiz .progress-fill').style.width = progress + '%';
    document.querySelector('#test-quiz .test-progress').textContent = 
        `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('test-question-text').innerHTML = question.question;
    
    const answersContainer = document.getElementById('test-answers-list');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        div.textContent = answer;
        div.dataset.index = index;
        div.addEventListener('click', () => selectTestAnswer(div, index));
        answersContainer.appendChild(div);
    });
    
    document.getElementById('test-validate-btn').style.display = 'block';
    document.getElementById('test-next-btn').style.display = 'none';
    document.getElementById('test-finish-btn').style.display = 'none';
    document.getElementById('test-feedback').classList.remove('show');
    document.getElementById('test-results').style.display = 'none';
    
    // Événements
    document.getElementById('test-validate-btn').onclick = validateTestAnswer;
    document.getElementById('test-next-btn').onclick = nextTestQuestion;
    document.getElementById('test-finish-btn').onclick = showTestResults;
}

// Sélectionner une réponse du test
function selectTestAnswer(element, index) {
    document.querySelectorAll('#test-answers-list .answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

// Valider la réponse du test
function validateTestAnswer() {
    const selected = document.querySelector('#test-answers-list .answer-option.selected');
    if (!selected) {
        alert('Veuillez sélectionner une réponse');
        return;
    }
    
    const selectedIndex = parseInt(selected.dataset.index);
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        score++;
    }
    
    // Afficher le feedback
    document.querySelectorAll('#test-answers-list .answer-option').forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    const feedback = document.getElementById('test-feedback');
    feedback.classList.add('show');
    if (isCorrect) {
        feedback.classList.remove('incorrect');
        feedback.classList.add('correct');
        feedback.innerHTML = `<strong>✓ Correct !</strong><br>${question.explanation}`;
    } else {
        feedback.classList.remove('correct');
        feedback.classList.add('incorrect');
        feedback.innerHTML = `<strong>✗ Incorrect</strong><br>${question.explanation}`;
    }
    
    document.getElementById('test-validate-btn').style.display = 'none';
    
    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('test-next-btn').style.display = 'block';
    } else {
        document.getElementById('test-finish-btn').style.display = 'block';
    }
}

// Question suivante du test
function nextTestQuestion() {
    currentQuestionIndex++;
    showTestQuestion();
}

// Afficher les résultats du test
function showTestResults() {
    stopTimer();
    
    const elapsed = Math.floor((Date.now() - testStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeStr = `${minutes}:${String(seconds).padStart(2, '0')}`;
    
    document.querySelector('#test-quiz .quiz-container').style.display = 'none';
    
    const resultsDiv = document.getElementById('test-results');
    resultsDiv.style.display = 'block';
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        message = 'Performance exceptionnelle !';
        emoji = '🏆';
    } else if (percentage >= 75) {
        message = 'Très bon travail !';
        emoji = '🎉';
    } else if (percentage >= 60) {
        message = 'Bon niveau !';
        emoji = '👍';
    } else if (percentage >= 50) {
        message = 'Peut mieux faire';
        emoji = '📚';
    } else {
        message = 'Continue à réviser !';
        emoji = '💪';
    }
    
    resultsDiv.innerHTML = `
        <h3>${emoji} Résultats du test blanc</h3>
        <div class="score-display">${score} / ${currentQuestions.length}</div>
        <div class="score-message">${message}</div>
        <div class="results-details">
            <p><strong>Score :</strong> ${percentage}%</p>
            <p><strong>Temps écoulé :</strong> ${timeStr}</p>
            <p><strong>Bonnes réponses :</strong> ${score}</p>
            <p><strong>Mauvaises réponses :</strong> ${currentQuestions.length - score}</p>
        </div>
        <button class="btn-primary" onclick="loadContent()">Retour aux tests</button>
    `;
}
