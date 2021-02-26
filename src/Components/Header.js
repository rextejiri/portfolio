import React from 'react';
import Button from "@material-ui/core/Button";

import EmailIcon from '@material-ui/icons/Email';


export default function Header() {


  return (
    <div className="header">
    <Button size="large" href="mailto:rextejiri@gmail.com">
  	<EmailIcon fontSize="large" className="SendIcon"/>
    </Button>
    </div>

  );

}
