import type AppState from "../interfaces/AppState";

export class StateManager{
    
    currentState: AppState;
    activeStates: AppState[];
    errorState: AppState = {
        stateID: 'error'
    }

    constructor(states: AppState[], startingIndex?: number){
        this.activeStates = states;
        this.currentState = states[startingIndex || 0];
    }

    changeState(index): AppState{
        return this.currentState = this.activeStates[index] || this.errorState;
    }
}