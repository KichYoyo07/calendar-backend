const express = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            onkeyup: false,
            errors: errors.mapped(),
        });
    }

    next();
};

module.exports = {
    validarCampos,
};
