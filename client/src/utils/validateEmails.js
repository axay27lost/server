/**
 * Created by Developer39 on 8/17/2017.
 */
const re= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (emails)=>{
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email=> re.test(email) === false)

    if(invalidEmails.length)
    {
        return `These Emails Is Invalid: ${invalidEmails}`
    }
    return;
};