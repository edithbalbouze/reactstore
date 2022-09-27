module.exports = {
    root: true,      
    env: {
        browser: true,      
        amd: true,          // para el manejo de diferentes protocolos internos de como trabaja javascript por dentro.
        node: true,
        es6: true,
    },
    extends: [                                // me va a permitir utilizar diferentes plujin o recomendaciones internas para poder trabajar con nuestro recurso
        'eslint:recommended',                 // recomendacion por defecto que nos puede traer eslint
        'plugin:jsx-a11y/recommended',        // accesibilidad
        'plugin:prettier/recommended',        // Me permite trabajar con todo lo que es prettier
        'next',                               // configuracion de next
        'next/core-web-vitals'                // configuracion original que estaba dentro del proyecto
    ],
    rules: {
        'semi':['error', 'always'],           // para usar el punto y coma
        'prettier/prettier': 0,
    }
};