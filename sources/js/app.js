$(function() {
    var addComment = $('.comments-list');
    $('p.docs').on('click', function(){
        $(this).toggleClass('clicked');
    });
    $('.pd-toggler').on('click', function(){
        $(this).parents('.row').next('.row').find('.pd-details').toggleClass('active');
    });
    $('.comment, .view').on('click', function(){
        $(this).parents('.row').next('.row').find('.add-comment').toggleClass('active');
        addComment.jScrollPane();
        return false;
    });
});