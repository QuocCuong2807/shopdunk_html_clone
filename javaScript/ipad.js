function changeProductList (type, element) {
    let productFilter = document.getElementsByClassName('product-filter-items__links');
    for(i = 0; i< productFilter.length; i++){
        productFilter[i].classList.remove('filter-active')
    }
    element.classList.add('filter-active')
    document.getElementById(type).style.display = 'flex';
    switch (type) {
        case 'all':
            document.getElementById('iPad-pro').style.display = 'none';
            document.getElementById('iPad-air').style.display = 'none';
            document.getElementById('iPad-9').style,display = 'none';
            document.getElementById('iPad-mini').style.display = 'none';
            break;
        case 'iPad-pro':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPad-air').style.display = 'none';
            document.getElementById('iPad-9').style.display = 'none';
            document.getElementById('iPad-mini').style.display = 'none'
            break;
        case 'iPad-air':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPad-pro').style.display = 'none';
            document.getElementById('iPad-9'),style.display = 'none';
            document.getElementById('iPad-mini').style.display = 'none';
            break;
        case 'iPad-9':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPad-pro').style.display = 'none';
            document.getElementById('iPad-air').style.display = 'none';
            document.getElementById(iPad-mini).style.display = 'none';
            break;
        case 'iPad-mini':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPad-pro').style.display = 'none';
            document.getElementById('iPad-air').style.display = 'none';
            document.getElementById('iPad-9').style.display = 'none';
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
