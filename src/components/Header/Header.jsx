/* eslint-disable react/prop-types */
import './Header.css'

const Header = ({ setCityName }) => {
    return (
        <>
            <header>
                <form
                    onSubmit={(ev) => {
                        ev.preventDefault()
                        setCityName(ev.target.search.value)
                    }}>
                    <input
                        type='text'
                        name='search'
                        className='searchBar'
                        placeholder='Search for a city...'
                        autoComplete='off'
                        required
                    />
                    <button type='submit'>
                        <span className='material-symbols-outlined'>
                            search
                        </span>
                    </button>
                </form>
                <div className='degreesContainer'>
                    <span>
                        <h2>°C</h2>
                    </span>
                    <span>
                        <h2>°F</h2>
                    </span>
                </div>
            </header>
        </>
    )
}

export default Header
