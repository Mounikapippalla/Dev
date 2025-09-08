function findSoldItems(orders) {
    return orders
    
        .filter(order => order.status === "delivered" || order.status === "shipped")

        .flatMap(order => order.items)

       
        .reduce((acc, item) => {
            const existing = acc.find(p => p.productCode === item.productCode);
            if (existing) {
                existing.totalSold += item.quantity;
            } else {
                acc.push({
                    productCode: item.productCode,
                    name: item.name,
                    totalSold: item.quantity
                });
            }
            return acc;
        }, []);
}

console.log(findSoldItems(orders));
