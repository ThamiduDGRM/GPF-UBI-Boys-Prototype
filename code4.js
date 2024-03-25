gdjs.Level_321_32Complete_33Code = {};
gdjs.Level_321_32Complete_33Code.GDBackgroundObjects1= [];
gdjs.Level_321_32Complete_33Code.GDBackgroundObjects2= [];
gdjs.Level_321_32Complete_33Code.GDLevelComplete_9595textObjects1= [];
gdjs.Level_321_32Complete_33Code.GDLevelComplete_9595textObjects2= [];
gdjs.Level_321_32Complete_33Code.GDQuit_9595buttonObjects1= [];
gdjs.Level_321_32Complete_33Code.GDQuit_9595buttonObjects2= [];
gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1= [];
gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects2= [];


gdjs.Level_321_32Complete_33Code.mapOfGDgdjs_9546Level_9595321_959532Complete_959533Code_9546GDQuit_95959595buttonObjects1Objects = Hashtable.newFrom({"Quit_button": gdjs.Level_321_32Complete_33Code.GDQuit_9595buttonObjects1});
gdjs.Level_321_32Complete_33Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quit_button"), gdjs.Level_321_32Complete_33Code.GDQuit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321_32Complete_33Code.mapOfGDgdjs_9546Level_9595321_959532Complete_959533Code_9546GDQuit_95959595buttonObjects1Objects, runtimeScene, true, false);
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


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu_Button"), gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1[k] = gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};

gdjs.Level_321_32Complete_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_32Complete_33Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321_32Complete_33Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321_32Complete_33Code.GDLevelComplete_9595textObjects1.length = 0;
gdjs.Level_321_32Complete_33Code.GDLevelComplete_9595textObjects2.length = 0;
gdjs.Level_321_32Complete_33Code.GDQuit_9595buttonObjects1.length = 0;
gdjs.Level_321_32Complete_33Code.GDQuit_9595buttonObjects2.length = 0;
gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects1.length = 0;
gdjs.Level_321_32Complete_33Code.GDMain_9595Menu_9595ButtonObjects2.length = 0;

gdjs.Level_321_32Complete_33Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_321_32Complete_33Code'] = gdjs.Level_321_32Complete_33Code;
