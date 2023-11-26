import { db_pool } from "../database/database.js";
import {
  getAllBrandsQuery,
  getAllFuelQuery,
  getAllGearQuery,
  getAllModelsQuery,
  getAllStateQuery,
  getAllTransmissionQuery,
} from "../database/query_db.js";

export async function getBrands() {
  const [rows] = await db_pool.query(getAllBrandsQuery);
  return rows;
}
export async function getModels(brand) {
  const [rows] = await db_pool.query(`${getAllModelsQuery} '${brand}';`);
  return rows;
}
export async function getFuel() {
  const [rows] = await db_pool.query(getAllFuelQuery);
  return rows;
}
export async function getGear() {
  const [rows] = await db_pool.query(getAllGearQuery);
  return rows;
}
export async function getTransmission() {
  const [rows] = await db_pool.query(getAllTransmissionQuery);
  return rows;
}
export async function getState() {
  const [rows] = await db_pool.query(getAllStateQuery);
  return rows;
}
