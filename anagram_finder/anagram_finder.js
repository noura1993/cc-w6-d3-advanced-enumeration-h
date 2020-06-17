const AnagramFinder = function (word) {
    this.word = word;
    this.wordLetters = word.toLowerCase().split('').sort();
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(otherWord => otherWord !== this.word && compareArrays(this.wordLetters, otherWord.toLowerCase().split('').sort()));
};

const compareArrays = function (arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((ignored, i) => arr1[i] === arr2[i])
};

module.exports = AnagramFinder;
