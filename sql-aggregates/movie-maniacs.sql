SELECT  "firstName", "lastName",
        sum("p"."amount") AS "totalAmountPaid"
  FROM  "customers"
  JOIN  "payments" AS "p" USING ("customerId")
  GROUP BY "customerId"
  ORDER BY "totalAmountPaid" desc;
