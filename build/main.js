"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var val = 10;
var str = "hi";
var variable;
var unionexample;
var arrString = ['a', 'b', 'c'];
var mixedarr = ["example", 10, true];
var arrTup = ["should be a string", 10];
var arrTup2 = ["a", 3, "23"];
var varusingalias;
var varmixedarrayusingalias = ["string", 20];
arrTup = ["another string", 4];
variable = 10;
function fun(a, b) {
    return a + b;
}
var fun2;
var fun3;
var functionwithoptionalparams;
fun2 = function (first, second) {
    return first + second;
};
fun3: fun2 = function (first, second) {
    return first + second;
};
functionwithoptionalparams = function (first, second, third) {
    return 10;
};
functionwithoptionalparams(3, 4);
functionwithoptionalparams(4, 5, 6);
var obj = {
    name: "swayam",
    age: "12",
    sex: "M"
};
var interfaceobj = {
    name: "swayam",
    age: 19
};
function generateRandom(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
var swayamClass = (function () {
    function swayamClass(a, b, c) {
        this.name = a;
        this.age = b;
        this.nationality = c;
        this.password = generateRandom(5);
    }
    swayamClass.prototype.fun = function () {
        return "Hi from " + this.name + " of age " + this.age + " from " + this.nationality;
    };
    swayamClass.prototype.getPassword = function () {
        return this.password;
    };
    return swayamClass;
}());
var swayamobj = new swayamClass("swayam", 19, "indian");
swayamobj.fun();
var swayamIntClass = (function () {
    function swayamIntClass(a, age, nationality, sex, p) {
        this.age = age;
        this.nationality = nationality;
        this.sex = sex;
        this.name = a;
        this.password = generateRandom(5);
    }
    swayamIntClass.prototype.fun = function () {
        return "Hi from " + this.name + " of age " + this.age + " from " + this.nationality;
    };
    swayamIntClass.prototype.getPassword = function () {
        return this.password;
    };
    return swayamIntClass;
}());
var randObj = new swayamIntClass("swayam", 19, "indian", "M");
randObj.fun();
var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputNationality = document.querySelector("#nationality");
var inputSex = document.querySelector("#sex");
var divelement = document.querySelector(".maindiv");
var inputForm = document.querySelector("#test");
inputForm === null || inputForm === void 0 ? void 0 : inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var ob = new swayamIntClass(inputName.value, inputAge.valueAsNumber, inputNationality.value, inputSex.value);
    divelement.innerText = ob.fun();
    inputForm.reset();
});
var generic = function (b, a) {
    return __assign(__assign({}, b), { somekey: a });
};
generic(20, 2);
var someobj = {
    key1: 10,
    key2: 110,
    key3: "string"
};
var enumobj;
(function (enumobj) {
    enumobj[enumobj["a"] = 0] = "a";
    enumobj[enumobj["b"] = 1] = "b";
    enumobj[enumobj["c"] = 2] = "c";
})(enumobj || (enumobj = {}));
console.log(enumobj.a);
console.log(enumobj.b);
console.log(enumobj.c);
//# sourceMappingURL=main.js.map