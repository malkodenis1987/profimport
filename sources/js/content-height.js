/**
 * Created by dmalko on 22.08.2015.
 */
jQuery(window).load(function(){
    console.log('content page height initialization');

    var addComment = jQuery('.comments-list');
    var scrollContent = jQuery('.scroll-wrapper');
    var windowHeight = jQuery(window).height();
    var staticElements = ['header', 'footer', '.pager'];
    var indent = 0;

    jQuery.each(staticElements, function(index, value){
        indent = indent + jQuery(value).height();
    });

    scrollContent.height(windowHeight - indent).jScrollPane({
        contentWidth: '0px'
    });
    addComment.jScrollPane();
});
