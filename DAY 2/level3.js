let love = `Love is the best thing in this world. Some found their love and some are still looking for their love`;
let love1 = love.match(/love/gi);
console.log(love1.length);
let because = 'You cannot end a sentence with because because because is a conjunction';
let because1 = because.match(/because/gi);
console.log(because1.length);
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let newSentence = sentence2.replace((/[^\w\s]/g),"");
console.log(newSentence);
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let income1 = income.match(/\d+/g);
console.log(income1);



