// productController.js
exports.createProduct = (req, res, next) => {
    res.json({
        message: 'Create Product Success',
        data: {
            id: 1,
            name: 'Teh botol',
            price: 5000
        }
    });
    next();
};

exports.getAllProducts = (req, res, next) => {
    res.json({
        message: "Get all products success",
        data: [
            {
                id: 1,
                name: 'Teh Botol',
                price: 5000
            }
        ]
    });
    next();
};
