// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.


// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.


// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.


// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
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
            if ((this.newTask != '') && (this.newTask.lenght >= 5)) {
                this.tasks.unshift({"text":this.newTask, "done":false});
                this.error = false
            }

            else{
                this.error = true
            }

            this.newTask = '';
            console.log(this.error);
            console.log(this.tasks);
            console.log(this.newTask)
        },

        rimuoviTask(indice){
            this.tasks.splice(indice,1)
        }
    }
}).mount("#app");

tasks.lenght