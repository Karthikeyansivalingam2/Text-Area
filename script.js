const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxChars = 200;

textarea.addEventListener("input", function () {
  let typedChars = textarea.value.length;

  if (typedChars > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    typedChars = maxChars;

    warning.textContent = "Character limit reached!";

    // Trigger shake animation
    textarea.classList.add("shake");

    // Remove class so it can shake again next time
    setTimeout(() => {
      textarea.classList.remove("shake");
    }, 300);
  } else {
    warning.textContent = "";
  }

  counter.textContent = `${typedChars} / ${maxChars} characters`;
});
