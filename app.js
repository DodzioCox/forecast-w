
const { createApp } = Vue;

createApp({
    data(){
        return{
            city: 'New York',
            temperature: 25,
            weatherType: 'Thunderstorm',
            todayDate: 'Monday, 28 April',
            time: '08:00 AM'
        }
    }
}).mount('#app')