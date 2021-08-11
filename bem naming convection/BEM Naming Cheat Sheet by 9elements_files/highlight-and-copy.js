document.addEventListener('click', function(event) {

  // get name attriute
  event = event || window.event;
  const target = event.target || event.srcElement;

  if (
    target.hasAttribute("class") &&
    !target.hasAttribute("omit") &&
    target.closest('.class-highlight')
    ) {
    event.preventDefault();
    const name = target.getAttribute('class');
    const body = document.getElementsByTagName("body")[0];
    // copy value
    const el = document.createElement('textarea');
    el.value = name;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // show copied-info
    body.classList.add('copied');
    setTimeout(function() {
      body.classList.remove('copied');
    }, 1000);
  }

});

const toggleHtml = () => {
  document.getElementsByTagName('body')[0].classList.toggle('show-html');
};

htmlToggle = document.getElementById('show-html');
if (htmlToggle.checked) {
  document.getElementsByTagName('body')[0].classList.add('show-html');
}
htmlToggle.addEventListener('change', toggleHtml);

//replace Images
const images = document.querySelectorAll('.class-highlight img');
images.forEach((image) => {
  const classes = image.className;
  const newEl = document.createElement('div');
  newEl.classList.add(classes);
  newEl.setAttribute('fakeimage', '');
  image.parentNode.replaceChild(newEl, image);
});

//replace checkboxes
const checkboxes = document.querySelectorAll('.class-highlight input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  const classes = checkbox.className;
  const newEl = document.createElement('div');
  newEl.classList.add(classes);
  newEl.setAttribute('fakecheckbox', '');
  checkbox.parentNode.replaceChild(newEl, checkbox);
});

//replace input-text
const inputtexts = document.querySelectorAll('.class-highlight input[type="text"]');
inputtexts.forEach((inputtext) => {
  const classes = inputtext.className;
  const newEl = document.createElement('div');
  newEl.classList.add(classes);
  newEl.setAttribute('fakeinputtext', '');
  inputtext.parentNode.replaceChild(newEl, inputtext);
});

//replace Buttons
const buttons = document.querySelectorAll('.class-highlight button');
buttons.forEach((button) => {
  const classes = button.className;
  const newEl = document.createElement('div');
  const buttonContent = document.createTextNode(button.textContent);
  newEl.classList.add(classes);
  newEl.appendChild(buttonContent);
  newEl.setAttribute('fakebutton', '');
  button.parentNode.replaceChild(newEl, button);
});

//add Tabindex
const tabElements = document.querySelectorAll('.class-highlight *');
tabElements.forEach((tabElement) => {
  tabElement.setAttribute("tabindex", "0");
})