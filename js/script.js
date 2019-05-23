var tabItems = document.querySelectorAll(".tab-item");
var tabItemsContent = document.querySelectorAll(".tab-content-item");

function selectItem(e)
{
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    /*back quotes cuz it's dynamic call*/
    console.log(this.id); 
    if($('.lang-selector').children("option:selected").val() == "en")
    {
    tabContentItem = document.querySelector(`.tab-area-content[lang="en"] #${this.id}-content`);
    tabContentItem.classList.add('show');
    }else if($('.lang-selector').children("option:selected").val() == "ar")
    {
    tabContentItem = document.querySelector(`.tab-area-content[lang="ar"] #${this.id}-content`);
    tabContentItem.classList.add('show');
    }
    console.log(tabContentItem.classList);

}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabItemsContent.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click',selectItem));

$('[lang="ar"]').hide();
$('.lang-selector').change(function(){
    // console.log($(this).children("option:selected").val());
    if($(this).children("option:selected").val() == "en")
    {
        alert('in english if');
        $('[lang="ar"]').hide();
        $('[lang="en"]').show();
        removeBorder();
        $('.tab-area[lang="en"] .tab-item')[0].classList.add('tab-border');
        $('.tab-area-content[lang="en"] #tab-1-content').addClass('show');
        $('.footer-bottom').removeClass('right-selector');
        $('.footer-bottom').addClass('left-selector');
        $('.footer-bottom p').removeClass('bottom-parag-right');
    }else if($(this).children("option:selected").val() == "ar")
    {
        alert('in arabic if');
        $('[lang="ar"]').show();
        $('[lang="en"]').hide();
        removeBorder();
        $('.tab-area[lang="ar"] .tab-item')[2].classList.add('tab-border');
        $('.tab-area-content[lang="ar"] #tab-1-content').addClass('show');
        $('.footer-bottom').removeClass('left-selector');
        $('.footer-bottom').addClass('right-selector');
        $('.footer-bottom p').addClass('bottom-parag-right');
    }
});

// $('#english').click(function() {
//   $('[lang="ar"]').hide();
//   $('[lang="en"]').show();
// });
// $('#arabic').click(function() {
//   $('[lang="ar"]').show();
//   $('[lang="en"]').hide();
// });