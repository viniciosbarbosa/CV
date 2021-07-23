$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
    $allClick = $(this).find('[data-click]'),
    activeClass = 'active';
    
    $next = $(this).find('[data-next]'),
    $prev = $(this).find('[data-next]');
    
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass); 
    
    $allClick.click(function(e){
        e.preventDefault();
        
        var id = $(this).data('click'),
        $target = $('[data-target="' + id + '"]');
        
        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);  
        
        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });

    //
    $next.click(function(e){
        e.preventDefault();

        $target2 = $allTarget.next();
        $allTarget.removeClass(activeClass);
        $target2.addClass(activeClass);
        /*
        if($target2.lenght == 0){
            $allTarget.removeClass(activeClass);  
            $allTarget.first().addClass(activeClass);
        }
        */ 
    })

    
});

