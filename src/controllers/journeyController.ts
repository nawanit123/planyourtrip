import { Request, Response } from 'express';

export const getJourneyData = async (req: Request, res: Response) => {
  const { userDetails, journeyDetails } = req.body;
  const { name, address, contactNumber, email } = userDetails;

  console.log({
    name,
    address,
    contactNumber,
    email,
  });
  console.log(journeyDetails);
};
