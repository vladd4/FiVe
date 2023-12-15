import { db_pool } from "../database/database.js";
import { getUser } from "../database/query_db.js";

export async function getUserById(id) {
  const [rows] = await db_pool.query(`${getUser} '${id}';`);
  return rows;
}

export async function updateUserById(updateData, id) {
  const updateQuery = {
    text: `
      UPDATE clients
      SET 
      email = COALESCE(?, email),
      name = COALESCE(?, name),
      surname = COALESCE(?, surname),
      phone = COALESCE(?, phone),
      telegram = COALESCE(?, telegram)
      WHERE id = ${id};
    `,
    values: [
      updateData.email,
      updateData.name,
      updateData.surname,
      updateData.phone,
      updateData.telegram,
    ],
  };
  const [rows] = await db_pool.query(updateQuery.text, updateQuery.values);
  return rows;
}
