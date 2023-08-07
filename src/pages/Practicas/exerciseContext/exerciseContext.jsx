import { createContext, useContext, useState } from "react";
import { ListaDeEjercicios } from "./EjemploEjercicios";

const ExerciseContext = createContext();

export function ExerciseContextProvider({children}) {
    const [ exercisesList, setExercisesList ] = useState(ListaDeEjercicios);
    const [ selectedExercise, setSelectedExercise ] = useState(null);
    const [ completedFilter, setCompletedFilter ] = useState(null);
    const [ levelFilter, setLevelFilter ] = useState(null);
    const [ resolutionFilter, setResolutionFilter ] = useState(null);
    const [ savedFilter, setSavedFilter ] = useState(null);

    const sharedState = {
        exercisesList,
        setExercisesList,
        selectedExercise,
        setSelectedExercise,
        completedFilter,
        setCompletedFilter,
        levelFilter,
        setLevelFilter,
        resolutionFilter,
        setResolutionFilter,
        savedFilter,
        setSavedFilter,
    };

    return (
        <ExerciseContext.Provider value={sharedState}>
            {children}
        </ExerciseContext.Provider>
    )
}

export function useExerciseContext() {
    return useContext(ExerciseContext);
}