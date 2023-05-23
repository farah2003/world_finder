import { createContext, useState, ReactNode } from 'react';
import { AppContextInterfaces, CountryInterfaces } from '../interfaces'

export const AppContext = createContext<AppContextInterfaces.AppContext>({} as AppContextInterfaces.AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchedValue, setSearchedValue] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedContinent, setSelectedContinent] = useState('');
    const [countries, setCountries] = useState<CountryInterfaces.CountryInterface[]>([]);

    return (
        <AppContext.Provider
            value={{
                searchedValue,
                setSearchedValue,
                selectedLanguage,
                setSelectedLanguage,
                selectedContinent,
                setSelectedContinent,
                countries,
                setCountries

            }}
        >
            {children}
        </AppContext.Provider>
    )
};
