const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let sort1 = s.split('').sort().join('');
  let sort2 = t.split('').sort().join('');

  return sort1 === sort2;
};

const inputElement_1 = document.querySelector('#linked-1');
const inputElement_2 = document.querySelector('#linked-2');
const resultElement = document.querySelector('#result');

const checkAnagram = () => {
  const input_1 = inputElement_1.value;
  const input_2 = inputElement_2.value;

  const result = isAnagram(input_1, input_2);

  if (result) {
    resultElement.textContent = 'True';
  } else {
    resultElement.textContent = 'False';
  }
};

inputElement_1.addEventListener('input', checkAnagram);
inputElement_2.addEventListener('input', checkAnagram);
