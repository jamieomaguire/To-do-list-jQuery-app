$(document).ready(function() {
    $('#submit').click(function() {
        // Take inputs value as variable
        var task = $('input[type=text]').val();
        // Append html template to task-list
        var template = $('#taskTemplate').html();
        $('.task-list').append(template.replace("{{ task }}", task));
        // Reset input value
        $('input[type=text]').val("");
    });
    // Delete Task
    $(document).on('click touch', '.delete', function() {
        $(this).parents('.task').remove();
    });
    // Toggle complete/not complete on task
    $(document).on('click touch', '.done', function() {
        $(this).parents('.task').children('.task-copy').toggleClass('completed');
    });
});
