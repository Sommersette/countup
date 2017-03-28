// var replaceVowel = function(string, vowel) {
//   return string.split(vowel).join("-");
// }
// var replacer = function(string) {
//   var vowels = ['a','e','i','o','u','A','E','I','O','U'];
//   var newString = '';
//   vowels.forEach(function(vowel) {
//     newString = replaceVowel(string, vowel);
//   });
//   return newString;
// }

// Stolen from stackoverflow
String.prototype.shuffle = function () { // <-- this is mixing all letters between all words.
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); // <-- this makes it randomize to a new combination every time you reload the page.
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
};
// end

$(function(){
  $('.answer, .error').hide();
  var answer1 = "Believe you can and you're halfway there. Theodore Roosevelt";
  var vowels = ["a", "e", "i", "o", "u"];
  var replacedVowels = answer1.substr(0).shuffle();

  for (i = 0; i < vowels.length; i++) {
    var replacedVowels = replacedVowels.split(vowels[i]).join("-");
  };

  $('.puzzle h2').text(replacedVowels);

  $('.userInput button').click(function() {
    var userInput = $('.userInput input').val();
    if (userInput === answer1){
      $('.intial').fadeOut();
      $('.answer').fadeIn();
      $('.answer h3').text(answer1);
    } else {
      $('.error').show();
      $('.userInput input').addClass('input-error shake');
    }
  });
});
