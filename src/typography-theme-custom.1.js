//@flow
import gray from 'gray-percentage';
// import type { OptionsType } from 'Types';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const theme= {
        title:'guoliim',
        baseFontSize: '16px',
        baseLineHeight: 1.6,
        scaleRatio: 5/2,
        googleFonts: [
            {
                name: 'Merriweather',
                styles: [
                    '400',
                    '400i',
                    '700',
                    '700i',
                    '900',
                    '900i',
                ],
            },
            {
                name: 'Merriweather Sans',
                styles: [
                    '400',
                    '400i',
                    '700',
                    '700i',
                    '900',
                    '900i',
                ]
            }
        ],
        headerFontFamily: ['TrajanPro-Bold', 'Georgia', 'Source Han Serif Heavy', 'serif'],
        bodyFontFamily: ['Merriweather Sans', 'Source Han Sans Light', 'sans-serif'],
        bodyColor: 'hsla(0,0%,0%,0.9)',
        headerWeight: 700,
        bodyWeight: 200,
        boldWeight: 500,
        overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        blockquote: {
            ...scale(2/16),
        color: gray(41),
        fontStyle: 'italic',
        paddingLeft: rhythm(13/16),
        marginLeft: rhythm(-1/16),
        borderLeft: `${rhythm(3/16)} solid ${gray(36)}`,
    },
        'blockquote > :last-child': {
    marginBottom: 0,
},
'blockquote cite': {
...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
},
'blockquote cite:before': {
    content: '"— "',
},
ul: {
    listStyle: 'disc',
},
'ul,ol': {
    marginBottom: rhythm(1),
},
[MOBILE_MEDIA_QUERY]: {
    'ul,ol': {
        marginLeft: rhythm(1),
    },
    blockquote: {
        marginLeft: rhythm(-3/4),
            marginRight: 0,
            paddingLeft: rhythm(9/16),
    },
},
'h1': {
    marginTop: rhythm(2),
},
'h2,h3,h4,h5,h6': {
    marginTop: rhythm(1),
    marginBottom: rhythm(1),
    fontFamily: 'Merriweather, Georgia, Source Han Serif SemiBold, serif',
},
h4: {
    letterSpacing: 0,
        textTransform: 'uppercase',
},
a: {
    boxShadow: 'none',
        color: '#007acc',
        textDecoration: 'none',
},
'a:hover,a:active': {
    boxShadow: 'none',
},
'mark,ins': {
    background: '#007acc',
        color: 'white',
        padding: `${rhythm(1/16)} ${rhythm(1/8)}`,
        textDecoration: 'none',
},
}),
};

export default theme;
