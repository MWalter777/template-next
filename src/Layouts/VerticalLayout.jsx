import React from 'react';
import { Collapse } from 'reactstrap';
import { menuItems } from '../constant/navdata';
import Link from 'next/link';
import MenuTitle from '@/Components/ItemLayout/MenuTitle';
import SubItems from '@/Components/ItemLayout/SubItems';
import Item from '@/Components/ItemLayout/Item';

const VerticalLayout = () => {
	return (
		<>
			{menuItems.map((item, key) => {
				return (
					<React.Fragment key={key}>
						{item['isHeader'] ? (
							<MenuTitle label={item.label} />
						) : item.subItems ? (
							<SubItems item={item} />
						) : (
							<Item item={item} />
						)}
					</React.Fragment>
				);
			})}
		</>
	);
};

export default VerticalLayout;
