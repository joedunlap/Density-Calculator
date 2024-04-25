function calculateDensity() {
    const rep1 = parseFloat(document.getElementById('rep1').value);
    const rep2 = parseFloat(document.getElementById('rep2').value);
    const rep3 = parseFloat(document.getElementById('rep3').value);
  
    const averageDensity = ((rep1 * 2) + (rep2 * 2) + (rep3 * 2)) / 3;
  
    document.getElementById('result').innerText = `Average Density: ${averageDensity.toFixed(2)} g/ml`;
  }
  