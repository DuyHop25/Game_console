// Khai báo thư viện
import { question } from "readline-sync";
// Input
console.log("Bạn đang chơi game đoán số random [1,100]")
const min: Number = 0 ;
const max: Number = 100 ;
let turn: number = 3;
let soBiMat:number = Math.floor(Math.random() * (Number(max) - Number(min) + 1) ) + Number(min);
console.log(soBiMat);
let score: number = 0;

let soDoan: Number = Number(question("Nhap so cua ban: "));
let flag: boolean = false;

if(soDoan == soBiMat) {
    flag = true;
    score +=100
}

if (flag == false){
    if(soDoan<soBiMat){turn --;console.log("Số của bạn nhỏ quá, bạn còn",turn,"lượt chơi");}
    else {turn --;console.log("Số của bạn lớn quá, bạn còn",turn,"lượt chơi")}
    soDoan=Number(question("Nhap so cua ban: "));
    if(soDoan==soBiMat) {
        flag = true;
        score +=50;}
}
if (flag == false){
    if(soDoan<soBiMat){turn --;console.log("Số của bạn nhỏ quá, bạn còn",turn,"lượt chơi");}
    else {turn --;console.log("Số của bạn lớn quá, bạn còn",turn,"lượt chơi")}
    soDoan=Number(question("Nhap so cua ban: "));
    if(soDoan==soBiMat) {
        flag = true;
        score +=30;}
}


if( flag == true){
    console.log("Bạn đã thắng:",score,"điểm");
}
else {
console.log("Game over");
}
