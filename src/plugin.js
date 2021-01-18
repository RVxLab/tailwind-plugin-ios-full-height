const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
    const supportsTouchRule = '@supports (-webkit-touch-callout: none)';
    const webkitFillAvailable = '-webkit-fill-available';

    const utilities = {
        '.min-h-screen-ios': {
            [supportsTouchRule]: {
                minHeight: webkitFillAvailable,
            },
        },
        '.h-screen-ios': {
            [supportsTouchRule]: {
                height: webkitFillAvailable,
            },
        },
    };

    addUtilities(utilities, [ 'responsive' ]);
});
