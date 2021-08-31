console.log("/hello/ig: ", "heLLo sldfj HELLO".match(/hello/ig))
console.log("/hello/g: ", 'hello, hhhhello'.replace(/hello/g, 'goodbuy'))
console.log('$&', "/HTML/: ", "Люблю HTML".replace(/HTML/, "$& и JavaScript"))
console.log('$`', "/HTML/: ", "ll Люблю HTML".replace(/HTML/, "$` и JavaScript"))
console.log("$'","/HTML/: ", "ll Люблю HTML 12121".replace(/HTML/, "$' и JavaScript"))
console.log('$n', "/HTML/: ", "ll Люблю HTML 12121".replace(/HTML/, "$n и JavaScript"))
console.log('$<name>', "/HTML/: ", "ll Люблю HTML 12121".replace(/HTML/, "$<name> и JavaScript"))
console.log('$$', "/HTML/: ", "ll Люблю HTML 12121".replace(/HTML/, "$$ и JavaScript"))

console.log(/hello/i.test('hello'))

console.log("lj84lkj43".match(/\d/g))
console.log("I love HTML5!".match(/\s\w\w\w\w\d/))

console.log("A\nB".match(/A.B/))
console.log("A\nB".match(/A.B/s))

console.log("ldjfljj32724kljsdflj8372lksdjfklj83297".match(/\d+/g))

console.log("A ბ ㄱ".match(/\p{L}/gu))
console.log("A ბ ㄱ".match(/\p{L}/g))

console.log("число: xAF".match(/x\p{Hex_Digit}\p{Hex_Digit}/u))
console.log("Hello Привет 你好 123_456".match(/\p{sc=Han}/gu))
console.log("Цены: $2, €1, ¥9".match(/\p{Sc}\d/gu))

console.log("hello lsdkjflsdjfljsdlkfj".match(/^hello/)[0])
console.log("lsdkjflsdjfljsdlkfjhello".match(/^hello/))
console.log("hello lsdkjflsdjfljsdlkfj".match(/hello$/))
console.log("lsdkjflsdjfljsdlkfjhello".match(/hello$/)[0])
console.log("43:21".match(/^\d\d:\d\d$/))

let value1 = `1A lkjljk
2b lkjlj
3D jljljk`

console.log(value1.match(/^\d\w/gm))
console.log(value1.match(/\w$/gm))
console.log(value1.match(/\w\n/gm))

console.log("java javaa javascript".match(/\bjava\b/))
console.log( "Hello, Java!".match(/\bHello\b/) ); // Hello
console.log( "Hello, Java!".match(/\bJava\b/) );  // Java
console.log( "Hello, Java!".match(/\bHell\b/) );  // null (нет совпадения)
console.log( "Hello, Java!".match(/\bJava!\b/) ); // null (нет совпадения)

console.log("Завтрак в 09:00 в комнате 123:456".match(/\b\d\d:\d\d\b/))

