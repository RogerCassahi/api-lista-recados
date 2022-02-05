import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
  notFound,
  ok,
  serverError,
} from "../../../../core/presentation/helpers/http-helper";
import { MessageRepository } from "../../infra/repository/message.repository";

export class UpdateMessageController implements Controller {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const message = await new MessageRepository().updateMessage(req.body);

      if (!message) return notFound(res);
      return ok(res, message);
    } catch (error: any) {
      return serverError(res, error);
    }
  }
}
