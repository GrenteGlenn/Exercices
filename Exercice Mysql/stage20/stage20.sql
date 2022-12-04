SELECT type_id, COUNT(identifier) AS nb FROM types, pokemon_types GROUP BY type_id;
