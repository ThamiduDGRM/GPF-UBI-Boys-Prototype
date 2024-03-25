gdjs.Pause_32MenuCode = {};
gdjs.Pause_32MenuCode.GDbackgroundObjects1= [];
gdjs.Pause_32MenuCode.GDbackgroundObjects2= [];
gdjs.Pause_32MenuCode.GDPause_9595textObjects1= [];
gdjs.Pause_32MenuCode.GDPause_9595textObjects2= [];
gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1= [];
gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects2= [];
gdjs.Pause_32MenuCode.GDquit_9595buttonObjects1= [];
gdjs.Pause_32MenuCode.GDquit_9595buttonObjects2= [];
gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1= [];
gdjs.Pause_32MenuCode.GDMain_9595MenuObjects2= [];


gdjs.Pause_32MenuCode.mapOfGDgdjs_9546Pause_959532MenuCode_9546GDquit_95959595buttonObjects1Objects = Hashtable.newFrom({"quit_button": gdjs.Pause_32MenuCode.GDquit_9595buttonObjects1});
gdjs.Pause_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Go_back_button"), gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1[k] = gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1[k] = gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.Pause_32MenuCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_9546Pause_959532MenuCode_9546GDquit_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Pause_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32MenuCode.GDbackgroundObjects1.length = 0;
gdjs.Pause_32MenuCode.GDbackgroundObjects2.length = 0;
gdjs.Pause_32MenuCode.GDPause_9595textObjects1.length = 0;
gdjs.Pause_32MenuCode.GDPause_9595textObjects2.length = 0;
gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDGo_9595back_9595buttonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDquit_9595buttonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDquit_9595buttonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDMain_9595MenuObjects1.length = 0;
gdjs.Pause_32MenuCode.GDMain_9595MenuObjects2.length = 0;

gdjs.Pause_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Pause_32MenuCode'] = gdjs.Pause_32MenuCode;
