// new Vue({

//     el: "#app",
//     data: {
//         title: "Zumon"
//     }

// });

const app = Vue.createApp({
    data() {
        return {
            title: "Zumon",
            cars: ['Ford','Toyota'],
            robot: {
                name: 'Franky'
            },
            greeting: ()=> {
                return "Hello World";
            }
        }
    }
});

app.mount('#app')