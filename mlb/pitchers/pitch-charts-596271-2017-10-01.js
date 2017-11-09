var allpitches = [311,64,77,2.805880876434478,4.9048170566450695,82.0,311,100,80,1.3134372688147633,3.419877876725808,83.2,300,100,100,-0.3643300857229349,3.6936625882318554,82.7,311,42,73,3.0903244767344047,4.902674258095609,82.0,111,29,79,-9.312558017250291,5.724834729537161,92.2,100,0,61,-12.777647274766295,2.9483870716761884,90.9,111,48,65,-10.778708346957083,8.2766143981172,91.6,100,93,52,-8.944367747294068,3.1060796351319557,91.3,111,29,62,-13.356838820879124,8.072822212740968,91.8,311,34,50,3.633669855131253,0.37468403262979477,81.7,411,2,64,-9.63747514084832,1.9840177446499085,84.9,310,69,79,4.527598232755821,0.9641029980619389,82.7,111,0,71,-10.87274584052395,3.4826002880954983,91.6,300,100,100,4.4802756458134,-0.9115713516446229,82.4,100,37,90,-12.646432865171349,4.5405987505270975,91.7,111,76,38,-9.005503297183889,4.9278175837510165,91.0,400,37,100,-8.239837166420605,-0.30203121981259146,84.2,311,79,86,-0.5040580429691457,-0.3745606798094763,83.4,100,22,94,-10.48296970091231,2.642570779833722,91.6,311,41,48,1.4573836624027736,5.225816053780338,83.7,310,20,60,0.4836041724197086,3.120780744561924,82.0,111,38,84,-7.439110153681192,8.404542408156754,92.3];
var allabs = [0,20,543068,8,5,2,460060,8,11,3,592230,8,18,2,492802,8,22,0,0,0];
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