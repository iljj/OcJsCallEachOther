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
                cc.JsCallBackFromOC.addobs(this);
                jsb.reflection.callStaticMethod('AudioRecorder', 'startRecord');
                console.log('Start recording');
            } else {
                this.isRecording = false;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyIsImFzc2V0cy9TY3JpcHQvT2NKc0NhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFGRztBQUlQO0FBQ0E7QUFOUTs7QUFTWjtBQUNBO0FBQ0k7QUFDSDs7QUFFRDtBQUNBO0FBbEJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpROztBQWVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJO0FBQ0g7QUFDSjs7QUFFRDtBQUNJO0FBR0g7O0FBRUQ7QUFDSTtBQUNDO0FBQ0k7QUFDRztBQUNBO0FBQ047QUFHRztBQUNFO0FBQ0E7QUFDRjtBQUNKO0FBQ0o7QUFDRDtBQUNDO0FBQ0E7QUFDSTtBQUNIO0FBRUc7QUFDQTtBQUNIO0FBQ0Q7QUFDQTtBQUNEO0FBRUk7QUFDQTtBQUNBO0FBQ0g7QUF6RUk7O0FBOEVUO0FBQ0k7QUFDSDtBQUNEOztBQUVJO0FBQ0E7QUFDSTtBQUNJO0FBQ0g7QUFDSjtBQUNEO0FBQ0k7QUFDSDtBQUNEO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0k7QUFDSTtBQUNIO0FBQ0o7QUFDRDtBQUNIOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNIO0FBQ0o7O0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGRlZmF1bHRzLCBzZXQgdmlzdWFsbHkgd2hlbiBhdHRhY2hpbmcgdGhpcyBzY3JpcHQgdG8gdGhlIENhbnZhc1xuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgfSxcbn0pO1xuIiwiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmVjb3JkTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBpc1JlY29yZGluZzogZmFsc2VcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgIC8vIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGpqIERlYnVnIFwiKyB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhjYy5zeXMuaXNOYXRpdmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhjYy5zeXMub3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhjYy5zeXMuT1NfSU9TKTtcbiAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpO1xuICAgICAgICBjb25zb2xlLmxvZyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5fbmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmlkKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25Mb2FkIGlzIGNhbGxlZCcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuXG4gICAgICAgIH1cbiAgICB9LFxuXHRcdFxuICAgIHJlY29yZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICBcdGlmKCF0aGlzLmlzUmVjb3JkaW5nKXtcbiAgICAgICAgXHQgICAgY2MuSnNDYWxsQmFja0Zyb21PQy5hZGRvYnModGhpcyk7XG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnQXVkaW9SZWNvcmRlcicsICdzdGFydFJlY29yZCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGFydCByZWNvcmRpbmcnKTtcbiAgICAgICAgXHR9XG4gICAgICAgIFx0ZWxzZVxuICAgICAgICBcdHtcbiAgICAgICAgXHQgICAgdGhpcy5pc1JlY29yZGluZz1mYWxzZTtcbiAgICAgICAgICBcdCAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdBdWRpb1JlY29yZGVyJywgJ21hbnVhbFN0b3AnKTtcbiAgICAgICAgICBcdCAgICBjb25zb2xlLmxvZygnU3RvcGluZyByZWNvcmRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25jYWxsYmFjazpmdW5jdGlvbihjbWQsY29udGVudCl7XG4gICAgXHRpZighdGhpcy5pc1JlY29yZGluZykgLy9ieSBtYW51YWxseSBzdG9wZWRcbiAgICBcdHtcbiAgICBcdCAgICBjb25zb2xlLmxvZyhcIkRvIE5vdGhpbmdcIilcbiAgICBcdH1lbHNlXG4gICAgXHR7XG4gICAgXHQgICAgdGhpcy5pc1JlY29yZGluZz1mYWxzZTtcbiAgICBcdCAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXMgcHJvY2VzcyBkb25lIGNtZD1cIitjbWQrIFwiIGNvbnRlbnQ9XCIrY29udGVudCApO1xuICAgIFx0fVxuICAgIFx0Y29uc29sZS5sb2coXCJDYWxsZWQgaW4ganM6UmVjb3JkRG9uZUNhbGxCYWNrKCVzLCVzKVwiLCBjbWQsIGNvbnRlbnQpO1xuICAgIH0sXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjYy5Kc0NhbGxCYWNrRnJvbU9DLnJlbW92ZW9icyh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkIHNlbGYgZnJvbSB0aGUgb2JzZXJ2ZXJzIGxpc3RcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJPQyBKUyBDQUxMIERlc3Ryb3llZFwiKTtcbiAgICB9XG59KTtcblxuXG5cbmZ1bmN0aW9uIFB1Ymxpc2hlciAoKXtcbiAgICB0aGlzLm9ic2VydmVycz1bXTtcbn1cblB1Ymxpc2hlci5wcm90b3R5cGUuYWRkb2JzPWZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICBcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSB0aGlzLm9ic2VydmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZih0aGlzLm9ic2VydmVyc1tpXT09PW9ic2VydmVyKXtcbiAgICAgICAgICAgIGZsYWc9dHJ1ZTsgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoIWZsYWcpe1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5QdWJsaXNoZXIucHJvdG90eXBlLnJlbW92ZW9icz1mdW5jdGlvbihvYnNlcnZlcil7XG4gICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG9ic2VydmVyc1tpXT09PW9ic2VydmVyKXtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuUHVibGlzaGVyLnByb3RvdHlwZS5ub3RpY2U9ZnVuY3Rpb24oY21kLGNvbnRlbnQpe1xuICAgIGNvbnNvbGUubG9nKFwiTm90aWNlIGlzIGdvdHRlblwiKTtcbiAgICBjb25zb2xlLmxvZyhcIk5vdyB0aGUgb2JzZXJ2ZXJzJyBjb3VudCBpcyBcIit0aGlzLm9ic2VydmVycy5sZW5ndGgpO1xuICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvYnNlcnZlcnNbaV0ub25jYWxsYmFjayhjbWQsY29udGVudCk7XG4gICAgfVxufVxuXG5jYy5Kc0NhbGxCYWNrRnJvbU9DPW5ldyBQdWJsaXNoZXIoKTsiXSwic291cmNlUm9vdCI6IiJ9