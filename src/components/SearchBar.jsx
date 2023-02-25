function SearchBar({query, setQuery}) {

    const searchInput = event => {
        setQuery(event.target.value)
    }

    return(
        <div>
            <input type="search" value={query} onChange={searchInput}/>
            <label>Search</label>
            <form>
                <input type="checkbox"/>
                <label>Only show products in stock</label>
            </form>
        </div>
    )
}

export default SearchBar