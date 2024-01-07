function changeProduct (type, elements) {
    let productFilter = document.getElementsByClassName('product-filter-items__links');
    for(i = 0; i< productFilter.length; i++){
        productFilter[i].classList.remove("filter-active");
    }
    elements.classList.add('filter-active');
    document.getElementById(type).style.display = 'flex'
    switch (type) {
        case 'all':
            document.getElementById('iPhone13').display = 'none';
            document.getElementById('iPhone12').display = 'none';
            document.getElementById('iPhone11').display = 'none';
            document.getElementById('iPhoneSE').display = 'none';
            break;
        case 'iPhone13':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPhone12').style.display = 'none';
            document.getElementById('iPhone11').style.display = 'none';
            document.getElementById('iPhoneSE').style.display = 'none';
            break;
        case 'iPhone12':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPhone13').style.display = 'none';
            document.getElementById('iPhone11').style.display = 'none';
            document.getElementById('iPhoneSE').style.display = 'none';
            break;
        case 'iPhone11':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPhone13').style.display = 'none';
            document.getElementById('iPhone12').style.display = 'none';
            document.getElementById('iPhoneSE').style.display = 'none';
            break;
        case 'iPhoneSE':
            document.getElementById('all').style.display = 'none';
            document.getElementById('iPhone13').style.display = 'none';
            document.getElementById('iPhone12').style.display = 'none';
            document.getElementById('iPhone11').style.display = 'none';
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