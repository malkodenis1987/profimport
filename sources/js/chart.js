/**
 * Created by dmalko on 24.08.2015.
 */
$(function() {
    $("#org").jOrgChart({
        chartElement : '#chart'
    });
    $(".node a").click(function(){
        var id = $(this).data('target');
        $(id).modal();
    });
});
