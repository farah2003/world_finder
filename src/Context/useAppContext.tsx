import { useContext } from 'react';
import { AppContext } from './AppContext';
import { AppContextInterfaces } from '../interfaces'

export const useAppContext = (): AppContextInterfaces.AppContext => useContext(AppContext);  