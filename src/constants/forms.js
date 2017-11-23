export const FORM_MODES = {
	EDIT: 'EDIT',
	CREATE: 'CREATE'
};

export const FORM_NAMES = {
	CREATE_CATEGORY: 'FORM::CREATE_CATEGORY',
	EDIT_CATEGORY: 'FORM::EDIT_CATEGORY',
	CREATE_GOOD: 'FORM::CREATE_GOOD',
	EDIT_GOOD: 'FORM::EDIT_GOOD',
	CREATE_SIGNUP_USER: 'FORM::CREATE_SIGNUP_USER',
	CREATE_LOGIN_USER: 'FORM::CREATE_LOGIN_USER'
};

export const CATEGORY_FORM_FIELDS = {
	ID: 'id',
	NAME: 'name'
};

export const GOOD_FORM_FIELDS = {
	ID: 'id',
    NAME: 'name',
    SENDER_NAME: 'senderName',
	SENDER_EMAIL: 'senderEmail',
	CATEGORY_ID: 'categoryId',
    BODY: 'body',
    IMG: 'img'
};

export const USER_REGISTRATION_FORM_FIELDS = {
	FIRST_NAME: 'firstName',
	LAST_NAME: 'lastName',
	EMAIL: 'email',
	PASSWORD: 'password',
	CONFIRM_PASSWORD:'confirmPassword'
};

export const USER_LOGIN_FORM_FIELDS = {
	EMAIL: 'email',
	PASSWORD: 'password'
};