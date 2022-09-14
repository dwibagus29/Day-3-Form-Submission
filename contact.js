function submitData() {
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if ( name == "" ) {
        return alert("Name must be filled")
    } else if ( email == "" ){
        return alert("Email must be filled")
    } else if ( phone == "" ){
        return alert("Phone Number must be filled")
    } else if ( subject == "" ){
        return alert("Subject must be filled")
    } else if ( message == "" ){
        return alert("Message must be filled")
    }

    let emailReceiver = "someone@example.com"

    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, let's talk, ${message} and contact with me ${phone} or my email ${email}`

    a.click();

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);
}