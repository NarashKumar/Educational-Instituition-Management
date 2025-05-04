/* eslint-disable react/prop-types */
import React, { useReducer, createContext, useEffect } from 'react';

export const StudentContext = createContext();

const initialState = {
  students: [],
  selectedStudent: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return { ...state, students: action.payload };
    case 'SET_SELECTED_STUDENT':
      return { ...state, selectedStudent: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function StudentProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState,() => {
    console.log('state');
    const localData = localStorage.getItem('students');
    const selectedStudentData = localStorage.getItem('selectedStudent');
    return {
    students : localData ? JSON.parse(localData) : initialState.students,
    selectedStudent : selectedStudentData ? JSON.parse(selectedStudentData) : initialState.selectedStudent
    }
  });

  useEffect(() => {
    if(state.students)
    localStorage.setItem('students', JSON.stringify(state.students));

    if(state.selectedStudent)
    localStorage.setItem('selectedStudent', JSON.stringify(state.selectedStudent));
  },[state.students, state.selectedStudent])

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider; 
