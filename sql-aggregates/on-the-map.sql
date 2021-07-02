SELECT "countries"."name" AS "country",
       count(*) AS "numberOfCities"
  FROM "cities"
  JOIN "countries" USING ("countryId")
  GROUP BY "countryId";
