function changeProductList(type, element){
    let productFilter = document.getElementsByClassName('product-filter-items__links');
    for(i = 0; i < productFilter.length; i++){
        productFilter[i].classList.remove('filter-active');
    }
    element.classList.add('filter-active');
    document.getElementById(type).style.display = 'flex';
    switch (type) {
        case 'all':
            document.getElementById('mac-pro').style.display = 'none';
            document.getElementById('mac-air').style.display = 'none';
            document.getElementById('iMac').style.display = 'none';
            document.getElementById('mac-mini').style.display = 'none';   
            break;
        case 'mac-pro':
            document.getElementById('all').style.display = 'none';
            document.getElementById('mac-air').style.display = 'none';
            document.getElementById('iMac').style.display = 'none';
            document.getElementById('mac-mini').style.display = 'none';  
            break;
        case 'mac-air':
            document.getElementById('all').style.display = 'none';
            document.getElementById('mac-pro').style.display = 'none';
            document.getElementById('iMac').style.display = 'none';
            document.getElementById('mac-mini').style.display = 'none';  
            break;
        case 'iMac':
            document.getElementById('all').style.display = 'none';
            document.getElementById('mac-pro').style.display = 'none';
            document.getElementById('mac-air').style.display = 'none';
            document.getElementById('mac-mini').style.display = 'none';  
            break;
        case 'mac-mini':
            document.getElementById('all').style.display = 'none';
            document.getElementById('mac-pro').style.display = 'none';
            document.getElementById('mac-air').style.display = 'none';
            document.getElementById('iMac').style.display = 'none';
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