import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export const xchainSwapStyle = Styles.style({
  $nest: {
    'i-icon': {
      display: 'inline-block',
      cursor: 'default'
    },
    '::-webkit-scrollbar': {
      width: '3px',
    },
    '::-webkit-scrollbar-thumb': {
      background: Theme.colors.primary.main,
      borderRadius: '5px',
    },
    '*': {
      boxSizing: 'border-box'
    },
    '.ml-auto': {
      marginLeft: 'auto'
    },
    'i-label.text--grey *': {
      color: Theme.text.primary,
      opacity: 0.7
    },
    'i-label.text--limit *': {
      color: `${Theme.colors.secondary.main} !important`
    },
    '.btn-os': {
      background: 'var(--primary-button-background)',
      transition: 'background .3s ease'
    },
    '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
      background: 'var(--primary-button-hover-background)',
      boxShadow: 'none',
      opacity: .9
    },
    '.btn-os:not(.disabled):not(.is-spinning):focus': {
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
      outline: 0
    },
    '.btn-os.disabled, .btn-os.is-spinning': {
      background: 'var(--primary-button-disabled-background)',
      opacity: 0.4
    },
    '.btn-max:not(.disabled):hover': {
      transition: 'all .2s ease-out',
      background: 'var(--max-button-hover-background)'
    },
    '.btn-max': {
      position: 'relative',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      padding: '0 0.5rem',
      marginLeft: '0.5rem',
      bottom: '1.5px',
      background: 'var(--max-button-background)',
      color: Theme.text.primary
    },
    '.bg-box': {
      margin: '0.5rem 0',
      border: `1px solid ${Theme.divider}`,
      borderRadius: '0.75rem'
    },
    '.bg-box-radius': {
      borderRadius: '0.75rem'
    },
    '.xchain-rounded-icon': {
      display: 'inline-block',
      padding: '3px',
      background: Theme.background.modal,
      border: '2px solid transparent',
      borderRadius: '50%',
      cursor: 'pointer'
    },
    '.swap-btn-container': {
      marginBottom: '1.5rem',
      $nest: {
        '.btn-swap': {
          position: 'relative',
          width: '100%',
          borderRadius: '0.65rem',
          fontSize: '1.125rem',
          padding: '1.25rem 0.75rem',
          opacity: 1,
          color: Theme.text.primary
        }
      }
    },
    '.cursor-input--default': {
      cursor: 'default',
      $nest: {
        'input': {
          cursor: 'default'
        }
      }
    },
    '.hidden': {
      display: 'none !important'
    },
    '.cur-pointer': {
      cursor: 'pointer !important'
    },
    '#gridCommonToken': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(6rem, 1fr))'
    },
    '.custom-modal': {
      $nest: {
        '.modal': {
          // background: Theme.background.main,
          width: 490,
          maxWidth: '100%',
          padding: '0.75rem 1rem',
          borderRadius: '1rem',
          color: Theme.text.primary
        },
        '.i-modal_header': {
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${Theme.divider}`,
          color: Theme.colors.primary.main,
          fontSize: '1.25rem',
          fontWeight: 700,
        },
        '.i-modal_header > i-icon': {
          fill: `${Theme.colors.primary.main} !important`,
          cursor: 'pointer'
        },
        '.i-modal_header ~ i-icon': {
          display: 'inline-block',
          margin: '0.75rem 0',
          background: Theme.background.modal,
          border: '2px solid transparent',
          borderRadius: '50%',
          padding: '0.25rem'
        },
      }
    },
    '#swapModal': {
      $nest: {
        '.icon-swap': {
          margin: 0
        },
        'i-image:not(.xchain-rounded-icon)': {
          display: 'inline-block',
          marginRight: '0.5rem'
        },
        '#tokenReceiveValue': {
          margin: '0 5px'
        },
        '#payOrReceiveValue': {
          marginInline: '0.25rem',
        },
        '.text-primary *': {
          color: Theme.colors.primary.main,
        },
        '.price-info': {
          padding: '1rem'
        },
        '.arrow-down': {
          display: 'inline-block',
          margin: '0.75rem 0',
          background: Theme.background.modal,
          border: '2px solid transparent',
          borderRadius: '50%',
          padding: '0.25rem'
        },
        '.arrow-down--chain': {
          margin: '0.75rem 6rem !important',
        },
        '.token-value': {
          marginLeft: 'auto',
        },
        '.token-value > *, #swapModal .token-name > *': {
          fontSize: '1.1rem'
        },
        '.row-chain': {
          display: 'flex',
          alignItems: 'center',
        },
      }
    },
    '#dappResult': {
      $nest: {
        '.modal': {
          background: Theme.background.modal,
          width: '440px',
          maxWidth: '100%',
          padding: '0.5rem',
          borderRadius: '12px'
        },
        'i-label:nth-child(2)': {
          marginBottom: '0.25rem'
        },
        '.waiting-txt > *': {
          fontSize: '22px'
        },
        'i-loading': {
          marginTop: '3rem',
          marginBottom: '0.5rem'
        },
        'i-loading .i-loading-spinner_icon': {
          width: '50px',
          height: '48px'
        }
      }
    },
    '.custom-md--view': {
      $nest: {
        'i-label > *': {
          fontSize: '.875rem',
          wordBreak: 'normal'
        },
        '.i-modal_content': {
          padding: '0 1rem 1rem',
        },
        'i-button': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '150px',
          height: '50px !important',
          fontWeight: 600,
          borderRadius: 5,
          margin: '0.5rem',
        },
        '.btn-cancel': {
          background: '#eaecef',
          color: `${Theme.background.default} !important`,
          $nest: {
            '&:hover': {
              background: '#eaecef !important',
              color: `${Theme.background.default} !important`
            }
          }
        },
        '.btn-submit': {
          textAlign: 'center',
        },
        '.btn-submit > *': {
          color: `${Theme.text.primary} !important`,
        },
      }
    },
    '#modalFees': {
      $nest: {
        '.i-modal_header': {
          marginBottom: '0.5rem !important',
        },
        '.i-modal_content': {
          $nest: {
            'i-label *': {
              fontSize: '0.875rem',
            },
            'i-button': {
              width: '150px',
              paddingBlock: '0.25rem',
            },
          },
        },
      },
    },
    '.xchain-action-setting': {
      display: 'flex',
      margin: 'auto 0 0 auto',
      alignItems: 'center',
      $nest: {
        '> i-icon': {
          marginLeft: '0.5rem'
        },
        '> i-label': {
          opacity: 0.75
        }
      }
    }
  }
})

export const xchainSwapContainerStyle = Styles.style({
  width: 500,
  maxWidth: '100%',
  padding: '1rem',
  margin: '1.5rem auto 2rem',
  $nest: {
    'i-button': {
      fontWeight: 600,
      verticalAlign: 'middle',
      lineHeight: 1.5,
    },
    'i-button.disabled': {
      opacity: 0.4,
    },
    'i-button:not(.disabled):hover': {
      transition: 'all .2s ease-out',
    },
    'i-button:focus': {
      outline: 0,
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
    },
    '.input--token-box': {
      padding: '0.75rem 1rem',
      $nest: {
        '#btnToken': {
          height: 'auto !important'
        },
        'i-button.custom-btn': {
          background: Theme.background.main,
          padding: '0.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.5,
          alignSelf: 'center',
          textAlign: 'center',
          opacity: 1,
          color: Theme.text.primary,
          $nest: {
            '&:not(.disabled):hover': {
              background: Theme.background.main
            },
            '&> span': {
              verticalAlign: 'middle',
            },
            '&> i-icon': {
              maxWidth: 10,
              height: '16px !important',
              opacity: 0.5,
              marginRight: 'unset',
              fill: Theme.text.primary
            },
            '&> :not(:last-child)': {
              marginRight: '0.5rem'
            }
          }
        },
        '.text-value': {
          display: 'block',
          $nest: {
            '> *': {
              fontSize: '1.25rem',
              paddingRight: '0.25rem'
            }
          }
        },
        '.token-input': {
          width: '100%',
          background: 'transparent'
        },
        '.token-input > input': {
          width: '100%',
          height: 'auto !important',
          padding: '.375rem .75rem',
          paddingRight: '0.25rem',
          paddingLeft: 0,
          borderRadius: '0.25rem',
          border: 'none',
          background: 'transparent',
          color: Theme.text.primary,
          fontSize: '1.25rem',
          textAlign: 'right'
        }
      }
    },
  }
})

export const btnDropdownStyle = Styles.style({
  marginBlock: '.25rem',
  $nest: {
    '> i-button': {
      background: Theme.background.main,
      boxShadow: 'none',
      opacity: 0.9,
      border: 'none',
      borderRadius: '0.5rem',
      height: 'auto',
      padding: '0.5rem',
      justifyContent: 'space-between',
      $nest: {
        'span': {
          marginInline: '8px auto',
          fontWeight: 'normal'
        },
        '&:hover': {
          background: `${Theme.background.main} !important`,
          opacity: 1
        }
      }
    },
    'i-modal': {
      width: '100%'
    },
    '.modal': {
      padding: '0.25rem 0',
      marginTop: 0,
      border: `2px solid ${Theme.action.focusBackground}`,
      background: Theme.background.modal,
      borderRadius: 4,
      minWidth: 0,
      maxHeight: '50vh',
      overflow: 'auto',
      $nest: {
        '&::-webkit-scrollbar': {
          width: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '5px',
        },
        'i-hstack': {
          padding: '0.35rem 0.5rem',
          fontSize: '0.875rem',
          $nest: {
            '&:hover': {
              background: Theme.action.focusBackground,
            },
            '&.disabled': {
              cursor: 'default !important',
              opacity: '0.5',
              $nest: {
                '&:hover': {
                  background: 'transparent'
                }
              }
            }
          }
        }
      }
    }
  }
})

export const contentXchainSwap = Styles.style({
  padding: '1.25rem',
  // margin: '0.5rem auto 2rem',
  marginTop: '0.5rem',
  marginBottom: '2rem',
  background: Theme.background.modal,
  borderRadius: '1rem'
})

export const inputTokenContainerStyle = Styles.style({
  padding: '0.5rem 1rem',
  marginInline: '-15px'
})

export const customTokenInputStyle = Styles.style({
  $nest: {
    '#inputAmount input': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }
})