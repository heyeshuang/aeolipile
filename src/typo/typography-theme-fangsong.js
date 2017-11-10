// @flow
import type {
  OptionsType
} from 'Types'
import gray from 'gray-percentage'
import {
  TABLET_MEDIA_QUERY
} from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'
import CodePlugin from 'typography-plugin-code'

const theme: OptionsType = {
  title: 'Moraga',
  baseFontSize: '18px',
  baseLineHeight: 1.56,
  googleFonts: [{
    name: ['Neuton', 'Open Sans'],
    styles: ['200', '400'],
  }, ],
  scaleRatio: 2.5,
  headerFontFamily: ['Neuton', 'Georgia', "Times New Roman", "FangSong", "仿宋", 'STFangSong', "华文仿宋", 'serif'],
  bodyFontFamily: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'Noto Sans CJK SC', 'Noto Sans CJK', 'Source Han Sans SC', 'Source Han Sans', 'source-han-sans-simplified-c', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.85)',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerWeight: '200',
  bodyWeight: 400,
  boldWeight: 700,
  plugins: [new CodePlugin()],
  overrideStyles: ({
    scale,
    rhythm
  }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '16px',
      baseLineHeight: '24.88px',
    })

    const styles = {
      'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
        fontWeight: options.headerWeight,
      },
      'h3, h4, h5, h6': {},
      a: {
        fontWeight: 400,
        color: '#419eda',
        textDecoration: 'none',
      },
      'a:hover': {
        color: '#2a6496',
        textDecoration: 'underline',
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(40),
        paddingLeft: rhythm(3 / 4),
        marginLeft: 0,
        borderLeft: `${rhythm(1 / 4)} solid ${gray(87)}`,
      },
      pre: {
        background: gray(96),
      },
      'tt,code': {
        backgroundColor: gray(96),
      },

      // Mobile styles.
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(1 / 2),
        },
        table: {
          ...scale(-1 / 5),
        },
      }
    }

    return styles
  },
}

export default theme
