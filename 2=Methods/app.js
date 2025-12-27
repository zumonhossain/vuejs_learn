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
        }
    },
    methods: {
        greeting1: function(){
            return "Hello World 1";
        },

        greeting2(){
            return "Hello World 2";
        },

        greeting3(){
            return this.title;
        },
        
        greeting4(){
            return this.cars[0];
        },
        
        greeting5(){
            return this.robot.name;
        }
    },
});

app.mount('#app')