import styled from "styled-components"

export const NavbarMain = styled.nav`

  display: flex;
  justify-content: space-between;
  border-bottom: solid white 3px;
  flex-wrap: wrap;

  .Logo{
    display: flex;
    background-color: var(--c-1);
    padding: 2em;
  }

  ul.menu{
    display: flex;
    list-style: none;
    margin: 0;
    height: 100%;
    justify-content: center;
    align-items: center;

    &.main{
      a{
        background-color: transparent;
        color: white;

        &:hover{
          background-color: white;
          color: black;
        }
      }
    }
    &.util{
      a{
        background-color: white;
        color: black;

        &:hover{
          background-color: transparent;
          color: white;
        }
      }
    }

    li{
      a{
        padding: 1em 1em;

        &:hover{
          opacity: .7;
          
        }
      }
    }
  }
  
`