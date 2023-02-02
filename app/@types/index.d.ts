
interface Info {
    count: number
    pages: number
    next: Url
    prev: Url
}

interface Result<Data> {
    info: Info
    results: Data
}

type Status = 'alive' | 'dead' | 'unknown'
type Gender = 'female' | 'male' | 'genderless' | 'unknown';
type CharacterEntity = {
    name: string
    url: string
}
type Url = string
interface Character {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: CharacterEntity;
    location: CharacterEntity;
    image: string;
    episode: Url[];
    url: Url;
    created: string;
}

interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Url[];
    url: Url;
    created: string;
}

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Url[];
    url: Url;
    created: string;
}

interface Player {
    id: string
    name: string
    score: number
}