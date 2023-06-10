console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
let ten = "10";
console.log(typeof("10")==typeof(10));
let tenInt = parseInt(ten);
console.log(tenInt);
console.log(typeof(tenInt)==typeof(10));
let dec = "9.8";
console.log(typeof("9.8")==typeof(10));
let decInt = parseInt(dec);
console.log(decInt);
console.log(Math.ceil(dec));
let p = "python";
let j = "jargon";
console.log(p.includes("on"),j.includes("on"));
console.log(p.search("on"),j.search("on"));
let jarSen = `I hope this course is not full of jargon.`;
console.log(jarSen.includes("jargon"));
let rand100 = Math.random()*101
console.log(Math.floor(rand100));
let rand50 = Math.random()*51+50;
console.log(Math.floor(rand50));
let rand255 = Math.random()*256
console.log(Math.floor(rand255));
let lang = 'JavaScript';
console.log(lang.length);
let rand_lang = Math.floor(Math.random()*10);
console.log(rand_lang);
let langRand = lang[rand_lang];
console.log(langRand);
let num =`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`;
console.log(num);
let sentence2 = `'You cannot end a sentence with because because because is a conjunction'`;
console.log(sentence2.substr(32,23));









