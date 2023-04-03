import styled from "styled-components";
import {TEXT} from "../../ui/Text/Text";

export const Line = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`
export const HeaderWrapper = styled.View`
    padding: 40px 20px 20px;
  background: lightslategray;
`

export const Msg = styled.Text`
    ${TEXT};
`
