import React from 'react';
import PropTypes from 'prop-types';

// function boldString(str, substr = null) {
// 	var strRegExp = new RegExp(substr, 'g');
// 	return str.replace(strRegExp, '<b>' + substr + '</b>');
// }

const BlogList = (props) => {
	const { title, list = [] } = props;
	return (
		<>
			<span>{title}</span>
			<ul role='list' className='ml-2 list-decimal list-inside'>
				{list.map((l, i) => (
					<li key={i} dangerouslySetInnerHTML={{ __html: l }}></li>
				))}
			</ul>
		</>
	);
};

BlogList.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
};

export default BlogList;
