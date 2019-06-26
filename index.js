$('.container img:nth-child(2)').hover(function(){//hover function
    $(this).attr('src','down1.png')},
    function(){
        $(this).attr('src','down2.png')
        }
)//hover function

$('.container img:nth-child(2)').click(function(){//click to change
    $(this).attr('src','down1.png')},
    function(){
        $(this).attr('src','down2.png')
        }
)//click to change