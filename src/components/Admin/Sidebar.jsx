import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill, RiDashboard2Fill, RiUser2Fill } from 'react-icons/ri';
import { GiGraduateCap } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const loction = useLocation();
  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton
        url={'dashboard'}
        Icon={RiDashboard2Fill}
        title={'Dashboard'}
        active={loction.pathname === '/admin/dashboard'}
      />
      <LinkButton
        url={'courses'}
        Icon={GiGraduateCap}
        title={'Courses'}
        active={loction.pathname === '/admin/courses'}
      />
      <LinkButton
        url={'users'}
        Icon={RiUser2Fill}
        title={'Users'}
        active={loction.pathname === '/admin/users'}
      />
      <LinkButton
        url={'createcourse'}
        Icon={RiAddCircleFill}
        title={'Create Course'}
        active={loction.pathname === '/admin/createcourse'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, title, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        colorScheme={active ? 'purple' : ''}
        fontSize={'larger'}
        variant={'ghost'}
      >
        <Icon style={{ margin: '4px' }} />
        {title}
      </Button>
    </Link>
  );
}
