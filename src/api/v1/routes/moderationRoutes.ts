import { Router } from "express";
import { 
    moderatePost, 
    flagUser, 
    getPostById, 
    getUserProfile, 
    getFlaggedContentStats, 
    flagPost 
} from "../controllers/moderationController";

const router: Router = Router();

router.get("/post/:id", getPostById);
router.post("/post/:id/moderate", moderatePost);
router.get("/user/:id/profile", getUserProfile);
router.post("/user/:id/flag", flagUser);
router.post("/post/:id/flag", flagPost);
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;
