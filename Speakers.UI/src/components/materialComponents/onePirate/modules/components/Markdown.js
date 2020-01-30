import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    // eslint-disable-next-line react/display-name
    h1: { component: (props) => <Typography gutterBottom variant="h4" {...props} /> },
    // eslint-disable-next-line react/display-name
    h2: { component: (props) => <Typography gutterBottom variant="h6" {...props} /> },
    // eslint-disable-next-line react/display-name
    h3: { component: (props) => <Typography gutterBottom variant="subtitle1" {...props} /> },
    // eslint-disable-next-line react/display-name
    h4: { component: (props) => <Typography gutterBottom variant="caption" paragraph {...props} /> },
    // eslint-disable-next-line react/display-name
    p: { component: (props) => <Typography paragraph {...props} /> },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;
