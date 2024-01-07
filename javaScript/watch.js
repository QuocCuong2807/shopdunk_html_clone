function changeProductList(type, element) {
    let productFilter = document.getElementsByClassName('product-filter-items__links');
    for(i = 0; i < productFilter.length; i++){
        productFilter[i].classList.remove('filter-active');
    }
    element.classList.add('filter-active');
    document.getElementById(type).style.display = 'flex';
    switch (type) {
        case 'all':
        document.getElementById('watch-7').style.display = 'none';
        document.getElementById('watch-6').style.display = 'none';
        document.getElementById('watch-se').style.display = 'none';
        document.getElementById('watch-3').style.display = 'none';  
            break;
        case 'watch-7':
        document.getElementById('all').style.display = 'none';
        document.getElementById('watch-6').style.display = 'none';
        document.getElementById('watch-se').style.display = 'none';
        document.getElementById('watch-3').style.display = 'none';
            break;
        case 'watch-6':
            document.getElementById('all').style.display = 'none';
            document.getElementById('watch-7').style.display = 'none';
            document.getElementById('watch-se').style.display = 'none';
            document.getElementById('watch-3').style.display = 'none';
            break;
        case 'watch-se':
            document.getElementById('all').style.display = 'none';
            document.getElementById('watch-7').style.display = 'none';
            document.getElementById('watch-6').style.display = 'none';
            document.getElementById('watch-3').style.display = 'none';
            break;
        case 'watch-3':
            document.getElementById('all').style.display = 'none';
            document.getElementById('watch-7').style.display = 'none';
            document.getElementById('watch-6').style.display = 'none';
            document.getElementById('watch-se').style.display = 'none';
            break;
    }
}
const toTop = document.querySelector(".to-top__btn");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add('to-top__btn--active');
    } else {
        toTop.classList.remove('to-top__btn--active');
    }
})
toTop.addEventListener("click", () => {
    window.scrollTo(0,0);
})
