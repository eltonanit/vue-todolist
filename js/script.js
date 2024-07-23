const { createApp } = Vue;

createApp ({
    data () {
        return {
            tasks: [
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
                }
            ]
        }
    }, 
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            let obj =  [
                text: this.text,
                done: false
            ]
            this.tasks.push(obj);
            this.text = null; 
        }

    }
}).mount('#app');