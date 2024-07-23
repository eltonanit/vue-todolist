const {creatApp} = Vue;

createApp ({
    data () {
        return {
            tasks:[
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Seguire lezione',
                    done: true
                },
                {
                    text: 'Fare esercizio del giorno ',
                    done: true
                },
                {
                    text: 'Portare a spasso il cane',
                    done: false
                },
                {
                    text: 'preparare il pranzo',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
            ]
        }
    }, 
    methods : {

    }
}).mount('#app');