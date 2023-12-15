import { db_pool } from "../database/database.js";
import { deleteSavedQuery, getSavedForUser } from "../database/query_db.js";

export async function getSavedByUserId(userID) {
  const [rows] = await db_pool.query(`${getSavedForUser} '${userID}';`);
  return rows;
}
export async function addSaved(params) {
  const [countRows] = await db_pool.query(
    "SELECT COUNT(*) as count FROM saved_searches"
  );
  const count = countRows[0].count;

  const [rows] = await db_pool.query(
    "INSERT INTO saved_searches VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      count + 1,
      params.client_id || null,
      params.brand_id || null,
      params.model_id || null,
      params.max_price || null,
      params.min_price || null,
      null,
      null,
      params.min_year || null,
      params.max_year || null,
      params.state_id || null,
      params.gearbox_id || null,
      params.transmission_id || null,
      params.fuel_id || null,
      params.max_power || null,
      params.min_power || null,
      null,
      null,
      params.telegram || 0,
    ]
  );

  return rows;
}

export async function deleteSavedbyId(savedID) {
  const [rows] = await db_pool.query(`${deleteSavedQuery} '${savedID}';`);
  return rows;
}
