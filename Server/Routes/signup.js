

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../styles/signIn.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        .banner {
            position: relative;
            background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../image/backimage.jpg);
            background-size: cover;
            background-position: center;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: auto;
        }

        .navbar {
            width: 85%;
            margin: auto;
            padding: 35px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            width: 160px;
            cursor: pointer;
        }

        .navbar ul li {
            list-style: none;
            display: inline-block;
            margin: 0 20px;
            position: relative;
        }

        .navbar ul li a {
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
        }

        .navbar ul li::after {
            content: '';
            height: 3px;
            width: 0%;
            background: #e85d9e;
            position: absolute;
            left: 0;
            bottom: -10px;
            transition: 0.5s;
        }

        .navbar ul li:hover::after {
            width: 100%;
        }

        .content {
            width: 100%;
            margin: 70px auto 0;
            text-align: center;
            color: #fff;
        }

        .content h1 {
            font-size: 70px;
            margin-top: 40px;
            margin-bottom: 10px;
        }

        .content p {
            margin: 10px auto;
            margin-top: 10px;
            font-weight: 100;
            line-height: 25px;
        }

        button {
            width: 200px;
            padding: 15px 0;
            text-align: center;
            margin: 20px 10px;
            border-radius: 25px;
            font-weight: bold;
            border: 2px solid #e85d9e;
            background: transparent;
            color: #fff;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        }

        span {
            background: #e85d9e;
            height: 100%;
            width: 0;
            border-radius: 25px;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
            transition: 0.5s;
        }

        button:hover span {
            width: 100%;
        }

        button:hover {
            border: none;
            color: #e85d9e;
        }

        .pink-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #e85d9e;
            padding: 5px 0;
            text-align: center;
            font-size: 12px;
            z-index: 9999;
            opacity: 0.9;
        }

        .free-shipping {
            margin: 0;
        }

        .form {
            max-width: 300px;
            margin: 0 auto;
            padding: 2em;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            transition: .4s ease-in-out;
            opacity: 0.9;
            position: relative;

            z-index: 1;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);

        }

        .field {
            display: flex;
            align-items: center;
            gap: 0.5em;
            border-radius: 10px;
            padding: 0.6em;
            border: none;
            outline: none;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0.8;
        }

        .input-field {
            background: none;
            border: none;
            outline: none;
            width: 100%;
            color: #d3d3d3;
        }

        .form .btn {
            display: flex;
            justify-content: center;
            margin-top: 2.5em;
        }

        .button1,
        .button2 {
            padding: 0.5em 1em;
            border-radius: 5px;
            border: none;
            outline: none;
            transition: .4s ease-in-out;
            background-color: #252525;
            color: white;
        }

        .button3 {
            margin-right: -200%;
            padding: 0.5em 1em;
            border-radius: 5px;
            border: none;
            outline: none;
            transition: .4s ease-in-out;
            background-color: #252525;
            color: white;
            align-content: center;
        }


        .button1:hover,
        .button2:hover,
        .button3:hover {
            background-color: black;
            color: white;
        }

        .forget-password {
            display: flex;
            justify-content: flex-end;
            margin-top: 1em;
            align-items: center;
        }

        .forget-password a {
            color: white;
            font-size: 14px;
            text-decoration: none;
            margin-left: 0.5em;
            justify-content: flex-end;
        }

        .login {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1.5em;
            color: white;
            font-weight: bold;
            font-size: 24px;
            font-family: 'Arial', sans-serif;
            text-align: center;

        }

        .login input {
            margin-top: 0.5em;
        }

        .login a {
            color: white;
            font-size: 18px;
            text-decoration: none;
            margin-left: 0.5em;
            color: white;

        }

        .login a:hover {
            color: #ffffff;

        }

        .heading {
            color: white;
            background-color: white;

        }

        .fa-shopping-cart {
            font-size: 24px;
            color: #e85d9e;
        }

        .fa-shopping-cart:before {
            content: "\f07a";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            font-style: normal;
        }
    </style>
</head>

<body>
    <div class="pink-bar">
        <p class="free-shipping">Free Shipping on Orders Over $500</p>
    </div>

    <div class="banner">
        <div class="navbar">
            <img src="../image/updatelogo.png" class="logo">
            <ul>
                <li><a href="/page">Home</a></li>

                <li><a href="/necklace">Necklaces</a></li>
                <li><a href="/ring">Rings</a></li>
                <li><a href="/bracelate">Bracelets</a></li>
                <li><a href="/Earrings">Earrings</a></li>
                <li><a href="/cart"><i class="fas fa-shopping-cart"></i></a></li>
            </ul>
        </div>

        <form class="form" action="register" id="registration-form" >
            <p id="heading">Registration</p>

            <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path
                        d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                    </path>
                </svg>
                <input autocomplete="off" placeholder="Username" class="input-field" type="text" id="username">
                <p class="error" id="username-error"></p>
            </div>
            <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path
                        d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                    </path>
                </svg>
                <input autocomplete="off" placeholder="Email" class="input-field" type="text" id="email">
                <p class="error" id="email-error"></p>
            </div>
            <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 1.4c-3.65 0-6.6 2.95-6.6 6.6 0 1.95.87 3.7 2.26 4.9V13c0 .11.09.2.2.2h8.28c.11 0 .2-.09.2-.2v-.1c1.4-1.2 2.27-2.95 2.27-4.9 0-3.65-2.95-6.6-6.6-6.6zm0 1.2c2.84 0 5.2 2.3 5.2 5.4 0 .48-.06.94-.17 1.4H2c-.1-.45-.16-.92-.16-1.4 0-3.1 2.36-5.4 5.2-5.4zm0 9.6c-1.4 0-2.8-.48-3.9-1.4-.12-.08-.22-.2-.22-.36v-.78c0-.11.09-.2.2-.2h7.4c.11 0 .2.09.2.2v.77c0 .17-.1.3-.22.35-1.1.9-2.5 1.37-3.88 1.37z">
                    </path>
                </svg>
                <input autocomplete="off" placeholder="Password" class="input-field" type="password" id="password">
                <p class="error" id="password-error"></p>
            </div>
            <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.21 5.42L7.74 9l-1.47-1.47a.996.996 0 0 0-1.41 0l-3 3c-.39.39-.39 1.03 0 1.42l.01.01c.39.39 1.02.39 1.41 0L6 10.41l.35.35a.996.996 0 0 0 1.41 0L11.2 6.82c.39-.39.39-1.02.01-1.4l-.01-.01c-.39-.39-1.02-.39-1.41 0z">
                    </path>
                </svg>
                <input autocomplete="off" placeholder="Confirm Password" class="input-field" type="password"
                    id="confirm-password">
                <p class="error" id="confirm-password-error"></p>
            </div>
           <a href="/success"><button type="submit" class="register-button">Register</button></a> 
        </form>

    </div>

    <script src="signup.js"></script>
</body>

</html>