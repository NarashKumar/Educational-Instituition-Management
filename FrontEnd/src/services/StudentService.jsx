import axios from "axios";
const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student/";
const FEES_API_BASE_URL = "http://localhost:8080/api/v1/fees/";

class StudentService{
    addStudent(student){
        const addStudentURL = `${STUDENT_API_BASE_URL}addstudent`
        return axios.post(addStudentURL, student);
    }

    getStudents(){
        const getStudentURL = `${STUDENT_API_BASE_URL}allstudents`
        return axios.get(getStudentURL);
    }

    updateStudent(id, data){
        const updateStudentURL = `${STUDENT_API_BASE_URL}updatestudent/${id}`
        return axios.put(updateStudentURL, data);
    }

    getStudentById(id){
        const getStudentByIdURL = `${STUDENT_API_BASE_URL}student/${id}`
        return axios.get(getStudentByIdURL);
    }

    deleteStudent(id){
        const deleteStudentURL = `${STUDENT_API_BASE_URL}deletestudent/${id}`
        return axios.delete(deleteStudentURL);
    }

    getFeeDetails(id){
        const getFeeDetailsURL = `${FEES_API_BASE_URL}student/${id}/getfees`
        return axios.get(getFeeDetailsURL);
    }

    updateFeeDetails(id, data){
        const updateFeeDetailsURL = `${FEES_API_BASE_URL}student/${id}/updatefees`
        return axios.put(updateFeeDetailsURL, data);
    }

    addFeeDetails(id, data){
        const addFeeDetailsURL = `${FEES_API_BASE_URL}student/${id}/addfees`
        return axios.post(addFeeDetailsURL, data);
    }
}

export default new StudentService();