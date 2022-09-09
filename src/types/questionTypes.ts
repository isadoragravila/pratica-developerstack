import { questions } from "@prisma/client";

export type IQuestionData = Omit<questions, 'id'>;