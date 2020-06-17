const PangramFinder = function (phrase) {
  this.phraseLetters = phrase.toLowerCase().split('');
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(letter => this.phraseLetters.includes(letter));
};

module.exports = PangramFinder;
