import React, {useState, createContext} from 'react'

export const views = ['home', 'languageSelect', 'subjectSelect'];
export const currentView = 'languageSelect';

export const ViewContext = createContext('languageSelect');