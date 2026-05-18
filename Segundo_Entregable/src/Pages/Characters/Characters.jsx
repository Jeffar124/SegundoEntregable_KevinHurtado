import { useEffect, useState } from 'react'
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import './Characters.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Characters = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const currentPage = parseInt(searchParams.get('page') || '1');
    const searchQuery = searchParams.get('name') || '';
    const speciesFilter = searchParams.get('species') || '';

    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQuery) params.append('name', searchQuery);
        if (speciesFilter) params.append('species', speciesFilter);
        params.append('page', currentPage);

        fetch(`https://rickandmortyapi.com/api/character/?${params.toString()}`)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    setCharacters(data.results);
                    setTotalPages(data.info.pages);
                } else {
                    setCharacters([]);
                    setTotalPages(1);
                }
            })
            .catch(err => console.error(err));
    }, [searchParams]);

    const applyFilter = (key, value) => {
        const params = new URLSearchParams(searchParams);
        if (value) params.set(key, value);
        else params.delete(key);
        params.set('page', '1');
        navigate(`/characters?${params.toString()}`);
    };

    const goToPage = (page) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page);
        navigate(`/characters?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrev = () => goToPage(currentPage - 1);
    const handleNext = () => goToPage(currentPage + 1);

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
                                    onChange={(e) => applyFilter('species', e.target.value)}
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
                            onChange={(e) => applyFilter('name', e.target.value)}
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
                        <button disabled={currentPage <= 1} onClick={handlePrev}>Anterior</button>
                        <span className="page-info">Página {currentPage} de {totalPages}</span>
                        <button disabled={currentPage >= totalPages} onClick={handleNext}>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters