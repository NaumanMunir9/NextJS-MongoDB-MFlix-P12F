// lib
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const data = await db
    .collection("movies")
    .find({ year: { $gte: 2000 }, "imdb.rating": { $gte: 8 } })
    .limit(20)
    .toArray();

  res.json(data);
}
