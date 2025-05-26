
const menuToggle = document.getElementById('menu-toggle');
const drawer = document.getElementById('mobile-drawer');
const closeDrawer = document.getElementById('close-drawer');

menuToggle.addEventListener('click', () => {
    drawer.classList.remove('translate-x-full');
});

closeDrawer.addEventListener('click', () => {
    drawer.classList.add('translate-x-full');
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all tab navigation items
    const tabItems = document.querySelectorAll('#tab-navigation li');

    // Add click event to each tab
    tabItems.forEach(function (tab) {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabItems.forEach(function (item) {
                item.classList.remove('text-[#E55812]', 'font-medium', 'border-b-2', 'border-[#E55812]');
                item.classList.add('text-gray-400');
            });

            // Add active class to clicked tab
            this.classList.remove('text-gray-400');
            this.classList.add('text-[#E55812]', 'font-medium', 'border-b-2', 'border-[#E55812]');

            // Hide all tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(function (content) {
                content.classList.add('hidden');
                content.classList.remove('block');
            });

            // Show the selected tab content
            const tabName = this.getAttribute('data-tab');
            const selectedTab = document.getElementById(tabName + '-tab');
            selectedTab.classList.remove('hidden');
            selectedTab.classList.add('block');
        });
    });
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const addBtn = item.querySelector('.addbtn');
        const decrimentBtn = item.querySelector('.decrimentbtn');

        // Toggle content visibility
        content.classList.toggle('hidden');

        // Toggle button icons
        addBtn.classList.toggle('hidden');
        decrimentBtn.classList.toggle('hidden');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.features-slider', {
        type: 'loop',
        perPage: 4.5,
        gap: '2rem',
        arrows: false,
        pagination: false,
        breakpoints: {
            1550: { perPage: 3.5 },
            1024: { perPage: 3 },
            850: { perPage: 2.5 },
            640: { perPage: 1 },
        },
    });

    splide.on('mounted move', () => {
        const allCards = document.querySelectorAll('.feature-card');
        allCards.forEach(card => card.classList.remove('active-gradient'));

        const activeSlide = splide.Components.Slides.getAt(splide.index);
        if (activeSlide) {
            const activeCard = activeSlide.slide.querySelector('.feature-card');
            if (activeCard) activeCard.classList.add('active-gradient');
        }
    });

    splide.mount();
});

var splide = new Splide('.review-slider', {
    type: 'loop',
    gap: '28px',
    focus: 'center',
    arrows: false,
    autoWidth: true,
});

splide.mount();


