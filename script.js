function calculatePercentile() {
    // Retrieve values from input fields
    const longExams = [
        parseFloat(document.getElementById('longExam1').value),
        parseFloat(document.getElementById('longExam2').value),
        parseFloat(document.getElementById('longExam3').value),
        parseFloat(document.getElementById('longExam4').value)
    ];

    const finalExams = [
        parseFloat(document.getElementById('finalExam1').value),
        parseFloat(document.getElementById('finalExam2').value),
        parseFloat(document.getElementById('finalExam3').value)
    ];

    const microProjection = parseFloat(document.getElementById('microProjection').value);
    const pathoProjection = parseFloat(document.getElementById('pathoProjection').value);
    const pharmaProjection = parseFloat(document.getElementById('pharmaProjection').value);

    const lab = parseFloat(document.getElementById('lab').value);
    const tutorial = parseFloat(document.getElementById('tutorial').value);

    // Calculate percentile for each category
    const longExamsTotal = longExams.reduce((total, mark) => total + mark, 0);
    const finalExamsTotal = finalExams.reduce((total, mark) => total + mark, 0);
    const projectionExamsTotal = ((microProjection + pathoProjection) * 5 + pharmaProjection) / 450;
    const labPercentile = lab;
    const tutorialPercentile = tutorial;

    // Apply formulas for each category
    const longExamsPercentile = (((longExamsTotal / 280) * 50) + 50) * 0.3;
    const finalExamsPercentile = (((finalExamsTotal / 180) * 50) + 50) * 0.3;
    const projectionExamsPercentile = (((projectionExamsTotal * 50) + 50) * 0.2);
    const labPercentileFinal = labPercentile;
    const tutorialPercentileFinal = tutorialPercentile;

    // Calculate the final percentile by summing up all percentiles
    const totalPercentile = longExamsPercentile + finalExamsPercentile + projectionExamsPercentile + labPercentileFinal + tutorialPercentileFinal;

    // Display results in 'result' div
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Long Exams Percentile: ${longExamsPercentile.toFixed(2)}</p>
        <p>Final Exams Percentile: ${finalExamsPercentile.toFixed(2)}</p>
        <p>Projection Exams Percentile: ${projectionExamsPercentile.toFixed(2)}</p>
        <p>Lab Percentile: ${labPercentileFinal.toFixed(2)}</p>
        <p>Tutorial Percentile: ${tutorialPercentileFinal.toFixed(2)}</p>
        <hr>
        <p>Total Percentile: ${totalPercentile.toFixed(2)}</p>
    `;
}
