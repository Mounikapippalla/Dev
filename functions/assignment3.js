function calculateShopEarnings(orders) {
    const totalEarnings = orders.reduce((sum, order) => {
        const itemsTotal = order.items.reduce((itemSum, item) => {
            return itemSum + (item.price * item.quantity);
        }, 0);
        return sum + itemsTotal + order.deliveryCharges;
    }, 0);

   
    const earningsByCategory = orders.reduce((categoryTotals, order) => {
        order.items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            if (!categoryTotals[item.category]) {
                categoryTotals[item.category] = 0;
            }
            categoryTotals[item.category] += itemTotal;
        });
        return categoryTotals;
    }, {});

    
    const averageOrderValue = totalEarnings / orders.length;

    const customerSpendings = orders.reduce((custTotals, order) => {
        const itemsTotal = order.items.reduce((itemSum, item) => {
            return itemSum + (item.price * item.quantity);
        }, 0);
        const orderTotal = itemsTotal + order.deliveryCharges;

        if (!custTotals[order.customerName]) {
            custTotals[order.customerName] = { totalSpent: 0, numberOfOrders: 0 };
        }

        custTotals[order.customerName].totalSpent += orderTotal;
        custTotals[order.customerName].numberOfOrders += 1;

        return custTotals;
    }, {});
    let bestCustomer = null;
    for (const [name, data] of Object.entries(customerSpendings)) {
        if (!bestCustomer || data.totalSpent > bestCustomer.totalSpent) {
            bestCustomer = { customerName: name, ...data };
        }
    }


    return {
        totalEarnings,
        earningsByCategory,
        averageOrderValue: Number(averageOrderValue.toFixed(2)),
        bestCustomer
    };
}
