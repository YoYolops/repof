import Api from './api';

export async function getExamsDataByDiscipline() {
    const response = await Api.get('/exams/discipline');
    return response.data;
}

export async function getExamsDataByTeacher() {
    const response = await Api.get('/exams/teacher');
    return response.data;
}

export async function registerExam(body) {
    const response = await Api.post('/exams', body);
    return response.data;
}