import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {

    try{
        const jobData = await locals.pb.collection('jobs').getFullList({
            sort: '-created',
        });

        return {
            jobData:jobData
        }
    
    }
    catch(err){
        console.log('Error:', err);
        throw error(400, 'Error fetching data');
    }
};