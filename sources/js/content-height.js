/**
 * Created by dmalko on 22.08.2015.
 */
$(function() {
    console.log('content page height initialization');

    var addComment = $('.comments-list');
    var scrollContent = $('.scroll-wrapper');
    var windowHeight = $(window).height();
    var staticElements = ['header', 'footer', '.pager'];
    var indent = 0;

    $.each(staticElements, function(index, value){
        indent = indent + $(value).height();
        console.log('value: ' + $(value).height());
    });
    console.log('windowHeight: ' + windowHeight);
    console.log('indent: ' + indent);

    if ($('.visible-xs').is(':hidden')) {
        scrollContent.height(windowHeight - indent).jScrollPane({
            contentWidth: '0px'
        });
    }
    addComment.jScrollPane();
});
