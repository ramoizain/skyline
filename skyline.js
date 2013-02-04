var skyline = (function(){
    'use strict';

    var _ctx;
    var canvas = document.getElementById('skyline');
    var _cHt = canvas.height;

    function _rand(min,max) {
        return Math.round((Math.random()*(max-min))+min);
    }

    function _h(y) {
        return _cHt - y;
    }

    function draw() {
        var i = 0;
        var j = 0;
        var rand = _rand(1,10);
        var curWd = 0;
        var width, bWidth, bHeight, bGap, bBase;
        
        _ctx = canvas.getContext('2d');

        width = canvas.width;

        _ctx.clearRect(0,0,width,_cHt);
        _ctx.beginPath();
        _ctx.moveTo(0,_h(0));
        for (; curWd<=width; curWd+=(bWidth+bGap)){
            bWidth = _rand(40,100);
            bGap = _rand(1,10);
            bHeight = _rand(90,_cHt);
            bBase = _rand(10,80);
            i+=1;
            j+=2;

            if (i===rand) {
            // Extra pointiness
                _ctx.lineTo(curWd,_h(bBase));
                _ctx.lineTo(bGap+curWd,_h(bBase));
                _ctx.lineTo(bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth/2+bGap+curWd,_h(_cHt));
                _ctx.lineTo(bWidth+bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth+bGap+curWd,_h(bBase));

            } else if (j ===rand) {
            // Extra pointiness
                _ctx.lineTo(curWd,_h(bBase));
                _ctx.lineTo(bGap+curWd,_h(bBase));
                _ctx.lineTo(bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth/2-1+bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth/2-1+bGap+curWd,_h(bHeight+40));
                _ctx.lineTo(bWidth/2+1+bGap+curWd,_h(bHeight+40));
                _ctx.lineTo(bWidth/2+1+bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth+bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth+bGap+curWd,_h(bBase));

            } else {
                _ctx.lineTo(curWd,_h(bBase));
                _ctx.lineTo(bGap+curWd,_h(bBase));
                _ctx.lineTo(bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth+bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth+bGap+curWd,_h(bBase));
            }

        }
        _ctx.lineTo(curWd,_h(0));
        _ctx.fill();
    }

    function setWidth(width) {

        canvas.width = width;
        canvas.height = _cHt;
        canvas.style.width = width+'px';

        draw();
    }


    return {
        draw : draw,
        canvas : canvas,
        setWidth : setWidth
    };
})();