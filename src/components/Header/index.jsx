import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import menuData from './menuData.jsx';
import { useDispatch } from 'react-redux';
import api from '../../utils/api.js';
import { logout } from '../../store/auth.js';

const nestedMenuItems = [
  {
    title: 'Hero',
  },
  {
    title: 'Features',
  },
  {
    title: 'Testimonials',
  },
  {
    title: 'Ecommerce',
  },
];

function NavListOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="paragraph" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Career
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Various Fileds
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? 'rotate-90' : ''
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
          <MenuItem>Road Map</MenuItem>
          <MenuItem>Interview Prep</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? 'rotate-90' : ''
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem>React</MenuItem>
          <MenuItem>TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </>
  );
}
function NavListTwo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="paragraph" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          {/* <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? 'rotate-90' : ''
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu> */}
          <MenuItem>Daily Goal</MenuItem>
          <MenuItem>DSA Question</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? 'rotate-90' : ''
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem>React</MenuItem>
          <MenuItem>TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </>
  );
}
function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <NavListOne />
      <NavListTwo />
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Mentor
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Docs</ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      api
        .get('/user/logout')
        .then((res) => {
          dispatch(logout());
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        })
        .catch((error) => {
          console.log('Error while logging out:', error);
        });
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="outlined" size="sm" onClick={handleLogout}>
            Log out
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" fullWidth onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Collapse>
    </nav>
  );
}
