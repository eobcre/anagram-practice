const isAnagram = (s, t) => {
  let len1 = s.length;
  let len2 = t.length;

  if (len1 !== len2) {
    return 'Invalid';
  }

  let sort1 = s.split('').sort().join('');
  let sort2 = t.split('').sort().join('');

  if (sort1 === sort2) {
    return 'True';
  } else {
    return 'False';
  }
};

const result = isAnagram('anagram', 'gramana');

const display = document.querySelector('#result');
display.textContent = result;
