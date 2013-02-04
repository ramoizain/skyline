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
        var k = 0;
        var curWd = 0;
        var width, bWidth, bHeight, bGap, bBase, rand;
        
        _ctx = canvas.getContext('2d');

        width = canvas.width;

        _ctx.clearRect(0,0,width,_cHt);
        _ctx.beginPath();
        _ctx.moveTo(0,_h(0));
        for (; curWd<=width; curWd+=(bWidth+bGap)){
            bWidth = _rand(40,90);
            bGap = _rand(0,10);
            bHeight = _rand(90,_cHt);
            bBase = _rand(10,80);
            rand = _rand(1,Math.round(width/90));
            i+=1;
            j+=2;
            k+=3;
            
            _ctx.lineTo(curWd,_h(bBase));
            _ctx.lineTo(bGap+curWd,_h(bBase));
            _ctx.lineTo(bGap+curWd,_h(bHeight));
            
            if (i===rand) { 
                _ctx.lineTo(bWidth/2+bGap+curWd,_h(_rand(bHeight+20,_cHt)));            } 
            else if (j===rand) {
                _ctx.lineTo(bWidth/2-1+bGap+curWd,_h(bHeight));
                _ctx.lineTo(bWidth/2-1+bGap+curWd,_h(bHeight+40));
                _ctx.lineTo(bWidth/2+1+bGap+curWd,_h(bHeight+40));
                _ctx.lineTo(bWidth/2+1+bGap+curWd,_h(bHeight));
            } else if (k===rand) {
                _ctx.lineTo(bWidth*2.9/6+bGap+curWd,_h(bHeight+40));
                _ctx.lineTo(bWidth*3/6+bGap+curWd,_h(bHeight+80));
                _ctx.lineTo(bWidth*3.1/6+bGap+curWd,_h(bHeight+40));
            }

            _ctx.lineTo(bWidth+bGap+curWd,_h(bHeight));
            _ctx.lineTo(bWidth+bGap+curWd,_h(bBase));
            

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