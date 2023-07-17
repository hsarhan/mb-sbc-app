/** @type {import('./$types').Actions} */

import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		// Google Forms ID
		const formID = '1FAIpQLScRTwaGCKDJCMCXetMqUW3yDVozx_maqYRWRHeC16q08VdtRA';

		const formData = await request.formData();
		const name = formData.get('name');
		const child = formData.get('child');
		const grade = formData.get('grade');
		const email = formData.get('email');
		const phone = formData.get('phone');

		const contactFormSchema = object({
			name: string().min(2, 'too short').required('We only accept named users'),
			child: string().min(2, 'too short').required('We only accept named children'),
			grade: string().required(),
			email: string().required().email(),
			phone: string().required()
		});

		try {
			const result = await contactFormSchema.validate(
				{ name, child, grade, email, phone },
				{ abortEarly: false }
			);

			const prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.2058561196=${name}&entry.936601614=${child}&entry.1702948028=${grade}&entry.121616223=${email}&entry.599532316=${phone}&submit=Submit`;

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
