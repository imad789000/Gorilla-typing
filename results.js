function calculatingWPM()
{

    let testType = document.querySelector(".typeContainer")
    let timeContainer = document.querySelector(".timeContainer")
    let charContainer = document.querySelector(".charContainer")

    let values = sessionStorage.getItem("values").split("/")

    let time = values[0]
    let totalKeys = values[1]
    let correctKeys = values[2]
    let testtype = values[3]
    let wrongKeysPressed = values[4]
    let totalWords = totalKeys / 5;
    let WPM = Math.floor(totalWords / (time / 60))

    testType.innerHTML = testtype
    timeContainer.innerHTML = time
    charContainer.innerHTML = correctKeys + "/" + wrongKeysPressed

    let result = document.querySelector(".wpmContainer")
    result.innerHTML = WPM
}

function calculateAccuracy()
{
    let values = sessionStorage.getItem("values").split("/")

    let totalKeys = values[1]
    let correctKeys = values[2]

    let accuracy = Math.floor((correctKeys / totalKeys) * 100)

    let accuracyDiv = document.querySelector(".accContainer")
    if(accuracy < 0)
    {
        accuracy = 0
    }
    accuracyDiv.innerHTML = accuracy + "%"
}

function goBack()
{
    window.location.href = "index.html"
}

function takeScreenshot()
{
    let logo = document.querySelector(".screenshotLogo")
    logo.style.display = "block"
    html2canvas(document.querySelector("#capture"), {backgroundColor: "#181818"}).then(canvas => {
        canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
    });
    logo.style.display = "none"
    document.querySelector(".notification").classList.add("notificationIn")
    setTimeout(() => {
        document.querySelector(".notification").classList.remove("notificationIn")
    }, 2000);

}

calculatingWPM()
calculateAccuracy()