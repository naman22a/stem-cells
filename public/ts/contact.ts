const contactBtn = document.getElementById('contact-btn') as HTMLButtonElement;

const emptyValidation = (string: string): boolean => (string == null || string == '') ?false : true;
const emailValidation = (email: string): boolean => /(^[a-zA-Z])*@*\.com$/.test(email);

contactBtn.addEventListener('click' , (e)=>{
    e.preventDefault();

    const givenName = (document.getElementById('name') as HTMLInputElement).value;
    const givenEmail = (document.getElementById('email') as HTMLInputElement).value;
    const givenMessage = (document.getElementById('message') as HTMLInputElement).value;

    let error = false;

    const details = {
        name: givenName,
        email: givenEmail,
        message: givenMessage
    };

    if(
        emptyValidation(givenName) &&
        emptyValidation(givenMessage) &&
        emailValidation(givenEmail)
    ){
        alert("Your form has been submitted");
    }else{
        error = true;
        alert('Invaild Details');

        console.log(emptyValidation(givenName));
        console.log(emailValidation(givenEmail));
        console.log(emptyValidation(givenMessage));
    }

    // Sending data to the Server

    if(!error){
        const url = '/contact';

        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        };

        fetch(url , params)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
});