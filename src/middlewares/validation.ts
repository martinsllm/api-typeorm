import joi from 'joi';

const provider = joi.object({
    name: joi.string().min(3).required()
});

export = { provider };