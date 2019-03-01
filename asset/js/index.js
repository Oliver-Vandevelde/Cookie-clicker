/*
let multi = document.getElementsByClassName("Multiplicateur");
let Bonus = document.getElementsByClassName("bonus");
console.log(multi);

for (let i = 0; i <= multi.length; i++){
    multi[i].onclick = function() {
        Multiplicateur[i]();
    }
}
for (let i = 0; i <= Bonus.length; i++){

    Bonus[i].onclick = function () {
        bonus[i]();
    }
}
*/

//Je n'ai pas compris comment faire avec ceci 

document.getElementById("Canvas").onclick = function() {cookie()};
document.getElementById("bonus1").onclick = function() {bonus1()};
document.getElementById("bonus2").onclick = function() {bonus2()};
document.getElementById("bonus3").onclick = function() {bonus3()};
document.getElementById("bonus4").onclick = function() {bonus4()};
document.getElementById("bonus5").onclick = function() {bonus5()};
document.getElementById("BonusTimer").onclick = function() {BonusTimer()};
document.getElementById("Multiplicateur1").onclick = function() {Multiplicateur1()};
document.getElementById("Multiplicateur2").onclick = function() {Multiplicateur2()};
document.getElementById("Multiplicateur3").onclick = function() {Multiplicateur3()};
document.getElementById("Multiplicateur4").onclick = function() {Multiplicateur4()};
document.getElementById("Multiplicateur5").onclick = function() {Multiplicateur5()};

let score = 0;
setInterval ( maj , 100);
//variable bonus time
let minute = 0;
let timer = 0;
let bonusTime = 1;
let prixTime = 5000;
let timeOk = 0;
let temps;
//Variable premier clic
let pointClick = Number(1);
let click = Number(50);
let nmbrClick = 0;
// Bonus
let amelioClick = 10;
let multiClick = 2500;
let doubleClick = 1;
//Variable premier autoclic 
let pointMamy = 0;
let mamy = Number(100);
let nmbrMamy = 0;
// Bonus
let amelioMamy = 10;
let multiMamy = 5000;
let doubleMamy = 1;
//Variable deuxieme autoclic 
let pointFarm = 0;
let farm = Number(500);
let nmbrFarm = 0;
// Bonus
let amelioFarm = 10;
let multiFarm = 25000;
let doubleFarm = 1;
//Variable troisieme autoclic 
let pointFactory = 0;
let factory = Number(2500);
let nmbrFactory = 0;
// Bonus
let amelioFactory = 10;
let multiFactory = 1000000;
let doubleFactory = 1;
//Variable quatrieme autoclic 
let pointBank = 0;
let bank = Number(10000);
let nmbrBank = 0;
// Bonus
let amelioBank = 10;
let multiBank = 200000000;
let doubleBank = 1;

function BonusTimer(){
    if ((score >= prixTime) && ((timeOk == 0)||(timeOk == 1))){

        score = score - prixTime;
        temps = setInterval ( time , 1000);
        bonusTime = 2;
        timeOk = 2;
        document.getElementById("BonusTimer").style.display = "none";

    }
    function time(){

        console.log(minute)
        console.log(timer)
        timer++;

        if ( timer == 60){
    
            minute++;
            timer = 0;
            return minute , timer;

        }
        if (( timer < 31) && (timeOk == 2)){

            document.getElementById("Timer").style.display = "flex";
            document.getElementById("Timer").innerHTML = " | Bonus x2 "+(30 - timer)+"sec | ";

        }
        if (( timer >= 31) && (timeOk == 2)){

            document.getElementById("Timer").style.display = "none";
            bonusTime = 1;
            timeOk = 3;

        }
    }
}

function cookie() {

    score += ( pointClick * doubleClick ) * bonusTime;
    document.getElementById("affichage").innerHTML = score +" Cookies";
    return score;

}

