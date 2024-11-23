const rangeSlider = document.getElementById("priceRange"),
    selectedAmount = document.getElementById("selectedAmount"),
    amounts = ['100', '200', '500', '1,000', '2,000', '5,000','10,000','15,000','20,000','50,000','100,000','200,000'],
    rangeTicksContainer = document.querySelector(".range-ticks");

// Initialize the range slider
rangeTicksContainer.innerHTML = "";
rangeSlider.setAttribute("max", amounts.length - 1);
amounts.forEach((e, t) => {
    let s = document.createElement("div");
    s.className = "range-tick-label";
    s.textContent = `${e}`;
    s.style.left = `${t / (amounts.length - 1) * 100}%`;
    rangeTicksContainer.appendChild(s);
});

// Event listener for range slider input
rangeSlider.addEventListener("input", function() {
    let e = parseInt(rangeSlider.value);
    selectedAmount.textContent = `Sent ${amounts[e]} Emails`;

    // Set pricing amount based on selected amount
    if (amounts[e] === '100') {
        document.getElementById("pricing-amount").innerHTML = '$5.00';
    }else if(amounts[e] === '200'){
        var a = 16.70*2;
        document.getElementById("pricing-amount").innerHTML = `$10.00`;
    }else if(amounts[e] === '500'){
        var a = 16.70*3;
        document.getElementById("pricing-amount").innerHTML = `$50.10`;
    }
    else if(amounts[e] === '1,000'){
        var a = 16.70*4;
        document.getElementById("pricing-amount").innerHTML = `$22.50`;
    }
    else if(amounts[e] === '2,000'){
        var a = 16.70*5;
        document.getElementById("pricing-amount").innerHTML = `$40.00`;
    }
    else if(amounts[e] === '5,000'){
        var a = 16.70*6;
        document.getElementById("pricing-amount").innerHTML = `$75.00`;
    }
    else if(amounts[e] === '10,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$150.00`;
    }
    else if(amounts[e] === '15,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$220.10`;
    }
    else if(amounts[e] === '20,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$290.80`;
    }
    else if(amounts[e] === '50,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$650.00`;
    }
    else if(amounts[e] === '100,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$700.20`;
    }
    else if(amounts[e] === '200,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$1400.00`;
    }
     else {
        document.getElementById("pricing-amount").innerHTML = `${amounts[e]}`;
    }

    document.getElementById("pricing-amount-2").innerHTML = `${amounts[e]}`;
    
    let t = e / (amounts.length - 1) * 100;
    rangeSlider.style.background = `linear-gradient(to right, #4674C6 0%, #4674C6 ${t}%, #6a90b159 ${t}%, #6a90b159 100%)`;
});

// Initial display setup
selectedAmount.textContent = `Sent ${amounts[rangeSlider.value]} Emails`;
const initialIndex = parseInt(rangeSlider.value),
    initialPercentage = initialIndex / (amounts.length - 1) * 100;
rangeSlider.style.background = `linear-gradient(to right,#4674C6 0%, #4674C6 ${initialPercentage}%, #6a90b159 ${initialPercentage}%, #6a90b159 100%)`;

