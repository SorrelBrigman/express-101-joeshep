const {Router} = require('express');
const router = Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));

router.use(require(`./animals`));
router.use(require(`./games`));
router.use(require(`./cats`));
router.use(require(`./dogs`));
router.use(require(`./home`));

module.exports = router;
