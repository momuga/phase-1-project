/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

    function countryOperation()
    {
        const searchButton = document.getElementById('search-button');

        searchButton.addEventListener('click', function(event)
        {
            event.preventDefault();
            const countryQuery = document.getElementById('country-query');

            let countrySearch = countryQuery.value;

            if (countrySearch == "")
            {
                alert("Enter Country Name");
                return false;
            }
            else
            {
                let url = `https://restcountries.com/v3.1/name/${countrySearch}`;

                fetch(url)
                .then((resp) => {

                    if (resp.ok)
                    {
                        return resp.json()
                        .then((json) => countryInfo(json))
                    }
                    else
                    {
                        return resp.json()
                        .then((error) => {
                            
                            const countryDetails2 = document.getElementById('country-details');

                            if (countryDetails2.children.length)
                            {
                                countryDetails2.replaceChildren();

                                let tr13 = document.createElement('tr');
                                tr13.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center`);
                                let td20 = document.createElement('td');
                                td20.setAttribute("colspan", `2`);
                                td20.textContent = "Pardon the Country is not Listed";
                                tr13.appendChild(td20);
                                countryDetails2.appendChild(tr13);
                            }
                            else
                            {
                                let tr13 = document.createElement('tr');
                                tr13.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center`);
                                let td20 = document.createElement('td');
                                td20.setAttribute("colspan", `2`);
                                td20.textContent = "Pardon the Country is not Listed";
                                tr13.appendChild(td20);
                                countryDetails2.appendChild(tr13);
                            }

                            console.log(error.message);
                        });
                    }
                })
                .catch(function(error)
                {
                    alert(`Error: ${error}`);
                    console.log(error);
                });
            }
        });
    }

    function countryInfo(countries)
    {
        countries.map(function(country)
        {
            const countryDetails = document.getElementById('country-details');

            if (countryDetails.children.length)
            {
                countryDetails.replaceChildren();

                let tr = document.createElement('tr');
                let td = document.createElement('td');
                td.setAttribute("colspan", `2`);
                tr.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center text-uppercase fw-bold`);
                td.textContent = country.name.official;
                tr.appendChild(td);
                countryDetails.appendChild(tr);

                let tr2 = document.createElement('tr');
                tr2.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td2 = document.createElement('td');
                td2.setAttribute("colspan", `2`)
                let img = document.createElement('img');
                img.setAttribute("src", country.flags.png);
                img.setAttribute("alt", country.flags.alt);
                img.setAttribute("class", `border border-dark`);
                td2.appendChild(img);
                tr2.appendChild(td2)
                countryDetails.appendChild(tr2);

                let tr3 = document.createElement('tr');
                tr3.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td3 = document.createElement('td');
                td3.setAttribute("class", `fw-bold text-center`);
                td3.textContent = "Capital City:";
                tr3.appendChild(td3);
                let td4 = document.createElement('td');
                td4.setAttribute("class", `text-center`);
                if(country.hasOwnProperty("capital"))
                {
                    td4.innerHTML = country.capital.toString().split(",").join("<br/>");    
                }
                else
                {
                    td4.textContent = "Capital Not Listed";
                }
                tr3.appendChild(td4);
                countryDetails.appendChild(tr3);

                let tr4 = document.createElement('tr');
                tr4.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td5 = document.createElement('td');
                td5.setAttribute("class", `fw-bold text-center`);
                td5.textContent = "Continent:";
                tr4.appendChild(td5);
                let td6 = document.createElement('td');
                td6.setAttribute("class", `text-center`);
                td6.innerHTML = country.continents.toString().split(",").join("<br/>");
                tr4.appendChild(td6);
                countryDetails.appendChild(tr4);

                let tr10 = document.createElement('tr');
                tr10.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td14 = document.createElement('td');
                td14.setAttribute("class", `fw-bold text-center`);
                td14.textContent = "Population:";
                tr10.appendChild(td14);
                let td15 = document.createElement('td');
                td15.setAttribute("class", `text-center`);
                populationValue = renderText(country.population, 3);
                td15.textContent = `${populationValue} people`;
                tr10.appendChild(td15);
                countryDetails.appendChild(tr10);

                let tr11 = document.createElement('tr');
                tr11.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td16 = document.createElement('td');
                td16.setAttribute("class", `fw-bold text-center`);
                td16.textContent = "Area:";
                tr11.appendChild(td16);
                let td17 = document.createElement('td');
                td17.setAttribute("class", `text-center`);
                areaValue = renderText(country.area, 3);
                areaExponent = "2";
                td17.innerHTML = `${areaValue} km${areaExponent.sup()}`;
                tr11.appendChild(td17);
                countryDetails.appendChild(tr11);

                let tr9 = document.createElement('tr');
                tr9.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center`);
                let td12 = document.createElement('td');
                td12.setAttribute("class", `fw-bold text-center`);
                td12.textContent = "Languages:";
                tr9.appendChild(td12);
                let td13 = document.createElement('td');
                td13.setAttribute("class", `text-center`);
                if(country.languages)
                {
                    td13.innerHTML = Object.values(country.languages).toString().split(",").join("<br/>");    
                }
                else
                {
                    td13.textContent = "Languages not Listed";
                }
                tr9.appendChild(td13);
                countryDetails.appendChild(tr9);

                let tr12 = document.createElement('tr');
                tr12.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td18 = document.createElement('td');
                td18.setAttribute("class", `fw-bold text-center`);
                td18.textContent = "Currency:";
                tr12.appendChild(td18);
                let td19 = document.createElement('td');
                td19.setAttribute("class", `text-center`);
                if(country.currencies)
                {
                    const { currencies } = country;
                    const currencyInfo = (legend) => Object.keys(currencies).map(gloss => currencies[gloss][legend]);
                    let currencyDetails = currencyInfo('name');
                    let herald = currencyInfo("symbol");
                    let currencyUnits = currencyDetails.toString();
                    let currencyChar = herald.toString();
                    let currencyContent = currencyRender(currencyUnits, currencyChar);
                    td19.innerHTML = currencyContent;
                }
                else
                {
                    td19.textContent = "Currency not Listed";
                }
                tr12.appendChild(td19);
                countryDetails.appendChild(tr12);

                let tr8 = document.createElement('tr');
                tr8.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center`);
                let td10 = document.createElement('td');
                td10.setAttribute("class", `fw-bold text-center`);
                td10.textContent = "Time Zone:";
                tr8.appendChild(td10);
                let td11 = document.createElement('td');
                td11.setAttribute("class", `text-center`);
                td11.textContent = country.timezones.toString().split(",").join(" ");
                tr8.appendChild(td11);
                countryDetails.appendChild(tr8);
            }
            else
            {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                td.setAttribute("colspan", `2`);
                tr.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center text-uppercase fw-bold`);
                td.textContent = country.name.official;
                tr.appendChild(td);
                countryDetails.appendChild(tr);

                let tr2 = document.createElement('tr');
                tr2.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td2 = document.createElement('td');
                td2.setAttribute("colspan", `2`)
                let img = document.createElement('img');
                img.setAttribute("src", country.flags.png);
                img.setAttribute("alt", country.flags.alt);
                img.setAttribute("class", `border border-dark`);
                td2.appendChild(img);
                tr2.appendChild(td2)
                countryDetails.appendChild(tr2);

                let tr3 = document.createElement('tr');
                tr3.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td3 = document.createElement('td');
                td3.setAttribute("class", `fw-bold text-center`);
                td3.textContent = "Capital City:";
                tr3.appendChild(td3);
                let td4 = document.createElement('td');
                td4.setAttribute("class", `text-center`);
                if(country.hasOwnProperty("capital"))
                {
                    td4.innerHTML = country.capital.toString().split(",").join("<br/>");    
                }
                else
                {
                    td4.textContent = "Capital Not Listed";
                }
                tr3.appendChild(td4);
                countryDetails.appendChild(tr3);

                let tr4 = document.createElement('tr');
                tr4.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td5 = document.createElement('td');
                td5.setAttribute("class", `fw-bold text-center`);
                td5.textContent = "Continent:";
                tr4.appendChild(td5);
                let td6 = document.createElement('td');
                td6.setAttribute("class", `text-center`);
                td6.innerHTML = country.continents.toString().split(",").join("<br/>");
                tr4.appendChild(td6);
                countryDetails.appendChild(tr4);

                let tr10 = document.createElement('tr');
                tr10.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td14 = document.createElement('td');
                td14.setAttribute("class", `fw-bold text-center`);
                td14.textContent = "Population:";
                tr10.appendChild(td14);
                let td15 = document.createElement('td');
                td15.setAttribute("class", `text-center`);
                populationValue = renderText(country.population, 3);
                td15.textContent = `${populationValue} people`;
                tr10.appendChild(td15);
                countryDetails.appendChild(tr10);

                let tr11 = document.createElement('tr');
                tr11.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td16 = document.createElement('td');
                td16.setAttribute("class", `fw-bold text-center`);
                td16.textContent = "Area:";
                tr11.appendChild(td16);
                let td17 = document.createElement('td');
                td17.setAttribute("class", `text-center`);
                areaValue = renderText(country.area, 3);
                areaExponent = "2";
                td17.innerHTML = `${areaValue} km${areaExponent.sup()}`;
                tr11.appendChild(td17);
                countryDetails.appendChild(tr11);

                let tr9 = document.createElement('tr');
                tr9.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center`);
                let td12 = document.createElement('td');
                td12.setAttribute("class", `fw-bold text-center`);
                td12.textContent = "Languages:";
                tr9.appendChild(td12);
                let td13 = document.createElement('td');
                td13.setAttribute("class", `text-center`);
                if(country.languages)
                {
                    td13.innerHTML = Object.values(country.languages).toString().split(",").join("<br/>");    
                }
                else
                {
                    td13.textContent = "Languages not Listed";
                }
                tr9.appendChild(td13);
                countryDetails.appendChild(tr9);

                let tr12 = document.createElement('tr');
                tr12.setAttribute("class", `d-flex align-items-center justify-content-evenly`);
                let td18 = document.createElement('td');
                td18.setAttribute("class", `fw-bold text-center`);
                td18.textContent = "Currency:";
                tr12.appendChild(td18);
                let td19 = document.createElement('td');
                td19.setAttribute("class", `text-center`);
                if(country.currencies)
                {
                    const { currencies } = country;
                    const currencyInfo2 = (legend) => Object.keys(currencies).map(gloss => currencies[gloss][legend]);
                    let currencyDetails = currencyInfo2('name');
                    let herald = currencyInfo2("symbol");
                    let currencyUnits = currencyDetails.toString();
                    let currencyChar = herald.toString();
                    let currencyContent = currencyRender(currencyUnits, currencyChar);
                    td19.innerHTML = currencyContent;
                }
                else
                {
                    td19.textContent = "Currency not Listed";
                }
                tr12.appendChild(td19);
                countryDetails.appendChild(tr12);

                let tr8 = document.createElement('tr');
                tr8.setAttribute("class", `d-flex align-items-center justify-content-evenly text-center`);
                let td10 = document.createElement('td');
                td10.setAttribute("class", `fw-bold text-center`);
                td10.textContent = "Time Zone:";
                tr8.appendChild(td10);
                let td11 = document.createElement('td');
                td11.setAttribute("class", `text-center`);
                td11.textContent = country.timezones.toString().split(",").join(" ");
                tr8.appendChild(td11);
                countryDetails.appendChild(tr8);
            }
        });
    }

    function renderText(info, interval)
    {
        let infoOperation = info.toString();

        let inverseOperation = infoOperation.split("").reverse().join("");

        let informationRender = inverseOperation.replace(new RegExp(`.{${interval}}`, 'g'), '$&' + ",");

        let informationFormat = informationRender.split("").reverse().join("");

        let formatRectify = informationFormat.length-1;

        if (informationFormat.indexOf('.')!= -1)
        {
            return infoOperation;
        }
        else
        {
            if(informationFormat.charAt(0) === ",")
            {
                informationRectify = informationFormat.substr(1,formatRectify);
                return informationRectify;
            }
            else
            {
                return informationFormat;
            }            
        }
    }

    function currencyRender(details, sign)
    {
        let detailsOperation = details.split(",");
        let signOperation = sign.split(",");

        let girth = detailsOperation.length;
        let unitTally = signOperation.length;

        let = currencyResult = "";

        for (x=0;x<unitTally ;x++)
        {
            signOperation[x] = " (" + signOperation[x] + ")<br/>";
        }

        for(t=0; t<girth || t<unitTally; t++)
        {
            if(t<girth)
            {
                currencyResult += detailsOperation[t];
            }
            if (t<unitTally)
            {
                currencyResult += signOperation[t];
            }
        }

        return currencyResult;
    }

    document.addEventListener('DOMContentLoaded', function(event)
    {
        countryOperation();
        event.preventDefault();
    });
