const spinnerItems = document.querySelectorAll(".spinner-item");
const emailSubject = document.querySelector(".subject");
const emailBody = document.querySelector("textarea");

spinnerItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("spin-button")) {
      emailSubject.value = "Lunch meeting";
      emailBody.value = `Hey Mark,\nWhen are you available for a call?\nI am in the office until 5:00.\n\nThanks,\nBrian`;
    } else {
      
    }
  });
});
document.getElementById('togglebar').addEventListener("click",function(){
  document.querySelector('.respo-spinner').classList.toggle('active')
})
const spinButton = document.getElementById("spinButton");

const slotValues = {
  slot1: [
    "https://th.bing.com/th/id/OIP.kUW04gv7eKnBKW769pfqLAHaNK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.Z5VoUpiWSKSlmnTQe9XyuAHaHV?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.O21O10UUMdtcI_BsMbZQ_wHaHv?rs=1&pid=ImgDetMain"
  ],
  slot2: ["Lunch meeting", "Sorry, I missed", "Following up", "This weekend", "Sorry, I missed you", "Sorry, I missed"],
  slot3: ["Hey", "Hi", "Hello", "Hi", "Hey", "Dear", "Sorry, I missed"],
  slot4: ["Mark,", "Arlene,", "Chris,", "Andy,", "David,", "John,", "Lori,"],
  slot5: ["When you are available for a call?", "Let me know when you have time for a call", "I am following up. Let me know when is", "Is this week good for you", "This weekend", "Sorry, I missed you. Call when you have"],
  slot6: ["I am in the office until 5:00", "Let me know when you have time for a call", "I am following up. Let me know when is", "Is this week good for you", "This weekend", "Sorry, I missed you. Call when you have"],
  slot7: ["Thanks,", "My Plesure", "Regards", "Warm Regards"],
  slot8: ["Brian", "David", "Lori", "John", "Chris", "Arlene", "Andy"]
};

const finalValues = {};

window.onload = function () {
  initializeSlot("inner1", slotValues.slot1);
  initializeSlot("inner2", slotValues.slot2);
  initializeSlot("inner3", slotValues.slot3);
  initializeSlot("inner4", slotValues.slot4);
  initializeSlot("inner5", slotValues.slot5);
  initializeSlot("inner6", slotValues.slot6);
  initializeSlot("inner7", slotValues.slot7);
  initializeSlot("inner8", slotValues.slot8);
};

function initializeSlot(slotId, values) {
  const slotInner = document.getElementById(slotId);
  if (slotId === "inner1") {
    const img = document.createElement("img");
    img.src = values[0];
    img.alt = "slot image";
    img.className = "slot-item";
    slotInner.appendChild(img);
  } else {
    slotInner.innerHTML = `<div class="slot-item">${values[0]}</div>`;
  }
}

spinButton.addEventListener("click", () => {
  spinSlot("inner1", slotValues.slot1);
  spinSlot("inner2", slotValues.slot2);
  spinSlot("inner3", slotValues.slot3);
  spinSlot("inner4", slotValues.slot4);
  spinSlot("inner5", slotValues.slot5);
  spinSlot("inner6", slotValues.slot6);
  spinSlot("inner7", slotValues.slot7);
  spinSlot("inner8", slotValues.slot8);
});

function spinSlot(slotId, values) {
  const slotInner = document.getElementById(slotId);
  let content = "";


  for (let i = 0; i < 10; i++) {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    if (slotId === "inner1") {
      content += `<div class="slot-item"><img src="${randomValue}" alt="slot image" class="slot-item"></div>`;
    } else {
      content += `<div class="slot-item">${randomValue}</div>`;
    }
  }

  const randomValue = values[Math.floor(Math.random() * values.length)];

  if (slotId === "inner1") {
    content += `<div class="slot-item"><img src="${randomValue}" alt="slot image" class="slot-item"></div>`;
  } else {
    content += `<div class="slot-item">${randomValue}</div>`;
  }

  slotInner.innerHTML = content;

  finalValues[slotId] = randomValue;

  slotInner.style.top = "0";
  slotInner.style.animation = "none"; 
  setTimeout(() => {
    slotInner.style.animation = `roll 3s ease-in-out`;
  }, 0);

  setTimeout(() => {

    if (slotId === "inner1") {
      const imgElement = document.createElement("img");
      imgElement.src = finalValues[slotId];
      imgElement.alt = "slot image";
      imgElement.className = "slot-item";
      slotInner.innerHTML = '';
      slotInner.appendChild(imgElement);
      document.querySelector('.spinner-img').src = finalValues[slotId];
    } else if (slotId === "inner2") {
      document.querySelector('.subject').value = finalValues[slotId];
    } else if (slotId === "inner3") {
      document.querySelector('.spinner-3').textContent = finalValues[slotId];
    } else if (slotId === "inner4") {
  
      const spinner4 = document.querySelector('.spinner-4');
      if (spinner4) {
        spinner4.textContent = finalValues[slotId];
      }
    } else if (slotId === "inner5") {
      document.querySelector('.spinner-5').textContent = finalValues[slotId];
    } else if (slotId === "inner6") {
      document.querySelector('.spinner-6').textContent = finalValues[slotId];
    } else if (slotId === "inner7") {
      document.querySelector('.spinner-7').textContent = finalValues[slotId];
    } else if (slotId === "inner8") {
      document.querySelector('.spinner-8').textContent = finalValues[slotId];
    }

 
    if (slotId !== "inner1") {
      slotInner.innerHTML = `<div class="slot-item">${finalValues[slotId]}</div>`;
    }

    slotInner.style.animation = "none";
  }, 3000);
}
