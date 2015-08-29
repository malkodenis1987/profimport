/**
 * Created by dmalko on 23.08.2015.
 */
$(function() {
    $('#datepicker').fullCalendar({
        lang: 'ru',
        events: [
            {
                title: '20:00 Футбол',
                start: '2015-08-30',
                url: 'http://google.com/'
            },
            {
                title: '20:00',
                start: '2015-08-11',
                url: 'http://google.com/'
            }
        ],
        header: {
            left: '',
            right: 'prev,title,next'
        },
        eventRender: function (event, element, view) {
            var dateString = event.start.format('YYYY-MM-DD');
            $(view.el[0]).find('.fc-day-number[data-date=' + dateString + ']').addClass('has-event');
        }
    });
});

