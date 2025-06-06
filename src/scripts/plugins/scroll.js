export function scrollMenu() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    function hide() {
        header.classList.add('header-hide');
    }
    function show() {
        header.classList.remove('header-hide')
    }
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            if (header.classList.contains('header-scroll')) {
                header.classList.remove('header-scroll');
            }
            return;
        }

        if (currentScroll > lastScroll) {
            if (!header.classList.contains('header-scroll')) {
                header.classList.add('header-scroll');
                setTimeout(hide,1500)
            }
        } else if (currentScroll < lastScroll) {
            if (header.classList.contains('header-scroll')) {
                header.classList.remove('header-scroll');
            }
        }
        lastScroll = currentScroll;
    });
}

