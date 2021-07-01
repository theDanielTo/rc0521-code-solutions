SELECT  "releaseYear",
        "ca"."name" AS "category"
  FROM  "films"
  JOIN  "filmCategory" USING ("filmId")
  JOIN  "categories" AS "ca" USING ("categoryId")
  WHERE "title" = 'Boogie Amelie';
