import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {

    try{
        const jobData = await locals.pb.collection('jobs').getFullList({
            sort: '-created',
        });
        if(locals.pb.authStore.isValid) {
            const userApplications = await locals.pb.collection('applications').getFullList({
                filter: `userId="${locals.user.id}"`
            });
        return {
            jobData:jobData,
            userApplications:userApplications
        }
        }
        return {
            jobData:jobData 
        }
    
    }
    catch(err){
        console.log('Error:', err);
        throw error(400, 'Error fetching data');
    }
};