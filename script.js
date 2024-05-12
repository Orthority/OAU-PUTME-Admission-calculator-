function calculateProjection() {
    const mathsGrade = parseInt(document.getElementById("mathsGrade").value);
    const engScore = parseInt(document.getElementById("engGrade").value);
    const Subject3 = parseInt(document.getElementById("sub3").value);
    const Subject4 = parseInt(document.getElementById("sub4").value);
    const Subject5 = parseInt(document.getElementById("sub5").value);
    const utmeScore = parseInt(document.getElementById("utmeScore").value);

    // O'level is 10%
    const oLevelScale = 10;
    const oLevelTotal = (mathsGrade + engScore + Subject3 + Subject4 + Subject5) / 5;
    const oLevelPoints = (oLevelTotal / 10) * oLevelScale;

    // UTME is 50%
    const utmePoints = (utmeScore / 8);

    // Calculate the current aggregate score
    const currentAggregate = oLevelPoints + utmePoints;

    // Calculate the required PUTME score for a great aggregate
    const putmeMax = 40;
    const requiredPutmeScore = (100 - currentAggregate)/100 * putmeMax;

    // Display the result and advice
    const resultDiv = document.getElementById("result");
    const projectionDiv = document.getElementById("projection");
    const adviceDiv = document.getElementById("advice");

    projectionDiv.innerText = `Your O'Level and UTME score is ${currentAggregate.toFixed(1)}, Target a PUTME score of approximately ${requiredPutmeScore.toFixed(2)} out of ${putmeMax}.`;

    if (currentAggregate >= 44) {
        adviceDiv.innerHTML = 'This is an achievable target. <a href="https://fna.org.ng/complete-guide-requirements-cut-off-mark-for-admission-into-part-i-and-direct-entry-faculties-for-obafemi-awolowo-university-oau-2023-2024/" target="_blank">Check cut-off marks</a>.';
    } else {
        adviceDiv.innerHTML = 'Please speak with a consultant for advice. <a href="https://fna.org.ng/complete-guide-requirements-cut-off-mark-for-admission-into-part-i-and-direct-entry-faculties-for-obafemi-awolowo-university-oau-2023-2024/" target="_blank">Check cut-off marks</a>.';
    }

    resultDiv.classList.remove("hidden");
}

// Add the script tag
const scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = '//groundlesscobwebmiller.com/c0/1b/31/c01b31d4c58168d39862c96336fa9774.js';
document.head.appendChild(scriptTag);
