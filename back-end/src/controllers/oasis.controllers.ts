import { Request, Response } from "express";
import { Oasis } from "../models/Oasis";

interface OasisSearchParams {
  desert?: number;
  water?: number;
}

export const oasis = async (req: Request, res: Response) => {
  const oasis = await Oasis.findOne({ where: { id: req.params.id } });
  res.send(oasis);
};

export const oases = async (req: Request, res: Response) => {
  const { desert, water } = req.query as OasisSearchParams;

  const whereConditions: { desertId?: number; water?: number } = {};

  if (desert) {
    whereConditions.desertId = desert;
  }

  if (water) {
    whereConditions.water = water;
  }

  const oases = await Oasis.findAll({
    where: whereConditions,
  });

  res.send(oases);
};

export const newOasis = async (req: Request, res: Response) => {
  try {
    const { name, water, desertId } = req.body;

    const oasis = await Oasis.create({
      name: name,
      water: water,
      desertId: desertId,
    });

    res.send(oasis);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
