import React, {useState, createContext} from 'react'

export const views = ['home', 'languageSelect', 'subjectSelect'];
export const currentView = views[0];

export const ViewContext = createContext(views[0]);