import { DivComponent } from "../../common/div-component";
import './search.css';


export class Search extends DivComponent{
    constructor(state){
        super();
        this.state = state;
    }

    search(){
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render(){
        this.el.classList.add('search');
        console.log(this.state);
        this.el.innerHTML = `
            <div class="search__wraper">
                <input 
                    type="text" 
                    placeholder="Найти книгу или автора...."
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : '' }"
                />
            <img src="./img/search.svg" alt="Иконка поиска:" />
            </div>
            <button aria-label="искать">
                <img src="./img/search-white.svg" alt="Иконка поиска:"   />
            </button>
        `;

        console.log(this.search);
        console.log(this.search.bind(this));

        this.el.querySelector('button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if(event.code === 'Enter'){
                this.search();
            }
        });

        return this.el;
    }
}