console.log("lkjlkj....".match(/\.+/g))
console.log("1\\s".match(/\\/))
console.log("1/s".match(/\//))

console.log("java lava".match(/[jl]ava/g))

console.log("a4 G8 b2".match(/[a-w0-9][0-9-\w]/g))
console.log("a4 G8 b2".match(/[a-w0-9][a-w0-9]/gi))

console.log("Hi 你好 12".match(/[\w\p{L}\d]/giu))
console.log("Hi 你好 12 _".match(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\{Join_C}]/gu))
console.log("")

console.log("lkjsf329382lkjkj 8u02 kjlkj 802".match(/[^\d]+/gi))
console.log("lkjsf329382lkjkj 8u02 kjlkj 802".match(/[^a-z]+/giu))

console.log("1 + 2 - 3".match(/[-().^+]/g))
console.log("1 + 2 - 3".match(/[\-\(\)\.\^\+]/g))

console.log("Завтрак в 09:00. Ужин в 21-30".match(/\d+[-:]\d+/g))

console.log("sf k  82723 lkjsf8293 lkj 3245 1 lkj 8230kj".match(/\d{4}/g))
console.log("sf k 82723 lkjsf8293 lkj 3245 1 lkj 8230kj".match(/\b\d{4}\b/g))
console.log("sf k 82723 lkjsf8293 lkj 3245 1 lkj 8230kj".match(/\d{1,}/g))
console.log("sf k  82723 lkjsf8293 lkj 3245 1 lkj 8230kj".match(/\d{1,4}/g))
console.log("sf k  82723 lkjsf8293 lkj 3245 1 lkj 8230kj".match(/l?k[ \w]/g))

console.log("lksdf *kj ^ kj723  329327 lksfh Ljlj #kjl".match(/[^a-zA-Z0-9]+/g) === null)
console.log("lksdf kj  kj  329327 lksfh Ljlj kjl".match(/[^a-zA-Z0-9]+/g) == null)
console.log("lksdfkjkj723329327lksfhLjljkjl".match(/[^a-zA-Z0-9]+/g) === null)
console.log("lksdfkjkj723329327lksfhLjljkjl".match(/^[^a-zA-Z0-9]+$/g) === null)

console.log("jkk jk j jj320 jkkkkkk".match(/jk*/g))
console.log("<h1>Привет!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi))
console.log("<h1>Привет!</h1>".match(/<\/?\w+>/gi))

console.log("Привет!... Как дела?.....".match(/\.+/g))
console.log("color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2".match(/#[a-z0-9]{6}/gi))

console.log('jlkj "sdfsdf" "sdfsdf" "sdf    s"'.match(/".+?"/g))
console.log('jlkj "sdfsdf" "sdfsdf" "sdf    s"'.match(/"[^"]+"/g))

console.log('...<a href="link1" class="doc">... <a href="link2" class="doc">...'.match(/<a href=".*" class="doc">/g))
console.log('...<a href="link1" class="doc">... <a href="link2" class="doc">...'.match(/<a href=".*?" class="doc">/g))
console.log('...<a href="link1" class="doc">... <a href="link2" class="doc">...'.match(/<a href="[^"]*" class="doc">/g))

console.log("123 456".match(/\d+? \d+?/g))
let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
console.log(str.match(/<!--.*-->/isg))
console.log(str.match(/<!--.*?-->/isg))

console.log('<> <a href="/"> <input type="radio" checked> <b>'.match(/<\w.*?>/gi))
console.log('<> <a href="/"> <input type="radio" checked> <b>'.match(/<[^<>]+>/gi))

console.log('Gogogo kjljl go'.match(/(go)+/gi))
console.log("site.com my.site.com".match(/(\w+\.)+\w+/g))
console.log("my@mail.com @ his@site.com.uk".match(/[-.\w]+@([\w-]+\.)+[\w-]+/g))

console.log('<h1>Hello, world!</h1>'.match(/<.*?>/))
console.log('<h1>Hello, world!</h1>'.match(/<(.*?)>/))

console.log('a'.match(/a(z)?(c)?/))
console.log('<h1> <h2>'.matchAll(/<(.*?)>/gi))

const groups = '2019-04-30'.match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/)
console.log('>>>', groups)
console.log(groups.groups.year)
console.log(groups.groups.month)
console.log(groups.groups.day)

str = "John Bull";
let regexp = /(\w+) (\w+)/;
console.log( str.replace(regexp, '$2, $1'))

console.log("2000-12-31, 2021-08-21".replace(/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/gi, '$<day>.$<month>.$<year>'))

console.log("Gogogo John!".match(/(?:go)+ (\w+)/i))
console.log(`He said: "She's the one!".`.match(/(['"]).*?\1/g))
console.log(`He said: "She's the one!".`.match(/(?<value>["']).*?\k<value>/g))

console.log("Сначала появился язык Java, затем HTML, потом JavaScript".match(/html|css|java(script)?/gi))
console.log("00:00 10:10 23:59 25:99 1:2".match(/([01]\d|2[0-3]):[0-5]\d/g))


console.log("Java JavaScript PHP C++ C".match(/java(script)?|php|c(\+*)/gi))

regexp = /\[(b|url|quote)\].*?\[\/\1\]/gs;
str = `
  [b]привет![/b]
  [quote]
    [url]http://ya.ru[/url]
  [/quote]
`
console.log( str.match(regexp) )

regexp = /"(\\.|[^"\\])*"/g;
str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
console.log( str.match(regexp) )

console.log("1 индейка стоит 30€".match(/\d+(?=€)/))
console.log("1 индейка стоит 30€".match(/\d+(?=\s)(?=.*30)/))
console.log("2 индейки стоят 60€".match(/\d+(?!€)/))
console.log("1 индейка стоит $30".match(/(?<=\$)\d+/))
console.log("2 индейки стоят $60".match(/(?<!\$)\d+/))
console.log("1 индейка стоит 30€".match(/\d+(?=(€|kr))/))
console.log("1 индейка стоит $30".match(/(?<=(\$|£))\d+/))

console.log("0 12 -5 123 -18".match(/(?<=-)\d+/g))
console.log("0 12 -5 123 -18".match(/(?<!-)\d+/g))

console.log('...<body style="...">...'.replace(/<body.*>/, '$&<h1>Hello</h1>'))
console.log('...<body style="...">...'.replace(/(?<=<body.*>)/, `<h1>Hello</h1>`))

console.log("An input string that takes a long time or even makes this regex to hang!".match(/^((?=(?<word>\w+))\k<word>\s?)*$/))
// console.log("An input string that takes a long time or even makes this regex to hang!".match(/^(\w+\s?)*$/))

regexp = /\w+/g
str = regexp.exec('let varName')
console.log(str)
console.log(regexp.lastIndex)
str = regexp.exec('let varName')
console.log(str)
console.log(regexp.lastIndex)
str = regexp.exec('let varName')
console.log(str)
console.log(regexp.lastIndex)


str = 'let varName = "value"';
regexp = /\w+/g; // без флага g свойство lastIndex игнорируется
regexp.lastIndex = 3;
let word = regexp.exec(str);
console.log(word)

str = 'let varName = "value"';
regexp = /\w+/y;
regexp.lastIndex = 3;
console.log( regexp.exec(str) ); // null (на позиции 3 пробел, а не слово)
regexp.lastIndex = 4;
console.log( regexp.exec(str) ); // varName (слово на позиции 4)

console.log('12, 34, 56'.split(/\s*,/))

str = "Я люблю JavaScript!";
regexp = /Java.+/;
console.log( str.search(regexp) )

str = "html and css";
result = str.replace(/html|css/gi, str => str.toUpperCase());
console.log(result)

console.log("Хо-Хо-хо".replace(/хо/gi, (match, offset) => offset))

str = "John Smith";
result = str.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname}, ${name}`);
console.log(result); // Smith, John


str = "Я люблю JavaScript";
// эти два теста делают одно и же
console.log( /люблю/i.test(str) ); // true
console.log( str.search(/люблю/i) != -1 ); // true

regexp = /люблю/gi;
str = "Я люблю JavaScript";
// начать поиск с 10-й позиции:
regexp.lastIndex = 10;
console.log( regexp.test(str) );

regexp = /javascript/g;  // (regexp только что создан: regexp.lastIndex=0)
console.log( regexp.test("javascript") ); // true (теперь regexp.lastIndex=10)
console.log( regexp.test("javascript") ); // false