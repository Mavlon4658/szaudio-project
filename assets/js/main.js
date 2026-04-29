const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const productListSwp = new Swiper('.products-list', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    watchSlidesProgress: true,
    breakpoints: {
        1320: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.products-list .swp-btn__next',
        prevEl: '.products-list .swp-btn__prev',
    }
})

const productCards = document.querySelectorAll('.product-card');
if (productCards.length) {
    productCards.forEach(card => {
        const cardSwp = new Swiper(card.querySelector('.product-card__swp'), {
            slidesPerView: 1,
            loop: true,
            nested: true,
            pagination: {
                el: card.querySelector('.swp-pagination'),
                clickable: true,
            }
        })
    })
}

const footerNavsItem = document.querySelectorAll('.footer-navs__item');

if (footerNavsItem.length) {
    footerNavsItem.forEach((item) => {
        const btn = item.querySelector('h3');
        const content = item.querySelector('.footer-navs__item-content');
    
        btn.addEventListener('click', () => {
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
}

if (document.querySelector('.anons .swiper')) {
    var anonsSwpInit = false;
    var anonsSwp;
    function anonsSwpFunction() {
        if (window.innerWidth <= 1420) {
            if (!anonsSwpInit) {
                anonsSwpInit = true;
                anonsSwp = new Swiper('.anons .swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                    loop: true,
                    freeMode: true,
                    freeModeMomentum: false,
                    allowTouchMove: false,
                    speed: 5000,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                })
            }
        } else if (anonsSwpInit) {
            anonsSwp.destroy();
            anonsSwpInit = false;
        }
    }
    anonsSwpFunction();
    window.addEventListener("resize", anonsSwpFunction);
}

const categoryLeftBtn = document.querySelector('.category-left__btn');
const categoryLeftContent = document.querySelector('.category-left__content');

if (categoryLeftBtn) {
    categoryLeftBtn.onclick = () => {
        categoryLeftContent.classList.toggle('active');
        categoryLeftBtn.classList.toggle('active');
    }
}

const formControl = document.querySelectorAll('.category-filter .form-input');

if (formControl.length) {
    formControl.forEach(el => {
        const inp = el.querySelector('input');
        const btn = el.querySelector('button');

        IMask(inp, {
            mask: Number,
            thousandsSeparator: ' ',
            scale: 0,
            signed: false,
        })

        inp.oninput = () => {
            if (inp.value.length > 0) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }

        btn.onclick = () => {
            inp.value = ''
        }
    })
}

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
    const accBtn = item.querySelector('.accordion-btn');
    const accBody = item.querySelector('.accordion-body__wrap');

    if (item.classList.contains('active')) accBody.style.maxHeight = accBody.scrollHeight + 'px';

    accBtn.addEventListener('click', () => {
        item.classList.toggle('active');
        accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
    });

    if (window.innerWidth <= 1040) {
        accBody.style.maxHeight = null;

        window.addEventListener('resize', function () {
            accBody.style.maxHeight = null;
        })
    }

});

const filterBtn = document.querySelector('.filter-btn');
const filter = document.querySelector('.category-filter');
const filterClose = document.querySelectorAll('.category-filter .close-btn');
const filterBg = document.querySelector('.category-filter__bg');

if (filter) {
    filterBtn.onclick = () => {
        filter.classList.add('active')
    }

    filterClose.forEach(btn => {
        btn.onclick = () => {
            filter.classList.remove('active');
            filter.classList.add('end-active');
            setTimeout(() => {
                filter.classList.remove('end-active')
            }, 400);
        }
    })

    filterBg.onclick = () => {
        filter.classList.remove('active');
        filter.classList.add('end-active');
        setTimeout(() => {
            filter.classList.remove('end-active')
        }, 400);
    }
}