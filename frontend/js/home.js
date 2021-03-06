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
        
        
        if(!$newContent.hasClass("grid-8")){
            $newContent =  $allTarget.first().addClass(activeClass);
        }
        
        
        $allTarget.removeClass(activeClass);
        $newContent.addClass(activeClass);
        $TargetActive = $newContent;
        
        
    })
    
    $prev.click(function(e){
        e.preventDefault();
        
        $newContent = $TargetActive.prev();
        if(!$newContent.hasClass("grid-8")){
            $newContent =  $allTarget.last().addClass(activeClass);
        }
        $allTarget.removeClass(activeClass);
        $newContent.addClass(activeClass);
        $TargetActive = $newContent;
    })
});



var showMenu = $(".btnmenu"),
activeMenu = $('.active');

$(showMenu).click(function(e){
    $(showMenu).removeClass(activeMenu);
    $(this).addClass(activeMenu);
});

$('.whatapp').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://api.whatsapp.com/send?phone=5511959924104&text=Developer%20Front%20end';
});

$('.github').click(function (e) { 
    e.preventDefault();
    window.open('https://github.com/viniciosbarbosa');
});

$('.linkedin').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.linkedin.com/in/viniciosbarbosaa/';
})

$('#web').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.origamid.com/certificate/0a478d12/';
});

$('#inter').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://drive.conqueronline.com.br/Certificados/Intelig%C3%AAncia%20Emocional/1625628324123-9a876364-50c9-45d9-804e-dfa41b39e4a6.pdf';
});

$('#angu').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.cod3r.com.br/certificates/iywuvjtx0s';
});

$('#sass').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.origamid.com/certificate/1b95db14/';
});

$('#jq').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.origamid.com/certificate/370b269b/';
});

$('#prd').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://www.cod3r.com.br/certificates/nbzzqkqbnv';
});


$('#flex').click(function (e) { 
    e.preventDefault();
    window.location.href="https://www.origamid.com/certificate/b3ee1766/"
});

$('#fiap').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://drive.google.com/file/d/1SrMpQ3atpkDN_VA6zAJDXisXWvDvd-wW/view';
});

$('.portlogo').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/Logo';
});

$('.portnature').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/NatureJs';
});

$('.portorganic').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/Organic';
});

$('.portlescone').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/LeScone';
});

$('.porttravel').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/V.B-Travel';
});

$('.portbike').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/BikeCraft';
});

$('.portcrud').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/Crud-Angular';
});

$('.portcd').click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/App-CoronaVirus';
});

$(".flexboxGit").click(function (e) { 
    e.preventDefault();
    window.location.href = 'https://github.com/viniciosbarbosa/FlexBlog';
});







function activeDiv(e , id) {
    e.preventDefault();
    $('.showDivcontent.active').removeClass('active');
    $('#' + id).addClass('active');
}

$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000');
})