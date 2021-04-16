import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  table: {
    minWidth: 506,
    width: '50%',
    overflowX: 'hidden',
    backgroundColor: '#fafafa'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    underline: 'hover'
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(4)
  },
  typography: {
    marginBottom: theme.spacing(2)
  }
}));
