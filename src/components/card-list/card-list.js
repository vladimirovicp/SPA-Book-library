import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import './card-list.css';


export class CardList extends DivComponent{
    constructor(appState, parentState){
        super();
        this.appState = appState;
        this.parentState = parentState;
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

        for (const card of this.parentState.list){
            this.el.append(new Card(this.appState, card).render());
        }


/*
        this.el.innerHTML = `
        <h1> Найдено фильмов - ${this.parentState.total}</h1>
    `;*/

        //this.parentState.totalResults

       return this.el;


    }
}