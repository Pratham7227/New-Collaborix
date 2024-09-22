const BASE_URL="http://localhost:4000/api/v1"

export const authApis={
    signup:BASE_URL+'/user/signup',
    login:BASE_URL+'/user/login',
    getAllEmployees:BASE_URL+'/user/getemployees',
    getFullInformation:BASE_URL+'/user/getuserdetails'
}

export const projectApis={
    createProject:BASE_URL+'/project/createproject',
    addTeamMembers:BASE_URL+'/project/addteam',
    getProjecInfo:BASE_URL+'/project/getprojectdetails',
    deleteproject:BASE_URL+'/project/deleteproject'
}

export const taskApis={
    createtask:BASE_URL+'/task/createtask',
    workingontask:BASE_URL+'/task/taskinworking',
    tasksubmitbyemployee:BASE_URL+'/task/taskfromemployee',
    taskcheckbyadmin:BASE_URL+'/task/taskchecking'
}