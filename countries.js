function loadCountry() {
    fetch("https://restcountries.com/v3.1/all").then(r => r.json()).then(showCountry);
}

function showCountry(countriesAll) {
    console.log(countriesAll);
/*
    const name = country[0].name.official;
    document.getElementById("name").textContent = name;

    const capital = country[0].capital;
    document.getElementById("capital").innerHTML = capital;

    const flag = country[0].flags.png;
    document.getElementById("flag").setAttribute('src', flag);

    for (let i = 0; i < country[0].timezones.length; i++) {

        const tz = country[0].timezones[i];
        document.getElementById("timezones").textContent += ' ' + tz;

    }

    const continents = country[0].continents[0];
    document.getElementById("continents").textContent = continents;
*/
    const content = document.getElementById("content");
    const countries = new Array();

    for (const element of countriesAll) {
        const country = new Object();
        country.name=element.name.common; 
        country.flag=element.flags.png;
        countries.push(country);
    }

    countries.sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    });
    
    for (const countryElement of countries) {
        console.log(countryElement.name);
        // console.log(countryElement.flag);
    }

    // content.textContent = country[0].capital;
}

window.addEventListener("load", loadCountry);