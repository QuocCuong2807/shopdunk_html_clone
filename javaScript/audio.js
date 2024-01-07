function changeProductList (type, element){
    let productFilter = document.getElementsByClassName('product-filter-items__links');
    for(i = 0; i < productFilter.length; i++){
        productFilter[i].classList.remove('filter-active');
    }
    element.classList.add('filter-active');
    document.getElementById(type).style.display = 'flex'
    switch (type) {
        case 'all':
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('google').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';    
            break;
        case 'air-pod':
            document.getElementById('all').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('google').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';
            break;
        case 'ear-pod':
            document.getElementById('all').style.display = 'none';
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('google').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';
            break;
        case 'beats':
            document.getElementById('all').style.display = 'none';
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('google').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';
            break;
        case 'harman-kardon':
            document.getElementById('all').style.display = 'none';
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('google').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';
            break;
        case 'jbl':
            document.getElementById('all').style.display = 'none';
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('google').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';
            break;
        case 'google':
            document.getElementById('all').style.display = 'none';
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('marshall').style.display = 'none';
            break;
        case 'marshall':
            document.getElementById('all').style.display = 'none';
            document.getElementById('air-pod').style.display = 'none';
            document.getElementById('ear-pod').style.display = 'none';
            document.getElementById('beats').style.display = 'none';
            document.getElementById('harman-kardon').style.display = 'none';
            document.getElementById('jbl').style.display = 'none';
            document.getElementById('google').style.display = 'none';
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
