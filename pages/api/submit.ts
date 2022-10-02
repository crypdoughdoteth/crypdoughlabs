import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data submitted in request's body.
  const { email, full_name, business, consulting, building, auditing, message } = JSON.parse(req.body)

  if (!email || !full_name || !business || !message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Error: Fields Missing' })
  }


try{
  const request = fetch('https://api.airtable.com/v0/appnKI7KJRXemn1x1/Table%201', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fields: { email, full_name, business, consulting, building, auditing, message } })
  });
}
catch (err){
  console.error(err);
}

  // Optional logging to see the responses
  // in the command line where next.js app is running.

  // Guard clause checks for first and last name,
  // and returns early if they are not found

  // Found the name.

}