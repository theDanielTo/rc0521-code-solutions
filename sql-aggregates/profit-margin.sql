WITH "profits" AS (
  SELECT "title",
          sum("amount") AS "totalPayments"
    FROM "payments"
    JOIN "rentals" USING ("rentalId")
    JOIN "inventory" USING ("inventoryId")
    JOIN "films" AS "f" USING ("filmId")
    ORDER BY "totalPayments" desc
    LIMIT 5
)
SELECT "title", "description"
  FROM "films"
  JOIN "inventory" USING ("filmId")
  JOIN "rentals" USING ("inventoryId")
  JOIN "payments" USING ("rentalId")
  JOIN "profits" USING ("title")
  ORDER BY "profits" desc
  LIMIT 5;
