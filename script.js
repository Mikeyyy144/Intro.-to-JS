const screenOutput = document.getElementById('output')
const myInfo = {
    Name: "Sotomi Michael Opeyemi",
    Height: 5.11,
    Country: "Nigeria",
}
screenOutput.innerHTML = '<h2>' + 'Name: ' + myInfo.Name + '<br>' + 'Height: ' + myInfo.Height + '<br>' + 'Country: ' + myInfo.Country + '<h2>';
console.log(myInfo)
