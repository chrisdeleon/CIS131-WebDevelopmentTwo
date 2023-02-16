/* 
* Chris de Leon
* 11/23/2022
* CIS131 Vue Movie Tickets Project
*/

var counter = document.getElementById('count');

var app = new Vue({
    el: "#app",
    data: {
        displayTitle: "",
        displayDescription: "",
        displayImage: "",
        nowPlayingArray:"",
        adultTickets: 0,
        childrenTickets: 0,
        totalTickets: 0,
        adultSubTotal: 0.00, 
        childrenSubTotal: 0.00, 
        subtotal: 0,
        total: 0,
        formattedTotal: '', // limits to two decimal places
    
    },
    mounted(){ // API request
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=eb5fafc9ff4aaca27543575afba0e08a&language=en-US&page=1')
        .then( (response) => {
            this.nowPlayingArray = response.data.results.slice(0,4); // specifies the length of the array, 
            console.log(this.nowPlayingArray) // displays results in the console
        })
    },
    methods: {
        addAdult: function (movieName){ // adds 1 to total adult tickets per click
            this.adultTickets++;
            this.totalTickets++;
            this.adultSubTotal += 13.00; // $13 per adult ticket
            counter.innerHTML = this.totalTickets;
            this.subtotal = this.adultSubTotal + this.childrenSubTotal;
            this.total = this.subtotal + (this.subtotal * 0.081); // tax rate
            this.formattedTotal = this.total.toFixed(2); // limits to two decimal places
        },
        addChild: function (movieName){ // adds 1 to total children tickets per click
            this.childrenTickets++;
            this.childrenSubTotal += 8.00; // $8 per child ticket
            this.totalTickets++;
            counter.innerHTML = this.totalTickets;
            this.subtotal = this.adultSubTotal + this.childrenSubTotal;
            this.total = this.subtotal + (this.subtotal * 0.081); // tax rate
            this.formattedTotal = this.total.toFixed(2); // limits to two decimal places
        },

    }
})

var popup = document.getElementById('popup'); // identifies popup element 
var cartOpen = document.getElementById('cartOpen'); // identifies the cart button
var popupBackground = document.getElementById('app'); // identifies the portion that should be blurred
var popupExit = document.getElementById('popupClose'); // identifies the close button

cartOpen.addEventListener('click', popupOpen); // runs function that opens the popup
popupExit.addEventListener('click', popupClose); // runs function that closes the popup

function popupOpen(){ // applies necessary styling for proper popup open
    popup.style.display = 'block';
    // popupBackground.style.filter = 'blur(10px)';
}

function popupClose(){ // restores the styling before popup
    popup.style.display = 'none';
    // popupBackground.style.filter = 'blur(0px)';
}


