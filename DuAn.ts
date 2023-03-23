// Khai báo thư viện
import { question } from "readline-sync";
// Input
console.log("Bạn đang chơi game đoán số random [1,100]")
const min: Number = 0 ;
const max: Number = 100 ;
let turn: number = 1;
let soBiMat:number = Math.floor(Math.random() * (Number(max) - Number(min) + 1) ) + Number(min);
let score: number = 0;
// Xu ly tinh toan 
while (turn <= 3){
    let soDoan: Number = Number(question("Nhap so cua ban: "));
    if(soDoan == soBiMat){
        if(turn == 1){
            score = score + 100 ;}
        else if(turn == 2){
            score = score + 50 ;}
        else{
            score = score + 30 ;}
    console.log("Xin chúc mừng bạn đã đoán đúng ");
    console.log("Bạn được:",score,"điểm");break;
    }
    else if(soDoan < soBiMat){
        turn++;
        if(turn == 2)
            console.log("Số của bạn nhỏ quá, bạn còn 2 lượt chơi ");
        if(turn == 3)
            console.log("Số của bạn nhỏ quá, bạn còn 1 lượt chơi ");
    }
    else {
        turn++;
        if(turn == 2)
            console.log("Số của bạn lớn quá, bạn còn 2 lượt chơi ");
        if(turn == 3)
            console.log("Số của bạn lớn quá, bạn còn 1 lượt chơi ");

    }
    if ( turn > 3)
    console.log("Game Over");
}



