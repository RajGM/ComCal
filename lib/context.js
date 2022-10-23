import { createContext } from 'react';
export const UserContext = createContext({ user: null, username: null });
export const catogriesContext = createContext({ selectedCategory: null, categories: [] });
export const filterContext = createContext({ selectedFilter: null, filters: [] });