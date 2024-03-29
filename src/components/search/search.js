import { DivComponent } from "../../common/div-component";
import './search.css';


export class Search extends DivComponent{
    constructor(state){
        super();
        this.state = state;
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

        return this.el;
    }
}