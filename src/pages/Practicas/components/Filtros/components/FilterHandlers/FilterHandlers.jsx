import { useExerciseContext } from "../../../../exerciseContext/exerciseContext"
const useFilterHandler = () => {

    const { 
        completedFilter, 
        setCompletedFilter,
        levelFilter,
        setLevelFilter,
        resolutionFilter,
        setResolutionFilter,
        savedFilter,
        setSavedFilter
        
    } = useExerciseContext();
    
    const CompletedFilterHandler = (filterType) => {
        completedFilter === filterType ? setCompletedFilter(null)
        : setCompletedFilter(filterType);
    }

    const LevelFilterHandler = (filterType) => {
        levelFilter === filterType ? setLevelFilter(null)
        : setLevelFilter(filterType);
    }

    const SavedFilterHandler = (filterType) => {
        savedFilter === filterType ? setSavedFilter(null)
        : setSavedFilter(filterType);
    }

    const ResolutionFilterHandler = (filterType) => {
        resolutionFilter === filterType ? setResolutionFilter(null)
        : setResolutionFilter(filterType);
    }

    return {
        CompletedFilterHandler,
        LevelFilterHandler,
        SavedFilterHandler,
        ResolutionFilterHandler,
    }

}

export default useFilterHandler;