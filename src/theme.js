import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F96302'
        },
        secondary: {
            main: '#fff'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: '#F96302',
                backgroundColor: '#fff',
                borderRadius: 0,
                border: '2px solid #F96302',
                height: 40,
                boxShadow: 'none',
                padding: 5,
                fontSize: 15,
                fontWeight: 700,
                minWidth: 150,
                transition: '.5s ease-in-out',
                '&:hover': { 
                    backgroundColor: '#F96302',
                    color: '#fff',
                },
            }
        }
    },
    props: {
        MuiButton: {
            disableRipple: true,
        }
    }
});
