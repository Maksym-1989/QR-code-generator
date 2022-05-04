const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img");

const addActiveClass = () => {
  const inputValue = qrInput.value;
  if (!inputValue) return wrapper.classList.remove("active");
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
  wrapper.classList.add("active");
};

btn.addEventListener("click", addActiveClass);
