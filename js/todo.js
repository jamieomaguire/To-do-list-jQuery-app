$(document).ready(function() {
    $('#submit').click(function() {
        var task = $('input[type=text]').val();
        var template = $('#taskTemplate').html();
        $('.task-list').append(template.replace("{{ task }}", task));
        $('input[type=text]').val("");
    });
    $(document).on('click', '.delete', function() {
        $(this).parents('.task').remove();
    });
    $(document).on('click', '.done', function() {
        $(this).parents('.task').children('.task-copy').toggleClass('completed');
    });
});
