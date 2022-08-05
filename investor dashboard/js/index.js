const chart = document.querySelector('#chart').getContext('2d');

// Create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33527, 39974, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 11000, 88800, 26000, 46000, 32698, 5000, 3000, 38116, 41004],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    Options: {
        responsive: true
    }
}) 

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

// show sidebar
menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none';
    sidebar.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
    menuBtn.style.display = 'inline';
})

// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});