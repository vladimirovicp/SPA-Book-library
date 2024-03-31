import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import onChange from "on-change";
import { Search } from "../../components/search/search";
import { CardList } from "../../components/card-list/card-list";

const API_KEY = '9c23fbb7';

export class MainView extends AbstractView{

    state = {
        list: [],
        total: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    constructor(appState){
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск фильмов');
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
            console.log(data);
            this.state.loading = false;
            this.state.list = data.Search;
/*
            if(data.Search.length){
                this.state.total = data.Search.length;
            } */
        }

        if (path === 'list' || path === 'loading'){
            this.render();
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
        main.append(new CardList(this.appState,this.state).render());
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}