function calculateDensity() {
  const rep1 = parseFloat(document.getElementById('rep1').value);
  const rep2 = parseFloat(document.getElementById('rep2').value);
  const rep3 = parseFloat(document.getElementById('rep3').value);

  const averageDensity = ((rep1 * 2) + (rep2 * 2) + (rep3 * 2)) / 3;

  document.getElementById('result').innerText = `Average Density: ${averageDensity.toFixed(2)} g/ml`;
};

function unsecuredCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
};



function copyDensity() {
  const densityText = document.getElementById('result').innerText;
  const densityValue = densityText.split(': ')[1].split(' ')[0]; // Extract numeric part

  unsecuredCopyToClipboard(densityValue)
  console.log('Density copied to clipboard:', densityValue);
  // Optionally, provide user feedback that the value has been copied

};

function clearInputs() {
  document.getElementById('rep1').value = '';
  document.getElementById('rep2').value = '';
  document.getElementById('rep3').value = '';
  document.getElementById('result').innerText = '';
};






