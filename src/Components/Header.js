import React from 'react';
import Button from "@material-ui/core/Button";

import SendIcon from '@material-ui/icons/Send';


export default function Header() {


  return (
    <div className="header">

    <Button href="mailto:rextejiri@gmail.com">
  	<SendIcon/>
    </Button>
    </div>

  );

}
