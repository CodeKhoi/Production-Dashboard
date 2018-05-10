# Production-Dashboard

SAME DAY CARD

There’s two types of print only orders (orders placed prior to 12pm that are required to ship within the same day and orders that have 1+ day(s) (PENDING) to turnaround). This card displays the total amount of orders due that same day and is based on the target date (All orders placed after 12pm the day before and up to 12pm the same day should provide this total). This total accumulates up to 12pm that same day and can be reset anytime after 5pm (That’s when the carriers arrive). This card does not include PENDING orders.

SAME DAY TABLE

This table displays all of the same day products categorized by product code. It also displays the amount of orders within the same day for each product category. Just like the card, this total accumulates up to 12pm that same day and can be reset anytime after 5pm. 
This table does not include PENDING orders.

PENDING CARD

Pending orders are orders that have 1+ day(s) to turnaround. This card displays the total amount of pending orders up to 2 days depending on the product code (Business cards and accordion brochures have a 1 day turnaround). Orders that are not updated to delivered after the given turnaround time will dynamically move from the pending total/table to the past due card total/table.

1 day turnaround: Business cards and Accordion brochures
2 day turnaround: Calendars, Envelopes, Magnets, Notepads, Posters, Saddle stitched books, 
Social signs, Sticky notes, Signs.

Product codes:
1 day turnaround: ACF6, BC_CF, BC_CG, BC_CL, BC_FL, BC_MG, BC_16.
2 day turnaround: ENV6, ENV9, ENV10, ENV11, ENV12, NP35, NP55, NP85, PCMM, PF1824, SIGNR6,  SSB, SN43, SN46, SS2840, TC518, TF94, WLCL.
*Products that have not been ordered this year have been excluded.

PENDING TABLE

This table displays all of the pending products categorized by product code. It also displays the amount of orders for each product category. Like the card, these orders dynamically  move to the past due table if the order is not updated to delivered within the given turnaround time.

ITEMIZED PENDING ORDERS TABLE

The pending card div has an onclick event listener that runs a function to hide all tables except the requested table. This table itemizes pending orders in more detail onto a table. The table displays the pending orders submitted date, order number, customer name, product code and quantity. Like the card, these orders dynamically move to the past due table if the order is not updated to delivered within the given turnaround time.

PAST DUE ORDERS TABLE

This div also has an onclick event listener that runs a function to hide all tables except the requested table. This table itemizes past due orders in more detail onto a table. The table displays the past due orders submitted date, order number, customer name, product code and quantity. These orders stay here until the order is updated to delivered.

COMPLETED

Excluding pending and past due orders, this card keeps track of all the completed same day orders. The total dynamically adds as each same day order is changed to delivered. 

END OF PRINT ONLY REQUIREMENTS

TODAYS ORDERS CARD

This card displays all of the direct mail orders which can be identified with the delivery option of FC or ST. An order placed before 2pm is given a target date of two days from the date it was placed. Orders placed after 2pm receive three days (Todays orders would need to be identified by orders targeted two days from todays date). 

QA QUEUE CARD

This card displays all of TODAYS and past due direct mail orders that have the status of ‘SUBMITTED’ assigned to ‘UNASSIGNED’. This dynamically updates as orders come in from the store or the orders assigned to has changed.

BATCHING CARD

This card displays the total quantity of TODAYS direct mail orders that have the status of ‘SUBMITTED, ‘DELIVERED’ and assigned to ‘READYTOPRINT’. Batched orders keep the status of submitted and dynamically get a status of delivered when the batch the order is in gets archived. Batches get created and archived periodically throughout the day, so to get an accurate total, the logic would need to account for both submitted and delivered orders. 
This will need to reset (12am?) as all orders will end up as delivered.

SIDE JOBS CARD

There’s a current issue in production where what is referred to as side jobs are falling through the cracks and/or not fulfilled by the target date. Since orders are set to delivered prior to printing two days before the target date, there wasn’t a non complicated way to resolve this issue on a dashboard without changing the current process. Instead of changing the process, we decided it would be sufficient if we created a side jobs card and table. This card will display the amount of orders appended to the table. Side jobs can be identified by the product code of FLT, NL11, NL17, PCMM, TF165. The table will display the orders date submitted, order #, customer name, product code, order quantity and a button.  Once the order has shipped, the user can remove the order from the table by selecting the button. The goal here is to give the user the ability to track all 
current unfulfilled side jobs and remove them from the table when an order has shipped. An order would stay in the table regardless of target date until the user marks it as shipped. 

END OF DIRECT MAIL REQUIREMENTS

TODAYS ORDERS CARD

This card displays all of the follow-up orders due that day. Todays orders, 
completed and outstanding needs to reset everyday.

COMPLETED ORDERS CARD

This card is updated each time an order from that day is scanned. 

OUTSTANDING ORDERS CARD AND TABLE

This card keeps track of all the orders that never got scanned. The table 
associated with this card displays when the follow-up tab or card is selected. 
The table provides the orders state, OID, RID, customer and leads name.

PAST DUE ORDERS CARD AND TABLE

This card keeps track of all the orders that never got scanned and is past the 
target date. When the card is clicked, the corresponding table will appear 
displaying the orders state, OID, RID, customer and leads name.
