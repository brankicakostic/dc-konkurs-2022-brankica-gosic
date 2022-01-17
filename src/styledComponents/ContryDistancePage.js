import styled from "styled-components";

export const Logo = styled.img`
  height: 54px;
  margin-right: 66.5px;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 16px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 107px);
`;

export const Input = styled.input`
  width: 328.5px;
`;

export const List = styled.div`
  padding: 1px 0;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 2px 0px rgba(154, 154, 154, 1);
  -moz-box-shadow: 0px 2px 2px 0px rgba(154, 154, 154, 1);
  box-shadow: 0px 2px 2px 0px rgba(154, 154, 154, 1);
`;

export const ListElement = styled.div`
  padding: 20px 8.5px;
  :hover {
    cursor: pointer;
    color: white;
    background: #9a9a9a;
  }
`;

export const Result = styled.div`
  text-align: center;
  margin-bottom: 21px;
`;
export const City = styled.p`
  color: #0099e2;
  font-size: 14.5px;
  margin-bottom: 16.5px;
  margin-top: 35.5px;
`;
export const Distance = styled.p`
  color: #757779;
  font-size: 13px;
`;
