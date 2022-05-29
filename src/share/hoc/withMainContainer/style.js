import styled from '@emotion/styled';
import { withTheme } from '@mui/styles';


export default withTheme(styled.div`

    header {
        height:80px;
        width: 100%;
        top:0;
        background-color: #eaeaea;
    }


    aside {
        width:80px;
        height: 100%;
        left:0;
        border-right: 1px solid #999;
    }

    footer {
        background-color: #333;
    }
`)