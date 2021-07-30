import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Studifix API',
            version: '1.0.0',
            description: 'All Routes according Studifix Backend'
        },
        servers: [
            {
                url: 'http://localhost/api'
            }
        ]
    },
    apis: ['./swagger.yml']
};

export const specs = swaggerJsDoc(options);
