import { error, redirect } from '@sveltejs/kit';

let job:string = "";
let org:string = "";
let jobTitle:string = "";

export const load = async({locals, url})=>{
  if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

    const jobPostedId = url.searchParams.get('jobId');

    if(jobPostedId){
      try{
        const {id, orgName, title} = await locals.pb.collection("jobs").getOne(jobPostedId);
        job = id;
        org = orgName;
        jobTitle = title
      }
      catch(err:any){
        console.log("Error:", err);
        throw error(err.status, err.message);
      }
  }
  if(!jobPostedId){
    throw redirect(404, "Job Not found")
  }
}

export const actions = {
    apply: async ({ request, locals }) => {

      const formData = Object.fromEntries(await request.formData());

      try{
          const applyData = await locals.pb.collection("applications").create({...formData, jobId:job, orgName:org, userId:locals.user.id, jobTitle:jobTitle});
          
          return {
            applyData:applyData,
            message:"success",
            redirect: '/'
          }
      }
      catch(err:any){
        console.log("Error:", err);
        return {
          message: "error",
          error: err.message
      };
      }

      


    }
};