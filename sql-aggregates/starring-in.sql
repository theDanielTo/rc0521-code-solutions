SELECT "c"."name" AS "category",
        count(*) AS "lisaMonroeStarredIn"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "filmCategory" USING ("filmId")
  JOIN "categories" AS "c" USING ("categoryId")
  WHERE "firstName" = 'Lisa'
    AND "lastName" = 'Monroe'
  GROUP BY "c"."name";
