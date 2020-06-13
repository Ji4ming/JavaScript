// JavaScriptNotes_Ji4ming_20200612_myScript.js

// "use strict"

// document.getElementsByID("demo");
// document.getElementsByClassName("demo");
// document.getElementsByTagName("p");

// variables  单行或多行声明都可以
var a = 10;
var b = true;
var c = null;                                     // typeof(c) = object;
var person = undefined;                           // 值为 undefined, 类型为 undefined(typeof person = undefined)，你可以设置值为 undefined 来清空对象
// 如果只声明了变量名， typeof 会返回 undefined
// null === undefined -> false      null == undefined -> true
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var indexnum = lastName.indexOf("son");           // indexOf() 来定位字符串中某一个指定的字符首次出现的位置，没找到则返回 -1
var matchornot = lastName.match("son")     //  match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符，没找到则返回 null，case sensitive
var operatorusage = + lastName;                   // + operator 用于将变量转换为数字，这里的 operatorusage 是一个数字
var y = "He is called \"Johnny\"";                // \加标点符号
var charactera = lastName[1];                     // 你可以使用索引位置来访问字符串中的每个字符
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值 ->  在JavaScript中，数组是一种特殊的对象类型。 因此 typeof [] 返回 object。
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
var d = new Date();                               // 声明 date
    // 对象属性有两种寻址方式
    // name=person.lastname;
    // name=person["lastname"];

    // 一共有三种对象类型：Object Date Array
    // 一共有六种数据类型：string number boolean object function symbol*

// 当声明新变量时，可以使用关键词 "new" 来声明其类型：
/*
    var carname=new String;
    var x=      new Number;
    var y=      new Boolean;
    var cars=   new Array;
    var person= new Object;
*/

// toUpperCase() / toLowerCase():

// variablename=(condition)?value1:value2
// value1 -> true condition    value2 -> false condition

// print in console
console.log(a);

// window.alert("This is window alert!");

// Number, Boolean, Date -> String
String(a);               // 将变量 x 转换为字符串并返回
String(123);       // 将数字 123 转换为字符串并返回
String(100 + 23);  // 将数字表达式转换为字符串并返回

// Number, Boolean, Date 方法 toString() 也是有同样的效果
a.toString();
(123).toString();
(100 + 23).toString();

// String, Boolean, Date -> Number
Number("3.14");    // 返回 3.14
Number(false);     // 返回 0
Number(true);      // 返回 1
Number(" ");       // 返回 0
Number("");        // 返回 0
Number("99 88");   // 返回 NaN -> 其他的字符串会转换为 NaN (不是个数字)
Number(d);               // date
d.getDate();             // date

/*

Number 对象属性:
constructor	返回对创建此对象的 Number 函数的引用。
MAX_VALUE	可表示的最大的数。
MIN_VALUE	可表示的最小的数。
NEGATIVE_INFINITY	负无穷大，溢出时返回该值。
NaN	非数字值。
POSITIVE_INFINITY	正无穷大，溢出时返回该值。
prototype	允许您可以向对象添加属性和方法。

Number 对象方法：
isFinite	检测指定参数是否为无穷大。
toExponential(x)	把对象的值转换为指数计数法。
toFixed(x)	把数字转换为字符串，结果的小数点后有指定位数的数字。
toPrecision(x)	把数字格式化为指定的长度。
toString()	把数字转换为字符串，使用指定的基数。
valueOf()	返回一个 Number 对象的基本数字值。

Date 对象属性：
constructor	返回对创建此对象的 Date 函数的引用。
prototype	使您有能力向对象添加属性和方法。

Date 对象方法：
getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
getFullYear()	从 Date 对象以四位数字返回年份。
getHours()	返回 Date 对象的小时 (0 ~ 23)。
getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
getMonth()	从 Date 对象返回月份 (0 ~ 11)。
getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
getTimezoneOffset()	返回本地时间与格林威治标准时间 (GMT) 的分钟差。
getUTCDate()	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
getUTCDay()	根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
getUTCFullYear()	根据世界时从 Date 对象返回四位数的年份。
getUTCHours()	根据世界时返回 Date 对象的小时 (0 ~ 23)。
getUTCMilliseconds()	根据世界时返回 Date 对象的毫秒(0 ~ 999)。
getUTCMinutes()	根据世界时返回 Date 对象的分钟 (0 ~ 59)。
getUTCMonth()	根据世界时从 Date 对象返回月份 (0 ~ 11)。
getUTCSeconds()	根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
getYear()	已废弃。 请使用 getFullYear() 方法代替。
parse()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
setFullYear()	设置 Date 对象中的年份（四位数字）。
setHours()	设置 Date 对象中的小时 (0 ~ 23)。
setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
setMonth()	设置 Date 对象中月份 (0 ~ 11)。
setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
setTime()	setTime() 方法以毫秒设置 Date 对象。
setUTCDate()	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
setUTCFullYear()	根据世界时设置 Date 对象中的年份（四位数字）。
setUTCHours()	根据世界时设置 Date 对象中的小时 (0 ~ 23)。
setUTCMilliseconds()	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
setUTCMinutes()	根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
setUTCMonth()	根据世界时设置 Date 对象中的月份 (0 ~ 11)。
setUTCSeconds()	setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。
setYear()	已废弃。请使用 setFullYear() 方法代替。
toDateString()	把 Date 对象的日期部分转换为字符串。
toGMTString()	已废弃。请使用 toUTCString() 方法代替。
toISOString()	使用 ISO 标准返回字符串的日期格式。
toJSON()	以 JSON 数据格式返回日期字符串。
toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串。
toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串。
toString()	把 Date 对象转换为字符串。
toTimeString()	把 Date 对象的时间部分转换为字符串。
toUTCString()	根据世界时，把 Date 对象转换为字符串。
UTC()	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
valueOf()	返回 Date 对象的原始值。

*/

// function
function myFunction1() {
    document.write("Override Successfully!");
}

// 使用 constructor 属性来查看对象是否为日期 (包含字符串 "Date"):
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}

// 使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"):
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

// Collection 常用于返回对象个数
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;

// Nodelist 常用于返回对象内容
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;
// myNodelist[0] -> 第一个带有 p 标签的段落

// Collection 和 myNodelist 都不是数组！！
// HTMLCollection 元素可以通过 name，id 或索引来获取。NodeList 只能通过索引来获取。只有 NodeList 对象有包含属性节点和文本节点。

/*

    有的时候我们想要在所有已经存在的对象添加新的属性或方法。使用 prototype 属性就可以给对象的构造函数添加新的属性：

    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
    }

    Person.prototype.nationality = "English";

 */