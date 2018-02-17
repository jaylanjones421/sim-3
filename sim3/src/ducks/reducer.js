//intitial state
const initialState = {
  friendsList: [],
  userFirstName: "",
  userLastName: "",
  gender: "",
  hairColor: "",
  eyeColor: "",
  hobby: "",
  birthdayDay: "",
  birthdayMonth: "",
  birthdayYear: ""
};

//consts
const UPDATE_FRIENDSLIST = "UPDATE_FRIENDSLIST";
const UPDATE_USERFIRSTNAME = "UPDATE_USERFIRSTNAME";
const UPDATE_USERLASTNAME = "UPDATE_USERLASTNAME";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_HAIRCOLOR = "UPDATE_HAIRCOLOR";
const UPDATE_EYECOLOR = "UPDATE_EYECOLOR";
const UPDATE_HOBBY = "UPDATE_HOBBY";
const UPDATE_BIRTHDAYDAY = "UPDATE_BIRTHDAYDAY";
const UPDATE_BIRTHDAYMONTH = "UPDATE_BIRTHDAYMONTH";
const UPDATE_BIRTHDAYYEAR = "UPDATE_BIRTHDAYYEAR";

//action creators
export function updateFriendsList(friend){
    return {
        type:UPDATE_FRIENDSLIST,
        payload:friend
    }
}
export function updateFirstName(firstName){
    return {
        type:UPDATE_USERFIRSTNAME,
        payload:firstName
    }
}
export function updateLastName(lastName){
    return {
        type:UPDATE_USERLASTNAME,
        payload:lastName
    }
}
export function updateGender(gender){
    return {
        type:UPDATE_GENDER,
        payload:gender
    }
}
export function updateHairColor(hairColor){
    return {
        type:UPDATE_HAIRCOLOR,
        payload:hairColor
    }
}
export function updateEyeColor(friend){
    return {
        type:updateFriendsList,
        payload:friend
    }
}
export function updateHobby(friend){
    return {
        type:updateFriendsList,
        payload:friend
    }
}
export function updateBirthdayDay(day){
    return {
        type:UPDATE_BIRTHDAYDAY,
        payload:day
    }
}
export function updateBirthdayMonth(month){
    return {
        type:UPDATE_BIRTHDAYMONTH,
        payload:month
    }
}
export function updateBirthdayYear(year){
    return {
        type:UPDATE_BIRTHDAYYEAR,
        payload:year
    }
}

//reducer (switch)
export default function reducer(state=initialState,action){
    let {payload,type}= action;
    switch(type){
        case UPDATE_FRIENDSLIST:
            return Object.assign({},state,{friendsList:payload});
        case UPDATE_USERFIRSTNAME:
            return Object.assign({},state,{userFirstName:payload});
        case UPDATE_USERLASTNAME:
            return Object.assign({},state,{userLastName:payload});
        case UPDATE_EYECOLOR:
            return Object.assign({},state,{eyeColor:payload});
        case UPDATE_HAIRCOLOR:
            return Object.assign({},state,{hairColor:payload});
        case UPDATE_GENDER:
            return Object.assign({},state,{gender:payload});
        case UPDATE_HOBBY:
            return Object.assign({},state,{hobby:payload});
        case UPDATE_BIRTHDAYDAY:
            return Object.assign({},state,{birthdayDay:payload});
        case UPDATE_BIRTHDAYMONTH:
            return Object.assign({},state,{birthdayMonth:payload});
        case UPDATE_BIRTHDAYYEAR:
            return Object.assign({},state,{birthdayYear:payload});
        default:
            return state;
    }
}