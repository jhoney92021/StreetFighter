$('.arenaSelection button').hover(function(){//hover function
    $('.container').css('background-image','url(dojo_arena_photos/matrix.jpg)')},
    function(){
        console.log('beach'),
        $('.container').css('background-image','url(dojo_arena_photos/beach.jpg)')
        }
)//hover function

$('.arenaSelection button').click(function(){//click to change
    $('.container').css('background-image','url(dojo_arena_photos/dojo.jpg)')},
    function(){
        console.log('dojo'),
        $('.container').css('background-image','url(dojo_arena_photos/dojo.jpg)')
        }
)//click to change

// $('.arenaSelection button').hover(function(){
//     console.log('poops'),
//     $(this).css('background-color', 'red')},
//         function(){
//             console.log('farts'),
//             $(this).css('background-color','grey')
//         }


// )