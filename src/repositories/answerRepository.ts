import { prisma } from "../config/database";
import { IAnswerData } from "../types/answerTypes";

export async function insert(answer: IAnswerData) {
    await prisma.answers.create({ data: answer });
}

export async function getQuestionById(id: number) {
    const question = await prisma.questions.findUnique({ where: { id }});
    return question;
}