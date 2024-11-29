const rangeSlider = document.getElementById("priceRange"),
    selectedAmount = document.getElementById("selectedAmount"),
    amounts = [25000, 50000, 75000, 100000, 200000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 10000000],
    rangeTicksContainer = document.querySelector(".range-ticks");

const pricingCards = document.querySelectorAll('.pricing-card');
const packageName = document.getElementById('package-name');
const pricingAmount = document.getElementById('pricing-amount');
const pricingButtons = document.querySelectorAll('.pricing-card button');


function formatNumber(num) {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
}


rangeTicksContainer.innerHTML = "";
rangeSlider.setAttribute("max", amounts.length - 1);
amounts.forEach((e, t) => {
    let tick = document.createElement("div");
    tick.className = "range-tick-label";
    tick.textContent = formatNumber(e);
    tick.style.left = `${(t / (amounts.length - 1)) * 100}%`;
    rangeTicksContainer.appendChild(tick);
});

function updatePricing(selectedValue) {
    let BronzeAmount, SilverAmount, GoldAmount;
    switch (selectedValue) {
        case 25000:
            BronzeAmount = "$29.00";
            SilverAmount = "$39.00";
            GoldAmount = "$49.00";
            break;
        case 50000:
            BronzeAmount = "$58.00";
            SilverAmount = "$79.00";
            GoldAmount = "$98.00";
            break;
        case 75000:
            BronzeAmount = "$87.00";
            SilverAmount = "$118.00";
            GoldAmount = "$147.00";
            break;
        case 100000:
            BronzeAmount = "$116.00";
            SilverAmount = "$236.00";
            GoldAmount = "$294.00";
            break;
        case 200000:
            BronzeAmount = "$232.00";
            SilverAmount = "$472.00";
            GoldAmount = "$588.00";
            break;
        case 500000:
            BronzeAmount = "$464.00";
            SilverAmount = "$800.00";
            GoldAmount = "$1100.00";
            break;
        case 750000:
            BronzeAmount = "$600.00";
            SilverAmount = "$1000.00";
            GoldAmount = "$1300.00";
            break;
        case 1000000:
            BronzeAmount = "$800.00";
            SilverAmount = "$1400.00";
            GoldAmount = "$1600.00";
            break;
        case 1500000:
            BronzeAmount = "$1000.00";
            SilverAmount = "$1800.00";
            GoldAmount = "$2200.00";
            break;
        case 2000000:
            BronzeAmount = "$1200.00";
            SilverAmount = "$2000.00";
            GoldAmount = "$2400.00";
            break;
        case 3000000:
            BronzeAmount = "$1400.00";
            SilverAmount = "$2200.00";
            GoldAmount = "$2800.00";
            break;
        case 4000000:
            BronzeAmount = "$1600.00";
            SilverAmount = "$2400.00";
            GoldAmount = "$3000.00";
            break;
        case 5000000:
            BronzeAmount = "$1800.00";
            SilverAmount = "$2600.00";
            GoldAmount = "$3200.00";
            break;
        case 10000000:
            BronzeAmount = "$3600.00";
            SilverAmount = "$5200.00";
            GoldAmount = "$65000.00";
            break;
        default:
            BronzeAmount = `$${(selectedValue / 100).toFixed(2)}`;
            SilverAmount = `$${(selectedValue / 100).toFixed(2)}`;
            GoldAmount = `$${(selectedValue / 100).toFixed(2)}`;
    }

    document.getElementById('bronze-price').textContent = BronzeAmount;
    document.getElementById('silver-price').textContent = SilverAmount;
    document.getElementById('gold-price').textContent = GoldAmount;

    const activeCard = document.querySelector('.pricing-card.active h4');
    if (activeCard) pricingAmount.textContent = activeCard.textContent;
}


rangeSlider.addEventListener("input", function () {
    const selectedIndex = parseInt(rangeSlider.value);
    const selectedValue = amounts[selectedIndex];
    selectedAmount.textContent = `Sent ${(selectedValue)} Emails`;
    updatePricing(selectedValue);

    let percentage = (selectedIndex / (amounts.length - 1)) * 100;
    rangeSlider.style.background = `linear-gradient(to right, #4674C6 0%, #4674C6 ${percentage}%, #6a90b159 ${percentage}%, #6a90b159 100%)`;
});


function updateActiveCard(activeCard) {
    pricingCards.forEach(card => card.classList.remove('active'));
    activeCard.classList.add('active');
    packageName.textContent = activeCard.querySelector('h6').textContent;
    pricingAmount.textContent = activeCard.querySelector('h4').textContent;
}


pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
        pricingButtons.forEach(btn => btn.textContent = "Select");
        button.textContent = "Selected";
    });
});


pricingButtons[0].textContent = "Selected";

pricingCards.forEach(card => {
    card.addEventListener('click', () => {
        updateActiveCard(card);
        const selectedIndex = parseInt(rangeSlider.value);
        const selectedValue = amounts[selectedIndex];
        updatePricing(selectedValue);
    });
});


const initialIndex = parseInt(rangeSlider.value);
selectedAmount.textContent = `Sent ${amounts[initialIndex]} Emails`;
rangeSlider.style.background = `linear-gradient(to right, #4674C6 0%, #4674C6 0%, #6a90b159 0%, #6a90b159 100%)`;
updateActiveCard(pricingCards[0]);
const toggle = document.getElementById("toggle");
const totalPriceSpan = document.getElementById("TotalPricesspan");

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        totalPriceSpan.textContent = "Total Yearly Prices";
    } else {
        totalPriceSpan.textContent = "Total Monthly Prices";
    }
});
