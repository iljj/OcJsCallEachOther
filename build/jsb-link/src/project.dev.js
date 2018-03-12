require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"HelloWorld":[function(require,module,exports){
"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();
},{}],"OcJsCall":[function(require,module,exports){
"use strict";
cc._RF.push(module, '093aezEy9dJoYx3RI8Hfn7h', 'OcJsCall');
// Script/OcJsCall.js

'use strict';

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
    onLoad: function onLoad() {
        console.log("ljj Debug " + this.toString());
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

    play: function play() {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {}
    },

    record: function record() {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
            if (!this.isRecording) {
                this.isRecording = true;
                cc.JsCallBackFromOC.addobs(this);
                jsb.reflection.callStaticMethod('AudioRecorder', 'startRecord');
                console.log('Start recording');
            } else {
                //this.isRecording=false;
                jsb.reflection.callStaticMethod('AudioRecorder', 'manualStop');
                console.log('Stoping recording');
            }
        }
    },
    oncallback: function oncallback(cmd, content) {
        if (!this.isRecording) //by manually stoped
            {
                console.log("Do Nothing");
            } else {
            this.isRecording = false;
            console.log("Data is process done cmd=" + cmd + " content=" + content);
        }
        console.log("Called in js:RecordDoneCallBack(%s,%s)", cmd, content);
    },
    onDestroy: function onDestroy() {
        cc.JsCallBackFromOC.removeobs(this);
        console.log("Removed self from the observers list");
        console.log("OC JS CALL Destroyed");
    }
});

function Publisher() {
    this.observers = [];
}
Publisher.prototype.addobs = function (observer) {

    var flag = false;
    for (var i = this.observers.length - 1; i >= 0; i--) {
        if (this.observers[i] === observer) {
            flag = true;
        }
    }
    if (!flag) {
        this.observers.push(observer);
    }
    return this;
};

Publisher.prototype.removeobs = function (observer) {
    var observers = this.observers;
    for (var i = 0; i < observers.length; i++) {
        if (observers[i] === observer) {
            observers.splice(i, 1);
        }
    }
    return this;
};

Publisher.prototype.notice = function (cmd, content) {
    console.log("Notice is gotten");
    console.log("Now the observers' count is " + this.observers.length);
    var observers = this.observers;
    for (var i = 0; i < observers.length; i++) {
        observers[i].oncallback(cmd, content);
    }
};

cc.JsCallBackFromOC = new Publisher();

