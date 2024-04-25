function calculateDensity() {
    const rep1 = parseFloat(document.getElementById('rep1').value);
    const rep2 = parseFloat(document.getElementById('rep2').value);
    const rep3 = parseFloat(document.getElementById('rep3').value);
  
    const averageDensity = ((rep1 * 2) + (rep2 * 2) + (rep3 * 2)) / 3;
  
    document.getElementById('result').innerText = `Average Density: ${averageDensity.toFixed(2)} g/ml`;
  };


  function copyDensity() {
    const densityText = document.getElementById('result').innerText;
    const densityValue = densityText.split(': ')[1].split(' ')[0]; // Extract numeric part
    
    navigator.clipboard.writeText(densityValue)
      .then(() => {
        console.log('Density copied to clipboard:', densityValue);
        // Optionally, provide user feedback that the value has been copied
      })
      .catch(err => {
        console.error('Unable to copy density to clipboard:', err);
        // Handle any errors, such as browser compatibility or permission issues
      });
  }


  
  

