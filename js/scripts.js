$(function(){
  $('.answer, .error').hide();
  var answer1 = "Believe you can and you're halfway there. Theodore Roosevelt";
  var vowels = ["a", "e", "i", "o", "u"];
  var replacedVowels = answer1.substr(0);

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
      // $('.userInput input').effect('shake');
      $('.error').show();
      $('.userInput input').addClass('input-error');
    }
  });
});
