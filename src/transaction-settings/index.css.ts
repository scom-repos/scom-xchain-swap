import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export default Styles.style({
  textAlign: 'center',
  $nest: {
    '.modal': {
      borderRadius: '1rem',
      padding: '1rem',
      width: 405
    },
    '.i-modal_header': {
      marginBottom: '1rem',
      paddingBottom: '0.5rem',
      borderBottom: `2px solid ${Theme.background.default}`,
      $nest: {
        '&> span': {
          paddingRight: '2rem',
          color: Theme.colors.primary.main,
          fontWeight: 700,
        }
      }
    },
    '.i-modal-close': {
      fill: `${Theme.colors.primary.main} !important`,
    },
  }
})