import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  const result = await questionService.createQuestion(askedBy, question);
  return res.status(201).send(result);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const { answeredBy, answer } = req.body;

  const result = await answerService.createAnswer(Number(id), answeredBy, answer);
  return res.status(201).send(result);
}

export async function get(req: Request, res: Response) {
  const result = await questionService.getQuestions();
  
  return res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await questionService.getQuestionById(Number(id));
  
  return res.status(200).send(result);
}
