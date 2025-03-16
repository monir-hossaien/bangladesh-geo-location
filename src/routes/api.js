import express from "express";
import * as locationController from "../controller/locationController.js";
const router = express.Router();


//location api
router.post("/create-division", locationController.createDivision);
router.get("/division-list", locationController.divisionList);

router.post("/create-district/:divisionID", locationController.createDistrict);
router.get("/district-list/:divisionID", locationController.districtList);

router.post("/create-post/:districtID", locationController.createPost);
router.get("/post-list/:districtID", locationController.postList);

router.post("/create-union/:id", locationController.createUnion);














export default router;