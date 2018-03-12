//
//  OJC.m
//  hello_world-mobile
//
//  Created by ijunjay on 3/9/18.
//

#import "AudioRecorder.h"
#import "ScriptingCore.h"
@implementation AudioRecorder
+(void)startRecord{
    
    NSLog(@"Native OC code is Called");
    ScriptingCore::getInstance ()->evalString("cc.log('This is call from OC native');");
    ScriptingCore::getInstance ()->evalString("cc.JsCallBackFromOC.notice('audiostoped','parameter');");
}

+(void)manualStop
{
    NSLog(@"mamually stoped");
}
@end
