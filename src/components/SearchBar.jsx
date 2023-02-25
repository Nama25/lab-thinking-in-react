function SearchBar({query, setQuery, check, handleChange}) {

    const searchInput = event => {
        setQuery(event.target.value)
    }

    const checkActive = event => {
        handleChange(event.target.value)
    }

    return(
        <div>
            <input type="search" value={query} onChange={searchInput}/>
            <label>Search</label>
            <form>
                <input type="checkbox" value={check} onChange={checkActive}/>
                <label>Only show products in stock</label>
            </form>
        </div>
    )
}

export default SearchBar