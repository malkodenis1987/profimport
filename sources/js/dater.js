/**
 * Created by dmalko on 23.08.2015.
 */
$(function() {
    $('#datepicker').fullCalendar({
        lang: 'ru',
        events: [
            {
                title: '20:00 Футбол',
                start: '2015-08-04',
                url: 'http://google.com/'
            },
            {
                title: '20:00 Футбол',
                start: '2015-08-11',
                url: 'http://google.com/'
            }
        ]
    });
});

