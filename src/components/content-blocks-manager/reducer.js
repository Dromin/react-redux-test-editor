const contentBlockReducer = (currentState = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            const nextState = [
                ...currentState,
                {
                    id: action.id,
                    task: action.task,
                    completed: false
                }
            ];
            return nextState;
            break;
        default:
            return currentState;
    }
};

export default contentBlockReducer;