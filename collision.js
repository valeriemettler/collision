//1. create a box, have it bounce around the viewport/screen, when it hits an edge it bounce and goes in the other direction
//2. create two boxes that are bouncing around and if they collide, they go in opposite directions too
// how to give the 2nd box a different starting position??
// if box1 left === box2 left, reverse direction, if box1 top === box2 top, reverse direction,
//3. do number 2 for n boxes
// use classes!!
//if absolute value( box1 top - box2 top )
//

// instead of a separate up and down, you just need to change top_chg from 1 to -1 :-) same for r/l
//that way, you can do all for reflections in one place and don't even have to clearinterval
var gap = 0;

var box = function(top, left, boxid) {
    var that = this;
    that.rendered = false;
    that.boxid = boxid;
    that.height = 30;
    that.width = 30;
    //set initial position here
    that.top = top;
    that.left = left;
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
    $('body').on('click', '#btn2', function() {
        that.stop();
    });
};

box.prototype.render = function() {
    var that = this;
    var x = '<div id="' + that.boxid + '" class="square"></div>';
    if(!that.rendered){
    $('#container').html( $('#container').html() + x);
    that.rendered = true;
    }
    console.log(that.boxid);
    $('#' + that.boxid).css({
        "top": that.top,
        "left": that.left,
    })
};

box.prototype.move = function() {
    var that = this;
    that.top = that.top + that.top_chg;
    that.left = that.left + that.left_chg;
    // console.log("that.top", that.top, "that.max_bottom", that.max_bottom, "that.max_top",that.max_top  );
    // console.log("that.top", that.top);
    // console.log("that.left", that.left);
    if (that.top === that.max_bottom) { //up
        // console.log("up", that.top + "===" + that.max_bottom);
        that.top_chg = that.top_chg * -1;  //1 * -1 = -1
        // that.top_chg = that.top_chg + -1; // -2 + -1 = -3
        // console.log("up that.top_chg", that.top_chg);
        // that.top = that.top + that.top_chg;
        // that.render();
    } else if (that.top === that.max_top) { //down
        // console.log("down", that.top + "<=" + that.max_top);
        that.top_chg = that.top_chg * -1; //-1 * -1 = 1
        // that.top_chg = that.top_chg + -1; //-1 + -1 = -2
        // console.log("down that.top_chg", that.top_chg);
        // that.top = that.top + that.top_chg;
    } else if (that.left === that.max_right) { //left
        // console.log("left", that.left + "===" + that.max_right);
        that.left_chg = that.left_chg * -1;  //1 * -1 = -1
        // console.log("left that.left_chg", that.left_chg);
        // that.left = that.left + that.left_chg;
    } else if (that.left === that.max_left) { //right
        // console.log("right", that.left + "===" + that.max_left);
        that.left_chg = that.left_chg * -1; //-1 * -1 = 1
        // console.log("right that.left_chg", that.left_chg);
        // that.left = that.left + that.left_chg;
    }

    that.render();
};


box.prototype.start = function() {
    console.log(gap);
    var that = this;
    that.render();
     console.log("that.top_chg start", that.top_chg);
     console.log("that.left_chg start", that.left_chg);
    that.timer = setInterval(function() {
        that.move();
    }, 10 );
};

box.prototype.stop = function() {
    var that = this;
    that.render();
    clearInterval(that.timer);
};

var box1 = new box(0, 0, 'box1');
var box2 = new box(0, 1058, 'box2');