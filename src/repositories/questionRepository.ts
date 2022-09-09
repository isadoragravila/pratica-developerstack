import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

export async function insert(question: IQuestionData) {
    await prisma.questions.create({ data: question });
}

export async function getAll() {
    const questions = await prisma.questions.findMany();
    return questions;
}

export async function getById(id: number) {
    const question = await prisma.questions.findUnique({ 
        where: { id },
        include: { answers: true }
    });
    return question;
}