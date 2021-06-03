import styled from 'styled-components';

const Header = styled.header`
  background-color: red
`;

const ListItem = styled.li`

`;

const Navbar = () => {
  return (
    <Header id="navbar">
      <nav>
        <ul>
          <li>
            <a href="/account">account</a>
          </li>
          <li>
            <a href="/library">library</a>
          </li>
          <li>
            <a href="/browse">browse</a>
          </li>
        </ul>
      </nav>
    </Header>
  )
}

export default Navbar;