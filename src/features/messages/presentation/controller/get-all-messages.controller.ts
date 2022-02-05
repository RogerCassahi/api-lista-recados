import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
  serverError,
  ok,
} from "../../../../core/presentation/helpers/http-helper";
import { MessageRepository } from "../../infra/repository/message.repository";
export class GetAllMessages implements Controller {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const { uid } = req.params;
      const messages = new MessageRepository();
      const findUserMessages = await messages.getAllMessages(uid);

      return ok(res, findUserMessages);
    } catch (error: any) {
      serverError(res, error);
    }
  }
}
