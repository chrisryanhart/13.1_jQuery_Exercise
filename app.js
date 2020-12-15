
$('form').on('submit', function(e){
    e.preventDefault();
    let $title = $('input').eq(0);
    let $rating = $('input').eq(1);


    const $newTitle = $(`<td> ${$title.val()} </td>`);
    const $newRating = $(`<td> ${$rating.val()} </td>`);
    const $newBtn = $('<button> Remove </button>').on('click',function(e){
        e.preventDefault();
        $(this).parent('tr').remove();
    });
    const $newTR = $('<tr></tr>');

    $newTR.append($newTitle);
    $newTR.append($newRating);
    $newTR.append($newBtn);
  
    $('table').append($newTR);
    
    $title.val('');
    $rating.val('');
    
});