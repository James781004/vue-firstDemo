new Vue({
    el:'#app',
    data: {
        title: 'My first Vue project',
        name: 'abc',
        url: 'https://www.youtube.com/?gl=TW&hl=zh-TW',
        classes:['1', '2'],
        items:['1', '2', '3'],
        people:[
            {name: 'a', age:'22'},
            {name: 'b', age:'24'},
            {name: 'c', age:'25'}
        ],
        wage: 10,
        coords: {
            x:0,
            y:0
        },
        showNome: false,
        showWage: true,
    },
    methods: {
        changeWage(amount){
            this.wage += amount
        },
        logEvent(e){
            console.log(e)
        },
        logCoords(e){
            this.coords.x = e.offsetX //show the offset
            this.coords.y = e.offsetY
        },
        logMessage(e){
            console.log("hellllooooo");
        },
        updateName(e){
            // console.log(e.target.value)
            this.name = e.target.value
        },
        toggleName(){
            this.showNome = !this.showNome
        },
        toggleWage(){
            this.showWage = !this.showWage
        }
    }
})

if(condition){

}