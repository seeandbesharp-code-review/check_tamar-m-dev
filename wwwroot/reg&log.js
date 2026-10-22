const Register = async () => {
    const user = {
        name: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value
    };
    const response = await fetch('api/Users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    if (response.ok) {
        alert("נרשמת בהצלחה")
        document.getElementById('reg-name').value = '';
        document.getElementById('reg-email').value = '';
        document.getElementById('reg-password').value = '';
    }
    else {
        alert("ההרשמה לא הצליחה")
    }
}
const Login = async () => {
    const user = {
        email: document.getElementById('log-email').value,
        password: document.getElementById('log-password').value
    };
    try {
        const response = await fetch('api/Users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (response.ok) {
            alert("נכנסת בהצלחה")
            const logUser = await response.json();
            sessionStorage.setItem("logUser", JSON.stringify(logUser));
            document.getElementById('log-email').value = '';
            document.getElementById('log-password').value = '';
            window.location.href = 'Update.html';
        }
        else {
            alert("שם משתמש או סיסימא שגויים");
        }
    }
    catch {
        console.log("Error!!!!")
    }
}