import * as answerRepository from '../repositories/answerRepository';

export async function createAnswer(questionId: number, answeredBy: string, answer: string) {
    const question = await answerRepository.getQuestionById(questionId);

    if (!question) throw { type: 'not_found'};
    
    await answerRepository.insert({ answeredBy, answer, questionId });

    return "Answer registered"
}