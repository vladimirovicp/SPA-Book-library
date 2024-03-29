import { DivComponent } from "../../common/div-component";
import './card-list.css';


export class CardList extends DivComponent{
    constructor(appState, parentState){
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    search(){
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render(){
        if(this.parentState.loading){
            this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`;
            return this.el;
        }
        this.el.classList.add('card-list');

       // console.log(this.parentState);
        this.el.innerHTML = `
            <h1> Найдено фильмов - ${this.parentState.list ? this.parentState.list.length : 0}</h1>
        `;
        
       return this.el;


    }
}