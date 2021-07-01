SELECT  "line1",
        "ci"."name" AS "city",
        "district",
        "co"."name" AS "country"
  FROM  "addresses"
  JOIN  "cities" AS "ci" USING ("cityId")
  JOIN  "countries" AS "co" USING ("countryId");
