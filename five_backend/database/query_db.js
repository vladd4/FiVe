export const getAllCarsQuery = `SELECT
        c.id AS car_id,
        b.brand AS brand,
        m.model AS model,
        c.year,
        c.price,
        c.mileage,
        c.photo_url,
        g.gearbox AS gearbox,
        t.transmission AS transmission,
        f.fuel AS fuel,
        c.power,
        c.volume,
        site.name AS site_name,
        site.url AS site_url,
        site.photo_url AS site_photo_url,
        state.state AS state
        FROM
        cars c
        JOIN brands b ON c.brand_id = b.id
        JOIN models m ON c.model_id = m.id
        JOIN gearboxes g ON c.gearbox_id = g.id
        JOIN transmission t ON c.transmission_id = t.id
        JOIN fuels f ON c.fuel_id = f.id
        JOIN sites site ON c.site_id = site.id
        JOIN state state ON c.state_id = state.id;`;

export const getFilterCarsQuery = `SELECT
        c.id AS car_id,
        b.brand AS brand,
        m.model AS model,
        c.year,
        c.price,
        c.mileage,
        c.photo_url,
        g.gearbox AS gearbox,
        t.transmission AS transmission,
        f.fuel AS fuel,
        c.power,
        c.volume,
        site.name AS site_name,
        site.url AS site_url,
        site.photo_url AS site_photo_url,
        state.state AS state
        FROM
        cars c
        JOIN brands b ON c.brand_id = b.id
        JOIN models m ON c.model_id = m.id
        JOIN gearboxes g ON c.gearbox_id = g.id
        JOIN transmission t ON c.transmission_id = t.id
        JOIN fuels f ON c.fuel_id = f.id
        JOIN sites site ON c.site_id = site.id
        JOIN state state ON c.state_id = state.id`;

export const getAllBrandsQuery = `SELECT * FROM brands;`;
export const getAllModelsQuery = `SELECT 
        m.id AS id, 
        m.model AS model, 
        b.brand AS brand 
        FROM models m
        JOIN brands b 
        ON m.brand_id = b.id
        WHERE b.brand = `;
export const getAllFuelQuery = `SELECT * FROM fuels;`;
export const getAllGearQuery = `SELECT * FROM gearboxes;`;
export const getAllTransmissionQuery = `SELECT * FROM transmission;`;
export const getAllStateQuery = `SELECT * FROM state;`;

export const getUser = `SELECT * FROM clients WHERE id = `;

export const getSavedForUser = `SELECT s.id, s.client_id, brands.brand, models.model, s.max_price, s.min_price, s.min_year, s.max_year, g.gearbox, t.transmission, f.fuel, state.state, s.telegram FROM saved_searches s
LEFT JOIN brands ON brands.id = s.brand_id
LEFT JOIN models ON models.id = s.model_id
LEFT JOIN gearboxes g ON s.gearbox_id = g.id
        LEFT JOIN transmission t ON s.transmission_id = t.id
        LEFT JOIN fuels f ON s.fuel_id = f.id
        LEFT JOIN state state ON s.state_id = state.id
        WHERE s.client_id = `;

export const deleteSavedQuery = `DELETE FROM saved_searches WHERE id = `;
