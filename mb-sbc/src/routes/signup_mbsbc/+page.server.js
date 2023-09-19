/** @type {import('./$types').Actions} */

import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		// Google Forms ID
		const formID = '1FAIpQLSfcLxAqo9gAshQy68kySLIfJBM3W5E2DvoizrG_GUsqcxCYMQ';

		const formData = await request.formData();
		const name = formData.get('name');
		const child = formData.get('child');
		const grade = formData.get('grade');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const signin = formData.get('signin');

		const contactFormSchema = object({
			name: string().min(2, 'too short').required('We only accept named users'),
			child: string().min(2, 'too short').required('We only accept named children'),
			grade: string().required(),
			email: string().required().email(),
			phone: string().required(),
			signin: string().required()
		});

		try {
			const result = await contactFormSchema.validate(
				{ name, child, grade, email, phone, signin },
				{ abortEarly: false }
			);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.1237662491=${name}&entry.731280150=${child}&entry.866603010=${email}&entry.1854080014=${phone}&entry.2105824571=${grade}&entry.1456306425=${signin}&submit=Submit`;

			const res = await fetch(prefilledLink);

			return {
				success: true,
				status: 'success'
			};
		} catch (error) {
			console.log({ error });
			const errors = error.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message, success: false, status: 'failed' };
			}, {});

			return {
				errors,
				name,
				child,
				grade,
				email,
				phone
			};
		}
	}
};
