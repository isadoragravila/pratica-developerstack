import { resourceLimits } from 'worker_threads';
import * as questionRepository from '../repositories/questionRepository';

export async function createQuestion(askedBy: string, question: string) {
    await questionRepository.insert({ askedBy, question });

    return "Question registered"
}

export async function getQuestions() {
    const questions = await questionRepository.getAll();

    return { questions };
}

export async function getQuestionById(id: number) {
    const question = await questionRepository.getById(id);

    if (!question) throw { type: 'not_found' };

    return question;
}