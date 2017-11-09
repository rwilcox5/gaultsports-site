var allpitches = [111,47,54,-8.535324860461811,4.123538935026312,90.7,310,15,52,2.270867763298356,-0.9430799686529725,81.2,100,1,84,-6.319451164828788,-1.1147342450842597,89.7,110,9,40,-6.056318889658524,2.9686490000852164,90.2,100,16,100,-7.880398433301864,-0.4258943549896548,81.1,300,100,100,0.7229900351672796,1.1140269279000707,82.9,111,10,51,-6.159960029572751,1.980655229462772,90.6,300,100,74,4.219521260077488,-0.5723009117276544,83.5,311,84,91,2.1862342763785563,-1.431782635546344,83.8,111,77,43,-1.0607898568542504,5.550605942025192,89.8,300,87,77,1.6981556737108678,0.219945479909598,83.2,311,90,63,5.910397414980708,-2.360637521420772,82.9,311,66,60,3.45174795989274,1.6096533240206639,82.6,111,93,79,-0.8692936580345391,5.463031654846704,87.9,311,20,72,3.74669838428646,-0.3751177949557584,81.9,111,10,63,-5.333184785586144,3.7893066554499244,89.8,111,2,86,-8.421430176624277,1.6018865759343122,90.5,100,13,100,-7.010081778288228,2.910997147424052,89.1,300,100,100,2.623839164318484,-0.3656245807529028,82.7,100,100,37,0.2579646569684592,4.5559812292460045,89.1,111,71,71,-0.6961919520768108,4.074875251528824,88.3,311,74,100,1.828116049610184,-0.025510286112489004,83.7];
var allabs = [0,20,456030,8,1,3,643217,8,7,2,605141,8,16,3,434670,8,22,0,0,0];
var num_abs = 4;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*4;returnabs[2*iii+1]=i*4+4;for (iiii=allabs[i*4+3];iiii<30;iiii++){        nabsc[iiii]+=1;}
iii++;}}}
return iii;}
function sendAb(i){
return allabs[returnabs[2*i+1]]-allabs[returnabs[2*i]];
}
function sendAge(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}