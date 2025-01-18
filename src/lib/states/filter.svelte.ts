class FilterStates{
    private type:string|null = $state('');
    private mode:string|null = $state('');
    private sector:string|null = $state('');
    private searchQuery:string | null = $state('');

    constructor() {
        this.type = '';
        this.mode = '';
        this.sector = '';
        this.searchQuery = '';
    }
    

    setType(type:string | null){
        this.type = type;
    }
    getType(){
        return this.type;
    }

    setMode(mode:string | null){
        this.mode = mode;
    }
    getMode(){
        return this.mode;
    }

    setSector(sector:string | null){
        this.sector = sector;
    }
    getSector(){
        return this.sector;
    }

    setSearchQuery(query:string | null){
        this.searchQuery = query;
    }
    getSearchQuery(){
        return this.searchQuery;
    }
}

export const filterStates = new FilterStates();