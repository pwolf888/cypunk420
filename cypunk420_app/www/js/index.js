/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

window.deviceScreen = $('#wrapper');


$(document).ready(function () {
   console.log('jq-working');


    window.player = $('#player');


});

$(function () {

    deviceScreen.bind('vmousedown', swipeLeftHandler).on('vmouseup', function () {
        idle();
    });
    function swipeLeftHandler( event ){
        //console.log(event.swipestart.coords[0]);
        console.log(event);

        var touchX = event.clientX;
        console.log(touchX);
        var middleX = window.screen.width / 2;
        console.log(middleX);

        if(touchX >= 0 && touchX <= middleX) {
            walkLeft();
            console.log('mouse-entered');

        } else if(touchX > middleX) {
            walkRight();
        }

    }


    // deviceScreen.bind('tap', swipeRightHandler).on('vmouseup', function () {
    //     idle();
    // });
    // function swipeRightHandler( event ){
    //     console.log(event);
    //     walkRight();
    // }

});




function walkRight() {
    player.removeClass('idle');
    player.removeClass('walkLeft');
    player.addClass('walkRight');
    
}

function walkLeft() {
    player.removeClass('idle');
    player.removeClass('walkRight');
    player.addClass('walkLeft');
}

function idle() {
    player.removeClass('walkRight');
    player.removeClass('walkLeft');
    player.addClass('idle');
}

//var touchX = event.clientX;
//console.log(touchX);
//var middleX = window.screen.width / 2;

// if(touchX >= 0 && touchX <= middleX) {
//     walkLeft();
//     console.log('mouse-entered');
//
// } else if(touchX > middleX) {
//     walkRight();
// }