cc._RF.pop();
},{}]},{},["HelloWorld","OcJsCall"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyIsImFzc2V0cy9TY3JpcHQvT2NKc0NhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRztBQUlQO0FBQ0E7QUFOUTs7QUFTWjtBQUNBO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBbEJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpROztBQWVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBR0g7O0FBRUQ7QUFDSTtBQUNDO0FBQ0k7QUFDQTtBQUNHO0FBQ0E7QUFDTjtBQUdHO0FBQ0U7QUFDQTtBQUNGO0FBQ0o7QUFDSjtBQUNEO0FBQ0M7QUFDQTtBQUNJO0FBQ0g7QUFFRztBQUNBO0FBQ0g7QUFDRDtBQUNBO0FBQ0Q7QUFFSTtBQUNBO0FBQ0E7QUFDSDtBQTFFSTs7QUErRVQ7QUFDSTtBQUNIO0FBQ0Q7O0FBRUk7QUFDQTtBQUNJO0FBQ0k7QUFDSDtBQUNKO0FBQ0Q7QUFDSTtBQUNIO0FBQ0Q7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDSjtBQUNEO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0g7QUFDSjs7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZGVmYXVsdHMsIHNldCB2aXN1YWxseSB3aGVuIGF0dGFjaGluZyB0aGlzIHNjcmlwdCB0byB0aGUgQ2FudmFzXG4gICAgICAgIHRleHQ6ICdIZWxsbywgV29ybGQhJ1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICB9LFxufSk7XG4iLCJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZWNvcmRMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZVxuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgLy8gfSxcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsamogRGVidWcgXCIrIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNjLnN5cy5pc05hdGl2ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNjLnN5cy5vcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNjLnN5cy5PU19JT1MpO1xuICAgICAgICBjb25zb2xlLmxvZyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLl9uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuaWQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQgaXMgY2FsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG5cbiAgICAgICAgfVxuICAgIH0sXG5cdFx0XG4gICAgcmVjb3JkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIFx0aWYoIXRoaXMuaXNSZWNvcmRpbmcpe1xuICAgICAgICBcdCAgICB0aGlzLmlzUmVjb3JkaW5nPXRydWU7XG4gICAgICAgIFx0ICAgIGNjLkpzQ2FsbEJhY2tGcm9tT0MuYWRkb2JzKHRoaXMpO1xuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ0F1ZGlvUmVjb3JkZXInLCAnc3RhcnRSZWNvcmQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhcnQgcmVjb3JkaW5nJyk7XG4gICAgICAgIFx0fVxuICAgICAgICBcdGVsc2VcbiAgICAgICAgXHR7XG4gICAgICAgIFx0ICAgIC8vdGhpcy5pc1JlY29yZGluZz1mYWxzZTtcbiAgICAgICAgICBcdCAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdBdWRpb1JlY29yZGVyJywgJ21hbnVhbFN0b3AnKTtcbiAgICAgICAgICBcdCAgICBjb25zb2xlLmxvZygnU3RvcGluZyByZWNvcmRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25jYWxsYmFjazpmdW5jdGlvbihjbWQsY29udGVudCl7XG4gICAgXHRpZighdGhpcy5pc1JlY29yZGluZykgLy9ieSBtYW51YWxseSBzdG9wZWRcbiAgICBcdHtcbiAgICBcdCAgICBjb25zb2xlLmxvZyhcIkRvIE5vdGhpbmdcIilcbiAgICBcdH1lbHNlXG4gICAgXHR7XG4gICAgXHQgICAgdGhpcy5pc1JlY29yZGluZz1mYWxzZTtcbiAgICBcdCAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXMgcHJvY2VzcyBkb25lIGNtZD1cIitjbWQrIFwiIGNvbnRlbnQ9XCIrY29udGVudCApO1xuICAgIFx0fVxuICAgIFx0Y29uc29sZS5sb2coXCJDYWxsZWQgaW4ganM6UmVjb3JkRG9uZUNhbGxCYWNrKCVzLCVzKVwiLCBjbWQsIGNvbnRlbnQpO1xuICAgIH0sXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjYy5Kc0NhbGxCYWNrRnJvbU9DLnJlbW92ZW9icyh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkIHNlbGYgZnJvbSB0aGUgb2JzZXJ2ZXJzIGxpc3RcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJPQyBKUyBDQUxMIERlc3Ryb3llZFwiKTtcbiAgICB9XG59KTtcblxuXG5cbmZ1bmN0aW9uIFB1Ymxpc2hlciAoKXtcbiAgICB0aGlzLm9ic2VydmVycz1bXTtcbn1cblB1Ymxpc2hlci5wcm90b3R5cGUuYWRkb2JzPWZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICBcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLm9ic2VydmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZih0aGlzLm9ic2VydmVyc1tpXT09PW9ic2VydmVyKXtcbiAgICAgICAgICAgIGZsYWc9dHJ1ZTsgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoIWZsYWcpe1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5QdWJsaXNoZXIucHJvdG90eXBlLnJlbW92ZW9icz1mdW5jdGlvbihvYnNlcnZlcil7XG4gICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG9ic2VydmVyc1tpXT09PW9ic2VydmVyKXtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuUHVibGlzaGVyLnByb3RvdHlwZS5ub3RpY2U9ZnVuY3Rpb24oY21kLGNvbnRlbnQpe1xuICAgIGNvbnNvbGUubG9nKFwiTm90aWNlIGlzIGdvdHRlblwiKTtcbiAgICBjb25zb2xlLmxvZyhcIk5vdyB0aGUgb2JzZXJ2ZXJzJyBjb3VudCBpcyBcIit0aGlzLm9ic2VydmVycy5sZW5ndGgpO1xuICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvYnNlcnZlcnNbaV0ub25jYWxsYmFjayhjbWQsY29udGVudCk7XG4gICAgfVxufVxuXG5jYy5Kc0NhbGxCYWNrRnJvbU9DPW5ldyBQdWJsaXNoZXIoKTsiXSwic291cmNlUm9vdCI6IiJ9