import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import {
  serverError,
  ok,
} from "../../../../core/presentation/helpers/http-helper";
import { MessageRepository } from "../../infra/repository/message.repository";

export class CreateMessageController implements Controller {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;
      const message = await new MessageRepository().create(data);
      return ok(res, message);
    } catch (error: any) {
      return serverError(res, error);
    }
  }
}
