const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media')

router.post('/',mediaHandler.create);
router.get('/',mediaHandler.getAll);
router.delete('/:id',mediaHandler.destory);

module.exports = router;
