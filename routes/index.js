const {Router} = require('express');
const router = Router();

router.use(require(`./animals`));
router.use(require(`./games`));
router.use(require(`./cats`));
router.use(require(`./dogs`));

module.exports = router;
