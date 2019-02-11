var smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'sass',
    columns: 12, 
    offset: '60px', 
    mobileFirst: false, 
    container: {
        maxWidth: '1520px', 
        fields: '30px' 
    },
    breakPoints: {
        lg: {
            width: '1680px', 
            fields: '30px'
        },
        lgx: {
            width: '1560px', 
            fields: '30px'
        },
        desktop: {
            width: '1440px',
            fields: '30px'
        },
        md: {
            width: '1366px',
            fields: '30px'

        },
        mdx: {
            width: '1280px',
            fields: '30px'

        },
        tablet: {
            width: '992px',
            fields: '30px'

        },
        tabletx: {
            width: '768px',
            fields: '30px'

        },
        phoneh: {
            width: '576px',
            fields: '30px'
        },
        phone: {
            width: '480px',
            fields: '30px'
        },
    }
};

smartgrid('./src/static/sass', settings);