function maj(){

    let second = (( pointMamy * doubleMamy ) + ( pointFarm * doubleFarm ) + ( pointFactory * doubleFactory ) + ( pointBank * doubleBank )) * bonusTime;
    score = Number(score) + Number(second) ;
    document.getElementById("affichage").innerHTML = score +" Cookies";
    document.getElementById("titre").innerHTML = " "+score+" Cookies ";
    document.getElementById("SECOND").innerHTML = "Cookies par seconde : "+ second * 10;
    document.getElementById("bonus2").innerHTML = mamy +" = Grand-mére ("+((pointMamy*10) * doubleMamy)+"/s) " +"| Nombre actuelle : "+ nmbrMamy;
    document.getElementById("bonus3").innerHTML = farm +" = Ferme a cookie ("+((pointFarm*10) * doubleFarm)+"/s) " +"| Nombre actuelle : "+ nmbrFarm;
    document.getElementById("bonus4").innerHTML = factory+" = Usine a cookie ("+((pointFactory*10) * doubleFactory)+"/s) " +"| Nombre actuelle : "+ nmbrFactory;
    document.getElementById("bonus5").innerHTML = bank +" = Banque a cookie ("+((pointBank*10) * doubleBank)+"/s) " +"| Nombre actuelle : "+ nmbrBank;

    if (score < click){

        document.getElementById("bonus1").style.opacity = '0.6';

    }
    if (score >= click){

        document.getElementById("bonus1").style.opacity = '1.0';

    }
    if (score < mamy){

        document.getElementById("bonus2").style.opacity = '0.6';

    }
    if (score >= mamy){

        document.getElementById("bonus2").style.opacity = '1.0';

    }
    if (score < farm){

        document.getElementById("bonus3").style.opacity = '0.6';

    }
    if (score >= farm){

        document.getElementById("bonus3").style.opacity = '1.0';

    }
    if (score < factory){

        document.getElementById("bonus4").style.opacity = '0.6';

    }
    if (score >= factory){

        document.getElementById("bonus4").style.opacity = '1.0';

    }
    if (score < bank){

        document.getElementById("bonus5").style.opacity = '0.6';

    }
    if (score >= bank){

        document.getElementById("bonus5").style.opacity = '1.0';

    }
    if (score < multiClick){

        document.getElementById("Multiplicateur1").style.opacity = '0.6';

    }
    if ((score >= multiClick) && (nmbrClick >= (amelioClick - 1))){

        document.getElementById("Multiplicateur1").style.display = "flex";
        document.getElementById("Multiplicateur1").style.opacity = '1.0';
        document.getElementById("Multiplicateur1").innerHTML = " | "+multiClick +" = Bonus Clique x"+ (doubleClick + 1)+" | ";

    }
    if (score < multiMamy){

        document.getElementById("Multiplicateur2").style.opacity = '0.6';

    }
    if ((score >= multiMamy) && (nmbrMamy >= amelioMamy)){

        document.getElementById("Multiplicateur2").style.display = "flex";
        document.getElementById("Multiplicateur2").style.opacity = '1.0';
        document.getElementById("Multiplicateur2").innerHTML = " | "+multiMamy +" = Bonus Grand-mere x"+ (doubleMamy + 1)+" | ";

    }
    if (score < multiFarm){

        document.getElementById("Multiplicateur3").style.opacity = '0.6';

    }
    if ((score >= multiFarm) && (nmbrFarm >= amelioFarm)){

        document.getElementById("Multiplicateur3").style.display = "flex";
        document.getElementById("Multiplicateur3").style.opacity = '1.0';
        document.getElementById("Multiplicateur3").innerHTML = " | "+multiFarm +" = Bonus Ferme x"+ (doubleFarm + 1)+" | ";

    }
    if (score < multiFactory){

        document.getElementById("Multiplicateur4").style.opacity = '0.6';

    }
    if ((score >= multiFactory) && (nmbrFactory >= amelioFactory)){

        document.getElementById("Multiplicateur4").style.display = "flex";
        document.getElementById("Multiplicateur4").style.opacity = '1.0';
        document.getElementById("Multiplicateur4").innerHTML = " | "+multiFactory +" = Bonus Usine x"+ (doubleFactory + 1)+" | ";

    }
    if (score < multiBank){

        document.getElementById("Multiplicateur5").style.opacity = '0.6';

    }
    if ((score >= multiBank) && (nmbrBank >= amelioBank)){

        document.getElementById("Multiplicateur5").style.display = "flex";
        document.getElementById("Multiplicateur5").style.opacity = '1.0';
        document.getElementById("Multiplicateur5").innerHTML = " | "+multiBank +" = Bonus Banque x"+ (doubleBank + 1)+" | ";

    }
    if ((score >= prixTime) && ((timeOk == 0)||(timeOk == 1))){

        document.getElementById("BonusTimer").style.display = "flex";
        document.getElementById("BonusTimer").style.opacity = '1.0';
        document.getElementById("BonusTimer").innerHTML = " | "+prixTime+" = Bonus x2 30sec | "
    }
    if (score < prixTime){
        
        document.getElementById("BonusTimer").style.opacity = '0.6';

    }
    if ( minute == 30 ){

        document.getElementById("BonusTimer").style.display = "flex";
        timeOk = 1;
        timer = 0;
        minute = 0;
        clearInterval(temps); 

    }
    return score , second ;
}

