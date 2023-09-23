const productSchema = require("../model/productSchema");

module.exports = {
  CreateProduct: async (req, res) => {
    try {
      let addProduct = new productSchema(req.body);
      let isproductExist = await productSchema.findOne({
        productName: req.body.productName,
      });
      if (isproductExist) {
        res.status(401).json({
          success: false,
          messager: "product is present in list please enter another product",
        });
      } else {
        addProduct.save();
        res.status(201).json({
          success: true,
          messager: "product is successfully added into list",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        messager: error,
      });
    }
  },
  productList: async (req, res) => {
    try {
      let getlist = await productSchema.find();
      res.status(201).json({
        success: true,
        messager: "product  list  are shown below",
        getdata: getlist,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        messager: error,
      });
    }
  },

  updateProduct: async (req, res) => {
    let id = req.params.id;
    try {
      let update = await productSchema.findByIdAndUpdate(id, req.body);
      res.status(201).json({
        success: true,
        messager: "product  is successfully updated",
        getdata: update,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        messager: error,
      });
    }
  },

  productPagination: async (req, res) => {
    try {
      const { page, limit } = req.query;
      const pageNumber = parseInt(page, 10);
      const limitNumber = parseInt(limit, 10);

      if (
        isNaN(pageNumber) ||
        isNaN(limitNumber) ||
        pageNumber < 1 ||
        limitNumber < 1
      ) {
        return res.status(400).json({
          error: "Invalid pagination parameters.",
        });
      }

      const skip = (pageNumber - 1) * limitNumber;

      const query = await productSchema.find({}).skip(skip).limit(limitNumber);

      const totalRecords = await productSchema.countDocuments();

      res.json({
        success: true,
        records: query,
        totalRecords,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
