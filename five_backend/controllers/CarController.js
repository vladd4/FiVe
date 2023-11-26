import { db_pool } from "../database/database.js";
import { getAllCarsQuery, getFilterCarsQuery } from "../database/query_db.js";

export async function getCars() {
  const [rows] = await db_pool.query(getAllCarsQuery);
  return rows;
}

export async function filterCars(filters) {
  const whereClause = Object.keys(filters)
    .map((filter) => {
      if (
        (filter === "year" || filter === "power" || filter === "price") &&
        filters[filter].from &&
        filters[filter].to
      ) {
        return `c.${filter} BETWEEN ${filters[filter].from} AND ${filters[filter].to}`;
      } else {
        return `${filter} = '${filters[filter]}'`;
      }
    })
    .join(" AND ");
  const filterCarsQuery = `
       ${getFilterCarsQuery}
        ${whereClause ? `WHERE ${whereClause}` : ""};
      `;
  const [rows] = await db_pool.query(filterCarsQuery);
  return rows;
}