function bonus1(){

    if(score >= click){
        //ajoute nombre d'amelioration;
        nmbrClick++;
        //calcul
        score = Number(score) - click ;
        click = Math.round(click * 1.1);
        pointClick = pointClick + 1;
        //Affichage
        document.getElementById("bonus1").innerHTML =click +" = Clique +"+ ( pointClick * doubleClick ) +" | Nombre actuelle : "+ ( nmbrClick + 1 );
        document.getElementById("affichage").innerHTML = score +" Cookies";
        //return des valeurs
        return pointClick , score , click , nmbrClick;

    }
}

function bonus2(){

    if(score >= mamy){

        nmbrMamy++;
        score = score - mamy ;
        mamy = Math.round(mamy * 1.1);
        pointMamy = pointMamy + 1;
        document.getElementById("bonus2").innerHTML = mamy +" = Grand-mére ("+((pointMamy*10) * doubleMamy)+"/s) " +"| Nombre actuelle : "+ nmbrMamy;
        document.getElementById("affichage").innerHTML = score +" Cookies";
        return pointMamy , score , mamy , nmbrMamy;

    }
}
    
function bonus3(){

    if(score >= farm){

        nmbrFarm++;
        score = score - farm ;
        farm = Math.round(farm * 1.4);
        pointFarm = pointFarm + 5;
        document.getElementById("bonus3").innerHTML = farm+" = Ferme a cookie ("+((pointFarm*10) * doubleFarm)+"/s) " +"| Nombre actuelle : "+ nmbrFarm;
        document.getElementById("affichage").innerHTML = score +" Cookies";
        return pointFarm , score , farm , nmbrFarm;

    }
}

function bonus4(){

    if(score >= factory){

        nmbrFactory++;
        score = score - factory ;
        factory = Math.round(factory * 1.7);
        pointFactory = pointFactory + 25;
        document.getElementById("bonus4").innerHTML = factory+" = Usine a cookie ("+((pointFactory*10) * doubleFactory)+"/s) " +"| Nombre actuelle : "+ nmbrFactory;
        document.getElementById("affichage").innerHTML = score +" Cookies";
        return pointFactory , score , factory , nmbrFactory;

    }
}

function bonus5(){

    if(score >= bank){

        nmbrBank++;
        score = score - bank ;
        bank = Math.round(bank * 2);
        pointBank = pointBank + 125;
        document.getElementById("bonus5").innerHTML = bank +" = Banque a cookie ("+((pointBank*10) * doubleBank)+"/s) " +"| Nombre actuelle : "+ nmbrBank;
        document.getElementById("affichage").innerHTML = score +" Cookies";
        return pointBank , score , bank , nmbrBank;

    }
}

function Multiplicateur1(){

    if ( score >= multiClick ){

        multiClick = Number(multiClick) * 10;
        amelioClick = Number(amelioClick) * 2;
        doubleClick = Number(doubleClick) + 1;
        document.getElementById("Multiplicateur1").style.display = "none";
        document.getElementById("bonus1").innerHTML =click +" = Clique +"+ ( pointClick * doubleClick ) +" | Nombre actuelle : "+ ( nmbrClick + 1 );
        return multiClick , amelioClick , doubleClick;

    }
}

