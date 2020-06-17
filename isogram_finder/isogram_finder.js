const IsogramFinder = function (word) {
    this.wordCharacters = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.wordCharacters.every((character, i) => this.wordCharacters.indexOf(character) === i);
}

module.exports = IsogramFinder;
