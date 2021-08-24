declare const val = 10;
declare const str = "hi";
declare let variable: number;
declare let unionexample: number | string;
declare let arrString: string[];
declare let mixedarr: (string | number | boolean)[];
declare let arrTup: [string, number];
declare let arrTup2: [string, number, string];
declare type stringOrNum = string | number;
declare let varusingalias: stringOrNum;
declare let varmixedarrayusingalias: (stringOrNum)[];
declare function fun(a: number, b: number): number;
declare let fun2: (a: number, b: number) => number;
declare let fun3: (a: number, b: number) => void;
declare let functionwithoptionalparams: (a: number, b: number, c?: number) => number;
interface swayam {
    name: string;
    age: number;
}
declare const obj: {
    name: string;
    age: string;
    sex: string;
};
declare const interfaceobj: swayam;
declare function generateRandom(length: number): string;
declare class swayamClass {
    private name;
    readonly age: number;
    sex?: string;
    nationality: string;
    protected password?: string;
    constructor(a: string, b: number, c: string);
    fun(): string;
    getPassword(): string | undefined;
}
declare const swayamobj: swayamClass;
interface swayamInt {
    age: number;
    sex?: string;
    nationality: string;
}
declare class swayamIntClass implements swayamInt {
    readonly age: number;
    nationality: string;
    sex?: string | undefined;
    private name;
    protected password?: string;
    constructor(a: string, age: number, nationality: string, sex?: string | undefined, p?: string);
    fun(): string;
    getPassword(): string | undefined;
}
declare const randObj: swayamIntClass;
declare const inputName: HTMLInputElement;
declare const inputAge: HTMLInputElement;
declare const inputNationality: HTMLInputElement;
declare const inputSex: HTMLInputElement;
declare const divelement: HTMLDivElement;
declare const inputForm: HTMLFormElement;
declare const generic: <T>(b: T, a: number) => T & {
    somekey: number;
};
interface genericinterface<T> {
    key1: number;
    key2: number;
    key3: T;
}
declare const someobj: genericinterface<string>;
declare enum enumobj {
    a = 0,
    b = 1,
    c = 2
}
//# sourceMappingURL=main.d.ts.map