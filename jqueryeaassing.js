var elementArray = [];
var length =  ($('.product-item').length);
var counter = 0; 
var elements = $('.product-item');
function handleShowOnScroll() {
    $(elements).each(function(index, el) {
        var $el = $(el);
        var bottom = $(window).scrollTop() + $(window).height();
        var elTop = $el.offset().top;
            if (elTop < (bottom - 100)){
                elementArray.push($el)
                elements.splice(0,1);
            }
    })
};



var revealItems = function(){
    if(counter < length){
        if(elementArray[0]){
            elementArray[0].animate({'opacity':'1'}, 500);
            elementArray.shift();
            counter++;
        }
    }
    else if(counter === length){
        clearInterval(revealInterval);
     }
};


var revealInterval = setInterval(function(){
    revealItems()
}, 300);


$(window).on('scroll', handleShowOnScroll);
handleShowOnScroll();
revealInterval();






var revealItems = function(){
    if(elementArray[0]){
        elementArray[0].css('opacity', 1);
        elementArray.shift();
    }
};









