const user = {
    namespaced: true,
    state: {
        real_name: "",
        username: "",
        islogin: false,
        password: "",
        sex: "",
        status:"",
        type: "",
        student: {
            school_name:"",
            grade:"",
            major:""
        },
        teacher: {
            profession_title:"",
            research_direction:"",
            lab_belonging:""
        },
        alumni: {
            school_name:"",
            work_field:"",
            enterprise_belonging:""
        }
    },
    mutations: {

    },
    actions: {

    }
};

export default user;