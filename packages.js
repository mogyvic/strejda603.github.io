window.onload = function () {
  document.getElementById("AirmailPremium").addEventListener("click", packagesEventHandler);
  document.getElementById("GetAirmailPremium").addEventListener("click", packagesEventHandler);

  document.getElementById("MoleskineActions").addEventListener("click", packagesEventHandler);
  document.getElementById("GetMoleskineActions").addEventListener("click", packagesEventHandler);

  document.getElementById("MoleskineFlow").addEventListener("click", packagesEventHandler);
  document.getElementById("GetMoleskineFlow").addEventListener("click", packagesEventHandler);

  document.getElementById("MoleskineTimepage").addEventListener("click", packagesEventHandler);
  document.getElementById("GetMoleskineTimepage").addEventListener("click", packagesEventHandler);

  document.getElementById("NOAAWeatherRadar").addEventListener("click", packagesEventHandler);
  document.getElementById("GetNOAAWeatherRadar").addEventListener("click", packagesEventHandler);
  
  document.getElementById("ScanTranslatePlus").addEventListener("click", packagesEventHandler);
  document.getElementById("GetScanTranslatePlus").addEventListener("click", packagesEventHandler);
}

function packagesEventHandler(e) {
  switch(e.currentTarget.id) {
    case "AirmailPremium":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.airmailpremium", "_self");
      break;
    case "GetAirmailPremium":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.airmailpremium");
      break;

    case "MoleskineActions":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.moleskineactionssubscription", "_self");
      break;
    case "GetMoleskineActions":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.moleskineactionssubscription");
      break;

    case "MoleskineFlow":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.moleskineflowsubscription", "_self");
      break;
    case "GetMoleskineFlow":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.moleskineflowsubscription");
      break;

    case "MoleskineTimepage":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.moleskinetimepagesubscription", "_self");
      break;
    case "GetMoleskineTimepage":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.moleskinetimepagesubscription");
      break;

    case "NOAAWeatherRadar":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.noaaweatherradarpremium", "_self");
      break;
    case "GetNOAAWeatherRadar":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.noaaweatherradarpremium");
      break;

    case "ScanTranslatePlus":
      window.open("https://strejda603.github.io/description.html?id=com.strejda603.scantranslatepluspremium", "_self");
      break;
    case "GetScanTranslatePlus":
      window.open("https://cydia.saurik.com/api/share#?source=https://strejda603.github.io/&package=com.strejda603.scantranslatepluspremiumm");
      break;
  }
  e.stopPropagation();
}