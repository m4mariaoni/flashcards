import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
name: 'topicsSlice',
initialState: {
    topics: {}
},
reducers:{
    addTopic: (state, action) => {
        const {id, name, icon} = action.payload;
        state.topics[id] = {
            id: id,
            name: name,
            icon,
            quizIds: []
        };
    },
    addQuizToTopic: (state, action) => {
        const {topicId, id} = action.payload;
        state.topics[topicId].quizIds.push(id);
    }
}

});

export const {addTopic,addQuizToTopic} = topicsSlice.actions; //exporting addTopic which is the action
export const selectTopics = (state) => state.topics.topics; //exporting topics in the inital state
export default topicsSlice.reducer; //export topicsSlides for reducers
