import styled from "styled-components"

export const StyledNavbarMain = styled.nav`

  display: flex;
  justify-content: center;
  border-bottom: solid var(--c-1) 3px;
  flex-wrap: wrap;
  overflow: hidden;

  * {
    transition: .3s;
  }

  .Logo{
    display: flex;
    background-color: var(--c-1);
    padding: 1em 2em;
    
    .siteLogo{
      margin-right: 1em;
    }
    a:hover{
      opacity: .7;
    }
  }

  /* .navwich{
    visibility: hidden;
  } */

  ul.menu{
    display: flex;
    list-style: none;
    margin: 0;
    flex-wrap: wrap;
    /* height: 100%; */
    justify-content: center;
    align-items: center;

    a{
      display: inline-block;
    }

    &.main{
      flex-direction: column;

      li{
        width: 100%;
        display: flex;
        justify-content: center;
      }

      a{
        background-color: transparent;
        color: var(--c-text-mode);
        padding: 2em 2em;
        width: 100%;
        text-align: center;

        &:hover{
          background-color: whitesmoke;
          color: black;
        }
      }
    }
    &.util{
      display: flex;
      flex-direction: row;
      a{
        background-color: var(--c-1);
        color: black;
        padding: 1em;
        border-right: solid var(--c-bg) 1px;

        &:hover{
          background-color: transparent;
          color: white;
        }
      }
    }

    /* li{
      a{
        padding: 1em 1em;

        &:hover{
          opacity: .7;
          
        }
      }
    } */
  }

  /* @media screen and (max-width: 550px) {
    .navwich{
      visibility: visible;
    }
  } */
  
`