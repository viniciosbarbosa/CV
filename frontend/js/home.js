$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
    $allClick = $(this).find('[data-click]'),
    activeClass = 'active';
    $TargetActive = $allTarget.first().addClass(activeClass);

    $next = $(this).find('[data-next]'),
    $prev = $(this).find('[data-prev]');
    
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass); 
    
    $allClick.click(function(e){
        e.preventDefault();
        
        var id = $(this).data('click'),
        $target = $('[data-target="' + id + '"]');
        $TargetActive = $target;

        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);  
        
        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });

    //
    $next.click(function(e){
        e.preventDefault();

        $newContent = $TargetActive.next();


        if(!$newContent.hasClass( "grid-8" )){
            $newContent =  $allTarget.first().addClass(activeClass);
         }

     
        $allTarget.removeClass(activeClass);
        $newContent.addClass(activeClass);
        $TargetActive = $newContent;


    })

    $prev.click(function(e){
        e.preventDefault();
        
        $newContent = $TargetActive.prev();
        if(!$newContent.hasClass( "grid-8")){
            $newContent =  $allTarget.last().addClass(activeClass);
        }
         $allTarget.removeClass(activeClass);
         $newContent.addClass(activeClass);
         $TargetActive = $newContent;
    })
});

$('.whatapp').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://api.whatsapp.com/send?phone=5511959924104&text=Developer%20Front%20end';
});

$('.github').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa';
});


$('.linkedin').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.linkedin.com/in/viniciosbarbosaa/';
})