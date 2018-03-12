cc.Class({
    extends: cc.Component,

    properties: {
        recordLabel: cc.Label,
        isRecording: false
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // },
    onLoad: function () {
        console.log("ljj Debug "+ this.toString());
        console.log(cc.sys.isNative);
        console.log(cc.sys.os);
        console.log(cc.sys.OS_IOS);
        console.log(Object.getOwnPropertyNames(this));
        console.log(Object.getOwnPropertyNames(this)._name);
        console.log(Object.getOwnPropertyNames(this).id);
        //console.log(Object.getOwnPropertyNames(this).getDescription());
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
      
            console.log('onLoad is called');
        }
    },

    play: function () {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {

        }
    },
		
    record: function () {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
        	if(!this.isRecording){
        	    this.isRecording=true;
        	    cc.JsCallBackFromOC.addobs(this);
                jsb.reflection.callStaticMethod('AudioRecorder', 'startRecord');
                console.log('Start recording');
        	}
        	else
        	{
        	    //this.isRecording=false;
          	    jsb.reflection.callStaticMethod('AudioRecorder', 'manualStop');
          	    console.log('Stoping recording');
            }
        }
    },
    oncallback:function(cmd,content){
    	if(!this.isRecording) //by manually stoped
    	{
    	    console.log("Do Nothing")
    	}else
    	{
    	    this.isRecording=false;
    	    console.log("Data is process done cmd="+cmd+ " content="+content );
    	}
    	console.log("Called in js:RecordDoneCallBack(%s,%s)", cmd, content);
    },
    onDestroy: function()
    {
        cc.JsCallBackFromOC.removeobs(this);
        console.log("Removed self from the observers list")
        console.log("OC JS CALL Destroyed");
    }
});



function Publisher (){
    this.observers=[];
}
Publisher.prototype.addobs=function(observer){
    
    var flag = false;
    for (var i = this.observers.length - 1; i >= 0; i--) {
        if(this.observers[i]===observer){
            flag=true;                
        }
    }
    if(!flag){
        this.observers.push(observer);
    }
    return this;
};

Publisher.prototype.removeobs=function(observer){
    var observers = this.observers;
    for (var i = 0; i < observers.length; i++) {
        if(observers[i]===observer){
            observers.splice(i,1);
        }
    }
    return this;
}

Publisher.prototype.notice=function(cmd,content){
    console.log("Notice is gotten");
    console.log("Now the observers' count is "+this.observers.length);
    var observers = this.observers;
    for (var i = 0; i < observers.length; i++) {
        observers[i].oncallback(cmd,content);
    }
}

cc.JsCallBackFromOC=new Publisher();