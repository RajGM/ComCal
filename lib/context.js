import { createContext } from 'react';
export const UserContext = createContext({ user: null, username: null });
export const catogriesContext = createContext({ selectedCategory: "Hackathon" });
export const filterContext = createContext({ selectedFilter: "Onsite" });