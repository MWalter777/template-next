import React, { useState } from 'react';
import { Button, Collapse } from 'reactstrap';
import Link from 'next/link';

const SubItems = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<li className='nav-item'>
			<button
				className='subitems-nav-menu nav-link menu-link'
				href={item.link ? item.link : '/#'}
				data-bs-toggle='collapse'
				onClick={toggle}
			>
				<i className={item.icon}></i>
				<span data-key='t-apps'>{item.label}</span>
				{item.badgeName ? (
					<span
						className={'badge badge-pill bg-' + item.badgeColor}
						data-key='t-new'
					>
						{item.badgeName}
					</span>
				) : null}
			</button>
			<Collapse className='menu-dropdown' isOpen={isOpen} id='sidebarApps'>
				<ul className='nav nav-sm flex-column test'>
					{/* subItms  */}
					{item.subItems &&
						(item.subItems || []).map((subItem, key) => (
							<React.Fragment key={key}>
								{!subItem.isChildItem ? (
									<li className='nav-item'>
										<Link
											href={subItem.link ? subItem.link : '/#'}
											className='nav-link'
										>
											{subItem.label}
											{subItem.badgeName ? (
												<span
													className={
														'badge badge-pill bg-' + subItem.badgeColor
													}
													data-key='t-new'
												>
													{subItem.badgeName}
												</span>
											) : null}
										</Link>
									</li>
								) : (
									<li className='nav-item'>
										<Link
											onClick={subItem.click}
											className='nav-link'
											href='/#'
											data-bs-toggle='collapse'
										>
											{subItem.label}
											{subItem.badgeName ? (
												<span
													className={
														'badge badge-pill bg-' + subItem.badgeColor
													}
													data-key='t-new'
												>
													{subItem.badgeName}
												</span>
											) : null}
										</Link>
										<Collapse
											className='menu-dropdown'
											isOpen={subItem.stateVariables}
											id='sidebarEcommerce'
										>
											<ul className='nav nav-sm flex-column'>
												{subItem.childItems &&
													(subItem.childItems || []).map((childItem, key) => (
														<React.Fragment key={key}>
															{!childItem.childItems ? (
																<li className='nav-item'>
																	<Link
																		href={
																			childItem.link ? childItem.link : '/#'
																		}
																		className='nav-link'
																	>
																		{childItem.label}
																	</Link>
																</li>
															) : (
																<li className='nav-item'>
																	<Link
																		href='/#'
																		className='nav-link'
																		onClick={childItem.click}
																		data-bs-toggle='collapse'
																	>
																		{childItem.label}
																	</Link>
																	<Collapse
																		className='menu-dropdown'
																		isOpen={childItem.stateVariables}
																		id='sidebaremailTemplates'
																	>
																		<ul className='nav nav-sm flex-column'>
																			{childItem.childItems.map(
																				(subChildItem, key) => (
																					<li className='nav-item' key={key}>
																						<Link
																							href={subChildItem.link}
																							className='nav-link'
																							data-key='t-basic-action'
																						>
																							{subChildItem.label}{' '}
																						</Link>
																					</li>
																				)
																			)}
																		</ul>
																	</Collapse>
																</li>
															)}
														</React.Fragment>
													))}
											</ul>
										</Collapse>
									</li>
								)}
							</React.Fragment>
						))}
				</ul>
			</Collapse>
		</li>
	);
};

export default SubItems;
