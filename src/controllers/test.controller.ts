import { Request, Response } from 'express';
import { Promise } from 'mongoose';
import { IResult } from '../interfaces/test.interface';
import * as TestServices from '../services/test.services';


export default class TestController {
    public index(req: Request, res: Response, next: Function): void {
        let result: IResult = {
            x: TestServices.FindingForX(),
            y: TestServices.FindingForY(),
            anotherX: TestServices.FindingForAnotherX()
        };
        res.send(result)
    }
}

export const testController = new TestController();