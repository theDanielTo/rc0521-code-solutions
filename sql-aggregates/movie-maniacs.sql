SELECT  "firstName", "lastName",
        sum(*) AS "totalAmountPaid"
  FROM  "customers"
  JOIN  "payments" USING ("customerId")
  GROUP BY "customerId"
  ORDER BY "totalAmountPaid" desc;
