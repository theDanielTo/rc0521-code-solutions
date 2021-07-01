SELECT  "amount",
        "firstName",
        "lastName"
  FROM  "payments"
  JOIN  "customers"
  USING ("customerId")
  ORDER BY "amount" DESC
  LIMIT 10;
