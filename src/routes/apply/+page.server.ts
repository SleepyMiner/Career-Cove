import { error, redirect } from '@sveltejs/kit';
import { formSchema } from '$lib/schemas.ts';

export const load = async({locals, url})=>{
    const jobId = url.searchParams.get('jobId');

    console.log(jobId)
}

export const actions = {
    apply: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

      // Validate the form data using the Zod schema
      try {
        const validatedData = formSchema.parse(data);
        // Handle the validated data (e.g., save to database)
        console.log(validatedData);
      } catch (e) {
        console.log(e)
      }
    }
};