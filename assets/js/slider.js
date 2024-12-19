const sliderData = [
    { brand: "Porsche", model: "911", imgUrl: "https://i.pinimg.com/1200x/32/35/6c/32356c1da09ce32049584e30acca706a.jpg" },
    { brand: "Porsche", model: "912", imgUrl: "https://i.pinimg.com/1200x/86/5b/ae/865bae46d5d0ed843108efa7e849a6a7.jpg" },
    { brand: "Porsche", model: "913", imgUrl: "https://i.pinimg.com/1200x/a2/11/7a/a2117ad2ec9d0fc50d9d460d3ec1dd93.jpg" },
    { brand: "Porsche", model: "914", imgUrl: "https://i.pinimg.com/1200x/1c/a6/fb/1ca6fbeed145791478d647e3ef517bf3.jpg" }
];

const sliderBox = document.querySelector('.slider-box');
let index = 0;

function updateSlider() {
    if (!sliderData[index]) return;
    const h4Elements = sliderBox.querySelectorAll('h4');
    if (!h4Elements || h4Elements.length < 2) return;

    sliderBox.style.backgroundImage = `url(${sliderData[index].imgUrl})`;
    h4Elements[0].innerText = `${sliderData[index].brand}`;
    h4Elements[0].setAttribute("data-brand", sliderData[index].brand);

    h4Elements[1].innerText = `${sliderData[index].model}`;
    h4Elements[1].setAttribute("data-model", sliderData[index].model);
}

setInterval(() => {
    updateSlider();
    index++;
    if (index >= sliderData.length) index = 0;
}, 2000);

document.querySelector('.right').addEventListener('click', () => {
    index++;
    if (index >= sliderData.length) index = 0;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    index--;
    if (index < 0) index = sliderData.length - 1;
    updateSlider();
});
