const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(7000),
    MONGODB_URL: Joi.string().trim().description("MONGODB URL")
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log("config error", error);
};

module.exports = {
    PORT: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }
};