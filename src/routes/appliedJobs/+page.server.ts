import { redirect, error } from '@sveltejs/kit';

export const load = async({locals})=>{
    if(!locals.pb.authStore.isValid){
        return redirect(303, '/login');
    }

    try{
        const userApplications = await locals.pb.collection('applications').getFullList({
            filter: `userId="${locals.user.id}"`
        });

        return{
            userApplications:userApplications
        }
    }catch(err){
        console.log('Error:', err);
        throw error(400, 'Error fetching data');
    }
}