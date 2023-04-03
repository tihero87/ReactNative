import React from 'react';

import {Line, Msg, HeaderWrapper} from "./styled";

export const Header = () => {
    return (
        <HeaderWrapper>
        <Line>
            <Msg>
                Привет я шапка
            </Msg>
        </Line>
        </HeaderWrapper>
    );
};