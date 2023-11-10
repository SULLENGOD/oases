import { Request, Response } from "express";
import { Desert } from "../models/Desert";

export const newDesert = async(req: Request, res: Response) => {

    const { name } = req.body;

    const newDesert = await Desert.create({
        name: name
    });

    res.send(newDesert);
};

export const desert = async(req: Request, res: Response) => {
    const id = req.params.id;

    const desert = await Desert.findOne({where: {id: id}});

    res.send(desert);
};

export const deserts = async (req: Request, res: Response) => {
    const deserts = await Desert.findAll();
    res.send(deserts);
}