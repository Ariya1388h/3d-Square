let lastScroll = 0;
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            let currentScroll = window.pageYOffset;

            if (currentScroll === 0) {
                // At the top of the page, show the header
                header.classList.remove('header-hidden');
                header.classList.add('header-visible');
            } else if (currentScroll > lastScroll) {
                // Scrolling down, hide the header
                header.classList.remove('header-visible');
                header.classList.add('header-hidden');
            } else {
                // Scrolling up, show the header
                header.classList.remove('header-hidden');
                header.classList.add('header-visible');
            }
            lastScroll = currentScroll;
        });