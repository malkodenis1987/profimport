/**
 * Created by dmalko on 22.08.2015.
 */
$(function() {
    var addComment = $('.comments-list');
    var scrollContent = $('.scroll-wrapper');
    var windowHeight = $(window).height();
    var staticElements = ['header', 'footer', '.pager'];
    var indent = 0;

    $.each(staticElements, function(index, value){
        indent = indent + $(value).height();
    });

    /*if ($('.visible-xs').is(':hidden')) {
        scrollContent.height(windowHeight - indent).jScrollPane({
            contentWidth: '0px'
        });
    }*/
    addComment.jScrollPane();

    ideaHead();

    $(window).on('resize', function(){
        ideaHead();
    });
});

function ideaHead() {
    var ideaHead = $('.idea-head');
    var ideaHeight = $('.idea-details').height();
    if (ideaHead.length && (ideaHead.height() < ideaHeight)) {
        ideaHead.css('min-height', ideaHeight);
    }
}