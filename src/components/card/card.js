import { DivComponent } from "../../common/div-component";
import './card.css';


export class Card extends DivComponent{
    constructor(appState, cardState){
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    #addToFavorites(){
        console.log('#addToFavorites');
        this.appState.favorites.push(this.cardState);
    }

    #deleteFromFavorites(){
        console.log('#deleteFromFavorites');
        this.appState.favorites = this.appState.favorites.filter(
            b => b.imdbID !== this.cardState.imdbID
        );
    }

    render(){
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            b => b.imdbID == this.cardState.imdbID
        );
        this.el.innerHTML = `
            <div class="card__image">
                <img src='https://via.placeholder.com/300x150?poster' alt='обложка' />
            </div>
            <div class="card__info">
                <div class="card__tag">imdbID: ${this.cardState.imdbID}</div>
                <div class="card__name">${this.cardState.Title}</div>
                <div class="card__year">Year: ${this.cardState.Year}</div>
                <div class="card__footer">
                    <button class="button__add ${existInFavorites ? 'button__active': ''}">
                    ${existInFavorites 
                        ? '<img src="./img/favorites.svg">'
                        : '<img src="./img/favorites-white.svg">'
                    }
                    </button>
                </div>
            </div>
        `;

        if(existInFavorites){
            this.el
            .querySelector('button')
            .addEventListener('click', this.#deleteFromFavorites.bind(this));
        } else{
            this.el.querySelector('button').addEventListener('click', this.#addToFavorites.bind(this));
        }
        
       return this.el;


    }
}