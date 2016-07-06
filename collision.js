//1. create a box, have it bounce around the viewport/screen, when it hits an edge it bounce and goes in the other direction
//2. create two boxes that are bouncing around and if they collide, they go in opposite directions too
// how to give the 2nd box a different starting position??
// if box1 left === box2 left, reverse direction, if box1 top === box2 top, reverse direction,
//3. do number 2 for n boxes
// use classes!!



var box = function() {
    var that = this;
    that.height = 30;
    that.width = 30;
    //set initial position here
    that.top = 100;
    that.left = 100;
    that.top_chg = 1;
    that.left_chg = 1;
    that.max_left = 0;
    that.max_top = 0;
    that.max_right = $(window).width() - that.width;
    that.max_bottom = $(window).height() - that.height;
    that.event_setup();

};

box.prototype.event_setup = function() {
    var that = this;
    $('body').on('click', '#btn', function() {
            that.start();
    });
};

box.prototype.render = function() {
    var that = this;
    var x = '<div class="square"></div>';
    $('#container').html(x);
    $('.square').css({
        "top": that.top,
        "left": that.left,
    })
};

// box.prototype.move_down_right = function() {
//     var that = this;
//     //update position
//         that.top += that.top_chg;
//         that.left += that.left_chg;

//     //check if the values of x and y are beyond the viewport dimensions, and if so, reverse the direction by setting values of top_chg and left_chg to the negative values.
//     if (that.top > that.max_bottom || that.left > that.max_right ){
//         clearInterval(that.timer);
//         that.timer = setInterval(function() {
//         that.move_up_right();
//     }, 7);
//     }

//     that.render();
// };


box.prototype.move_down = function() {
    var that = this;
    //update position
        that.top += that.top_chg;

    //check if the values of x and y are beyond the viewport dimensions, and if so, reverse the direction by setting values of top_chg and left_chg to the negative values.
    if (that.top > that.max_bottom){
        clearInterval(that.timer_down);
        that.timer_up = setInterval(function() {
        that.move_up();
    }, 7);
    }

    that.render();
};

box.prototype.move_right = function() {
    var that = this;
    //update position
        that.left += that.left_chg;

    //check if the values of x and y are beyond the viewport dimensions, and if so, reverse the direction by setting values of top_chg and left_chg to the negative values.
    if (that.left > that.max_right ){
        clearInterval(that.timer_right);
        that.timer_left = setInterval(function() {
        that.move_left();
    }, 7);
    }

    that.render();
};

box.prototype.move_up = function() {
    var that = this;
    //update position
    //s check if the values of x and y are beyond the viewport dimensions, and if so, reverse the direction by setting values of top_chg and left_chg to the negative values.
        that.top -= that.top_chg;

    if (that.top < that.max_top){
        //console.log("that.top", that.top, "that.left", that.left, "that.max_right", that.max_right) //that.top 99 that.left 621 that.max_right 1266
        clearInterval(that.timer_up);
        that.timer_down = setInterval(function() {
        that.move_down();
    }, 7);
    }

    that.render();
};

box.prototype.move_left = function() {
    var that = this;
    //update position
    //s check if the values of x and y are beyond the viewport dimensions, and if so, reverse the direction by setting values of top_chg and left_chg to the negative values.
        that.left -= that.left_chg;

    if (that.left < that.max_left ){
        clearInterval(that.timer_left);
        that.timer_right = setInterval(function() {
        that.move_right();
    }, 7);
    }

    that.render();
};

box.prototype.start = function() {
    var that = this;
    that.render();
    that.timer_down = setInterval(function() {
        that.move_down();
    }, 7);
    that.timer_right = setInterval(function() {
        that.move_right();
    }, 7);
};

var box1 = new box();
var box2 = new box();
