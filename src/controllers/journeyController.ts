import { Request, Response } from 'express';

export const getJourneyData = async (req: Request, res: Response) => {
  const { name, address, contactNumber, email } = req.body;

  console.log({
    name,
    address,
    contactNumber,
    email,
  });
};
