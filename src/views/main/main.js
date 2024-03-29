import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import onChange from "on-change";
import { Search } from "../../components/search/search";

const API_KEY = '9c23fbb7';

export class MainView extends AbstractView{

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    constructor(appState){
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    appStateHook(path){
        console.log(path);
        if (path === 'favorites'){
            console.log(path);
        }
    }

    async stateHook(path){
        if (path === 'searchQuery'){
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            console.log(data.Search);
            //this.state.list = date.Search;

        }
    }

    async loadList(q, offset){
        //fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        //const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${q}`);
        return res.json();
    }

    render(){
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
        //main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}