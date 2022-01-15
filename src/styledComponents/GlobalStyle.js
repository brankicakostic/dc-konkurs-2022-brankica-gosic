import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
   height: 100%;
   font-family: 'DejaVu Sans, sans-serif'
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  box-sizing: border-box;
}
}

h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8.5px;
}
p {
    margin-top: 0;
    font-size: 14px;
    padding-bottom: 63px;
}

input {
  box-sizing: border-box;
  width: 100%;
  background: #e8e8e8;
  border: 1px solid #eeeeee;
  border-radius:3px;
  font-size: 17px;
  color: #5c5c5c;
  padding: 17.5px 12px;
  
}  
.input-container {
    position: relative;
    width: 100%;
    margin-bottom: 28px;
}

.input-icon {
    position: absolute;
    top: 16px;
    right: 13px;
    cursor: pointer;
}

.logo { 
  height: 63px;
  text-align: center;
  padding: 26.5px 20px 0;
  margin:0;
}

button {
    height: 36px;
    background: #039ae6;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    line-height: 13px;
    padding: 12px 25px;
    margin-left:auto;
}

`;

export default GlobalStyle;
