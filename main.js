// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)

const {createApp} = Vue;

createApp({
    data(){
        return {
            logoImage : './img/logo.png',
            error:false,
            newTask:'',
            tasks : [
                {"text":"Fare i compiti", "done":false},
                {"text":"Fare la spesa", "done":false},
                {"text":"Fare il bucato", "done":false}
            ]
        }
    },

    methods: {
        aggiungiTask(){
            // Utilizzo unshift per aggiornare l'array a inizio pagina
            if (this.newTask !== '' && this.newTask.length >= 5) {
                this.tasks.unshift({"text":this.newTask, "done":false});
                this.error = false;
            }

            else{
                this.error = true;
            }

            this.newTask = '';
        },

        rimuoviTask(indice){
            this.tasks.splice(indice,1)
        },

        taskComplete(){
            if (this.tasks.done === true) {
                this.tasks.done = false
            }

            else{
                this.tasks.done = true
            }
        }
    }
}).mount("#app");
