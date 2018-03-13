//
//  OJC.m
//  hello_world-mobile
//
//  Created by ijunjay on 3/9/18.
//

#import "AudioRecorder.h"
#import "ScriptingCore.h"

static NSCondition  *syncCondition;
@implementation AudioRecorder
+(void)startRecord{
    
    NSLog(@"Native OC code is Called");
    NSThread *current=[NSThread currentThread];
    NSLog(@"startRecord thread info: %@",current);
    if (syncCondition ==NULL ) {
        syncCondition=[[NSCondition alloc] init];
    }
    //start real recorder
    //[AudioRecorder startRecorder], the
    
    //sync to the audio data processing thread, wait 10.0s or manually stoped
    NSThread *thread = [[NSThread alloc] initWithTarget:self selector:@selector(waitingDataProcessingThread) object:nil];
    // 启动
    [thread start];

    ScriptingCore::getInstance ()->evalString("cc.log('This is call from OC native');");
    
}
+(void)waitingDataProcessingThread
{
    if (syncCondition!=NULL) {
        [syncCondition lock];
        [syncCondition waitUntilDate:[NSDate dateWithTimeIntervalSinceNow:10.0]];
        [syncCondition unlock];
        NSLog(@"unlocked");
    }
    
    NSThread *current=[NSThread currentThread];
    NSLog(@"waitingDataProcessingThread info: %@",current);
    //real stop the audio record
    //[AudioRecorder stopRecorder];
    
    // need to execute the flowing sententce in the main thread to avoid  the following recursive message
    /*
     <no filename="filename">:0:too much recursion
     
     <no filename="filename">:0:too much recursion
     
     <no filename="filename">:0:too much recursion
     
     <no filename="filename">:0:too much recursion*/
    dispatch_async(dispatch_get_main_queue(), ^{
        ScriptingCore::getInstance ()->evalString("cc.JsCallBackFromOC.notice('audiostoped','parameter');");
    });
}
+(void)manualStop
{
    if (syncCondition !=NULL) {
        [syncCondition lock];
        [syncCondition signal];
        [syncCondition unlock];
    }
    NSLog(@"manually Stoped\n");
}
@end
