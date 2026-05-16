import { useState, useEffect } from 'react'
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import './Characters.css'
import { Link } from 'react-router-dom';

const Characters = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    const [characters, setCharacters] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let baseUrl = 'https://rickandmortyapi.com/api/character/';
        const params = new URLSearchParams();
        if (searchQuery) params.append('name', searchQuery);
        if (speciesFilter) params.append('species', speciesFilter);

        const queryString = params.toString();
        const newUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
        setUrl(newUrl);
    }, [searchQuery, speciesFilter])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    setCharacters(data.results)
                    setNext(data.info.next)
                    setPrev(data.info.prev)
                    setTotalPages(data.info.pages)
                    
                    const urlObj = new URL(url);
                    const page = urlObj.searchParams.get('page');
                    setCurrentPage(page ? parseInt(page) : 1);
                } else {
                    setCharacters([])
                    setNext(null)
                    setPrev(null)
                    setTotalPages(1)
                    setCurrentPage(1)
                }
            })
            .catch(err => console.error(err))
    }, [url])

    const handlePrev = () => {
        setUrl(prev)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const handleNext = () => {
        setUrl(next)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const speciesOptions = [
        { value: '', label: 'Todas las Especies' },
        { value: 'Human', label: 'Humano' },
        { value: 'Alien', label: 'Alien' },
        { value: 'Robot', label: 'Robot' },
        { value: 'Mythological Creature', label: 'Criatura Mitológica' },
        { value: 'Animal', label: 'Animal' },
        { value: 'Disease', label: 'Enfermedad' },
        { value: 'Cronenberg', label: 'Cronenberg' },
        { value: 'Poopybutthole', label: 'Poopybutthole' },
        { value: 'Unknown', label: 'Desconocido' }
    ];

    return (
        <div className='pageCharacters'>
            <div className='characters-layout'>
                <aside className='sidebar-filters'>
                    <h3>Filtro por Especie</h3>
                    <div className='radio-group'>
                        {speciesOptions.map((option) => (
                            <label key={option.value} className="radio-label">
                                <input
                                    type="radio"
                                    name="species"
                                    value={option.value}
                                    checked={speciesFilter === option.value}
                                    onChange={(e) => setSpeciesFilter(e.target.value)}
                                />
                                <span className="radio-custom"></span>
                                {option.label}
                            </label>
                        ))}
                    </div>
                </aside>

                <div className='main-content'>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Buscar personaje por nombre..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className='containerCharacters'>
                        {characters.length === 0 ? <p className="no-results">No se encontraron personajes...</p> :
                            characters.map(character => {
                                return (
                                    <Link to={`/characters/${character.id}`} key={character.id}>
                                        <CardCharacter
                                            name={character.name}
                                            gender={character.gender}
                                            species={character.species}
                                            image={character.image}
                                            status={character.status}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className="pagination">
                        <button disabled={!prev} onClick={handlePrev}>Anterior</button>
                        <span className="page-info">Página {currentPage} de {totalPages}</span>
                        <button disabled={!next} onClick={handleNext}>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters