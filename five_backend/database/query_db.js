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
