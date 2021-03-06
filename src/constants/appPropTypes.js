import PropTypes from 'prop-types';


export const categoryProp = PropTypes.shape({
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
});

export const goodProp = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    senderEmail: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
	categoryId: PropTypes.string
});

export const categoryRequiredProp = categoryProp.isRequired;
export const goodRequiredProp = goodProp.isRequired;
export const categoryArrayRequiredProp = PropTypes.arrayOf(categoryProp).isRequired;
export const goodArrayRequiredProp = PropTypes.arrayOf(goodProp).isRequired;

export const action = PropTypes.shape({
	className: PropTypes.string,
	style: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
});

export const actionArrayRequired = PropTypes.arrayOf(action).isRequired;