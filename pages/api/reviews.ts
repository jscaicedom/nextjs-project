import {
  connectDatabase,
  insertDocument,
  getAllDocuments
} from '../../helpers/db-util';
import { NextApiRequest, NextApiResponse } from "next";

async function handler( req: NextApiRequest,
                        res: NextApiResponse ) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({message: 'Connecting to the database failed!'});
    return;
  }

  if (req.method === 'POST') {
    const {email, name, text} = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({message: 'Invalid input.'});
      client.close();
      return;
    }

    let newComment = {
      email,
      name,
      text
    };

    try {
      await insertDocument(client, 'comments', newComment);
      res.status(201).json({message: 'Added comment.', comment: newComment});
    } catch (error) {
      res.status(500).json({message: 'Inserting comment failed!'});
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', {_id: -1});
      res.status(200).json({comments: documents});
    } catch (error) {
      res.status(500).json({message: 'Getting comments failed.'});
    }
  }

  client.close();
}

export default handler;