function Multiplicateur2(){
    
    if ( score >= multiMamy ){

        multiMamy = Number(multiMamy) * 10;
        amelioMamy = Number(amelioMamy) * 2;
        doubleMamy = Number(doubleMamy) + 1;
        document.getElementById("Multiplicateur2").style.display = "none";
        return multiMamy , amelioMamy , doubleMamy;

    }
}

function Multiplicateur3(){
    
    if ( score >= multiFarm ){

        multiFarm = Number(multiFarm) * 10;
        amelioFarm = Number(amelioFarm) * 2;
        doubleFarm = Number(doubleFarm) + 1;
        document.getElementById("Multiplicateur3").style.display = "none";
        return multiFarm , amelioFarm , doubleFarm;

    }
}

function Multiplicateur4(){

    if ( score >= multiFactory ){

        multiFactory = Number(multiFactory) * 10;
        amelioFactory = Number(amelioFactory) * 2;
        doubleFactory = Number(doubleFactory) + 1;
        document.getElementById("Multiplicateur4").style.display = "none";
        return multiFactory , amelioFactory , doubleFactory;

    }
}

function Multiplicateur5(){
    
    if ( score >= multiBank ){

        multiBank = Number(multiBank) * 10;
        amelioBank = Number(amelioBank) * 2;
        doubleBank = Number(doubleBank) + 1;
        document.getElementById("Multiplicateur5").style.display = "none";
        return multiBank , amelioBank , doubleBank;

    }
}



//Canvas

let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
      //Shape0;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(152,0);
      ctx.bezierCurveTo(234,0,301,67,301,150);
      ctx.bezierCurveTo(301,232,234,299,152,299);
      ctx.bezierCurveTo(69,299,2,232,2,150);
      ctx.bezierCurveTo(2,67,69,0,152,0);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(167,101,8,1)";
      ctx.fill();
      //Shape1;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(89,50);
      ctx.bezierCurveTo(100,50,109,59,109,70);
      ctx.bezierCurveTo(109,80,100,89,89,89);
      ctx.bezierCurveTo(77,89,68,80,68,70);
      ctx.bezierCurveTo(68,59,77,50,89,50);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();
      //Shape2;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(226,73);
      ctx.bezierCurveTo(245,73,260,89,260,108);
      ctx.bezierCurveTo(260,127,245,143,226,143);
      ctx.bezierCurveTo(207,143,192,127,192,108);
      ctx.bezierCurveTo(192,89,207,73,226,73);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();
      //Shape3;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(147,125);
      ctx.bezierCurveTo(166,125,182,141,182,162);
      ctx.bezierCurveTo(182,182,166,198,147,198);
      ctx.bezierCurveTo(127,198,111,182,111,162);
      ctx.bezierCurveTo(111,141,127,125,147,125);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();
      //Shape4;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(138,228);
      ctx.bezierCurveTo(147,228,154,235,154,244);
      ctx.bezierCurveTo(154,252,147,259,138,259);
      ctx.bezierCurveTo(129,259,122,252,122,244);
      ctx.bezierCurveTo(122,235,129,228,138,228);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();
      //Shape5;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(231,196);
      ctx.bezierCurveTo(239,196,245,202,245,211);
      ctx.bezierCurveTo(245,219,239,225,231,225);
      ctx.bezierCurveTo(223,225,217,219,217,211);
      ctx.bezierCurveTo(217,202,223,196,231,196);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();
      //Shape6;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(53,136);
      ctx.bezierCurveTo(60,136,65,141,65,148);
      ctx.bezierCurveTo(65,155,60,160,53,160);
      ctx.bezierCurveTo(46,160,41,155,41,148);
      ctx.bezierCurveTo(41,141,46,136,53,136);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();
      //Shape7;
      ctx.shadowColor ="rgba(0,0,0,0)";
      ctx.strokeStyle ="rgba(0,0,0,1)";
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      ctx.moveTo(162,46);
      ctx.bezierCurveTo(169,46,175,52,175,59);
      ctx.bezierCurveTo(175,65,169,71,162,71);
      ctx.bezierCurveTo(154,71,148,65,148,59);
      ctx.bezierCurveTo(148,52,154,46,162,46);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.fillStyle = "rgba(130,85,7,1)";
      ctx.fill();